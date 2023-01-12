import { CaretDownFilled, CaretUpFilled, DeleteOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Progress, Rate } from 'antd';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import parse from 'html-react-parser';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { authApi, bookApi, reviewApi, userApi } from '~/api/api';
import Popup from '../../components/Popup';
import styles from './BookShow.module.scss';

const cx = classNames.bind(styles);
const collectionMap = {
  wishlist: 'Dự định đọc',
  readingList: 'Đang đọc',
  readList: 'Đã đọc',
  droppedList: 'Ngừng đọc',
};

function BookShow() {
  const { id } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [book, setBook] = useState({});
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState({});
  const [isBookExist, setIsBookExist] = useState(0);
  const [isLogged, setIsLogged] = useState(false);
  const [bookRating, setBookRating] = useState(0);
  const [userReview, setUserReview] = useState({});

  useEffect(() => {
    const token = Cookies.get('token');
    bookApi
      .getBook(id, token)
      .then((res) => {
        const book = res.data.result;
        setBook(book);
        setReviews(book.reviews);
        setUserReview(book.userReview);
        setBookRating(book.rating);
        setIsBookExist(1);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setIsBookExist(2);
      });
  }, [id]);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const email = JSON.parse(localStorage.getItem('user')).email;
      authApi.verify(email, token).then((res) => {
        if (res.data.code === 200) {
          setUser(res.data.result);
          setIsLogged(true);
        }
      });
    }
  }, []);

  useEffect(() => {
    console.log(userReview);
  }, [userReview]);

  const handleUpdateCollection = (collection) => {
    const token = Cookies.get('token');
    userApi.updateCollection(id, collection, token).then((res) => {
      if (res.data.code === 200) {
        setShowPopup(false);
        setBook({ ...book, userCollection: collection });
        toast.success('Cập nhật tủ sách thành công');
      }
    });
  };

  const handleRemoveFromCollection = () => {
    const token = Cookies.get('token');
    userApi.removeFromCollection(id, token).then((res) => {
      if (res.data.code === 200) {
        toast.success('Xóa khỏi tủ sách thành công');
        setBook({ ...book, userCollection: null });
        setShowPopup(false);
      }
    });
  };

  const handleRate = (value) => {
    const token = Cookies.get('token');
    const data = {
      bookId: id,
      rating: value,
    };
    reviewApi.rateBook(data, token).then((res) => {
      if (res.data.code === 200 || res.data.code === 201) {
        toast.success('Đánh giá thành công');
        setUserReview(res.data.result.userReview);
        setBookRating(res.data.result.rating);
      }
    });
  };

  const handleVote = (reviewId, action) => {
    const token = Cookies.get('token');
    const data = {
      action,
    };
    reviewApi
      .voteReview(reviewId, data, token)
      .then((res) => {
        if (res.data.code === 200) {
          toast.success(res.data.message);
          const updatedReview = res.data.result;
          setReviews(
            reviews.map((review) => {
              return review._id.valueOf() === updatedReview._id.valueOf()
                ? {
                    ...review,
                    upvotes: updatedReview.upvotes,
                    downvotes: updatedReview.downvotes,
                    voteStatus: updatedReview.voteStatus,
                  }
                : review;
            }),
          );
        } else {
          toast.error('Đã có lỗi xảy ra');
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Đã có lỗi xảy ra');
      });
  };

  if (isBookExist === 0) {
    return <div>Loading...</div>;
  }

  if (isBookExist === 2) {
    return <div>Book not found</div>;
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('column')}>
          <div className={cx('container')}>
            <aside className={cx('BookPage-LeftColumn')}>
              <div className={cx('BookCover')}>
                <img src={book.cover} alt="BP4" />
              </div>
              <div className={cx('ActionButton')}>
                {isLogged && (
                  <div className={cx('AddBtn')}>
                    {book.userCollection ? (
                      <button className={cx('Add')}>{collectionMap[book.userCollection]}</button>
                    ) : (
                      <button className={cx('Add')} onClick={() => handleUpdateCollection('wishlist')}>
                        Thêm vào tủ sách
                      </button>
                    )}
                    <button className={cx('Change-btn')} onClick={() => setShowPopup(true)}>
                      <FontAwesomeIcon icon={faAngleDown} />
                    </button>
                    <Popup trigger={showPopup} setTrigger={setShowPopup}>
                      <div className={cx('popup-content')}>
                        <h3>Chọn kệ tủ cho cuốn sách</h3>
                        <div className={cx('StepShelving')}>
                          {Object.keys(collectionMap).map((key, index) => (
                            <button
                              key={index}
                              className={(key === book.userCollection && cx('ButtonShelving')) || cx('ButtonShelving')}
                              onClick={() => handleUpdateCollection(key)}
                              disabled={key === book.userCollection}
                              id={index}
                            >
                              {collectionMap[key]}
                            </button>
                          ))}
                        </div>
                        <div className={cx('DeleteBtn')} onClick={handleRemoveFromCollection}>
                          <DeleteOutlined />
                          <div>Bỏ khỏi tủ sách</div>
                        </div>
                      </div>
                    </Popup>
                  </div>
                )}
                {book.buyLink &&
                  book.buyLink.map((link, index) => (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <div className={cx('BuyBtn')} key={index}>
                        <button className={cx('Add')}>{`Link ${link.split('/')[2]}`}</button>
                      </div>
                    </a>
                  ))}
              </div>
            </aside>
            <section className={cx('BookPage-RightColumn')}>
              <h1 className={cx('Title')}>{book.title}</h1>
              <a className={cx('Author')} href="##">
                {book.author}
              </a>
              <a href="#Rtg" className={cx('textStats')}>
                <div id="RS" className={cx('RatingStats')}>
                  <div className={cx('Rating')}>
                    <Rate allowHalf disabled defaultValue={bookRating?.averageRating} style={{ fontSize: 36 }} />
                  </div>
                  <div>
                    <h1>{bookRating?.averageRating}</h1>
                  </div>
                  <div className={cx('Statistic')}>
                    <div>{bookRating?.ratingCount}</div>
                    <div className={cx('space')}>Đánh giá</div>
                  </div>
                  <div className={cx('Statistic')}>
                    <div>{bookRating?.reviewCount}</div>
                    <div className={cx('space')}>Cảm nhận</div>
                  </div>
                </div>
              </a>
              <div className={cx('Summary')}>{book.description ? parse(book.description) : 'Không có mô tả'}</div>
              <div className={cx('Info')}>
                <p className={cx('InfoTitle')}>Thể loại:</p>
                <p className={cx('InfoTag')}>
                  {book.tags?.map((tag, index) => (
                    <a href={`/genre/${tag.code}`} className={cx('Tag')} key={tag.id} style={{ padding: '0 5px' }}>
                      {tag.name}
                    </a>
                  ))}
                </p>
              </div>
              <br />
              <div className={cx('Info')}>
                <p className={cx('InfoTitle')}>Nhà xuất bản:</p>
                <p className={cx('InfoContent')}>{book?.publisher}</p>
              </div>
              <br />
              <div className={cx('Info')}>
                <p className={cx('InfoTitle')}>Ngày xuất bản:</p>
                <>{book?.publishDate}</>
              </div>
              <br />
              <div className={cx('Info')}>
                <p className={cx('InfoTitle')}>Số trang:</p>
                <p>{book?.pageCount}</p>
              </div>
              <br />
              <p className={cx('TieuDe')}>TỰA SÁCH CÙNG DANH MỤC</p>
              <hr></hr>
              <div className={cx('sameGenre')}>
                {book?.alikeBooks?.map((book, index) => (
                  <a href={`/book/${book.id}`} key={index}>
                    <img className={cx('imgProduct')} src={book.cover} alt="BP4" />
                  </a>
                ))}
              </div>

              <hr />

              <h2 className={cx('ratingTitle')}>Đánh giá và cảm nhận</h2>
              {isLogged && (
                <div className={cx('Mine')}>
                  <h3>Của tôi</h3>
                  <div className={cx('MyReviewCard')}>
                    <div className={cx('ReviewProfile')}>
                      <Avatar size={60} src={user?.avatar} />
                      <div>
                        <a className={cx('Name')} href="##">
                          {user?.name}
                        </a>
                      </div>
                      <div className={cx('ReviewInfo')}>
                        <div>{userReview.userObj?.reviewCount}</div>
                        <div>
                          <p>đánh giá</p>
                        </div>
                      </div>
                    </div>
                    <div className={cx('WriteReview')}>
                      {userReview ? (
                        <>
                          <div className={cx('Rate')}>
                            <Rate style={{ fontSize: 30 }} defaultValue={userReview?.rating} onChange={handleRate} />
                            <p>Xếp hạng quyển sách này</p>
                          </div>
                          <a href={`/review/${book.id}/`} className={cx('WriteBtn')}>
                            <button className={cx('write')}>
                              {userReview?.content ? 'Sửa cảm nhận' : 'Viết cảm nhận'}
                            </button>
                          </a>
                        </>
                      ) : (
                        <>
                          <div className={cx('Rate')}>
                            <Rate style={{ fontSize: 30 }} defaultValue={0} onChange={handleRate} />
                            <p>Xếp hạng quyển sách này</p>
                            <a href={`/review/${book.id}/`} className={cx('WriteBtn')}>
                              <button className={cx('write')}>Viết cảm nhận</button>
                            </a>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
              <hr />
              <div className={cx('Communicate')}>
                <h3>Đánh giá của cộng đồng</h3>
                <div id="Rtg" className={cx('ReviewsSectionStatistic')}>
                  <div className={cx('RatingStats')}>
                    <div className={cx('Rating')}>
                      <Rate allowHalf disabled value={bookRating?.averageRating} style={{ fontSize: 36 }} />
                    </div>
                    <div>
                      <h1>{bookRating?.averageRating}</h1>
                    </div>
                    <div className={cx('Statistic')}>
                      <div>{bookRating?.ratingCount}</div>
                      <div className={cx('space')}>Đánh giá</div>
                    </div>
                    <div className={cx('Statistic')}>
                      <div>{bookRating?.reviewCount}</div>
                      <div className={cx('space')}>Cảm nhận</div>
                    </div>
                  </div>
                </div>
                <div className={cx('HistogramBar')}>
                  <div className={cx('TitleStar')}>5 sao</div>
                  <div className={cx('ProgressBar')}>
                    <Progress
                      percent={bookRating?.ratingCount > 0 ? (bookRating?.fiveStar / bookRating?.ratingCount) * 100 : 0}
                      size="big"
                      status="active"
                      showInfo={false}
                      strokeColor={{ '0%': '#FADB14', '100%': '#FADB14' }}
                      strokeWidth={12}
                    />
                  </div>
                  <div className={cx('RatingHistogram')}>
                    {bookRating?.fiveStar} (
                    {`${bookRating?.ratingCount > 0 ? (bookRating?.fiveStar / bookRating?.ratingCount) * 100 : 0}%`})
                  </div>
                </div>
                <div className={cx('HistogramBar')}>
                  <div className={cx('TitleStar')}>4 sao</div>
                  <div className={cx('ProgressBar')}>
                    <Progress
                      percent={bookRating?.ratingCount > 0 ? (bookRating?.fourStar / bookRating?.ratingCount) * 100 : 0}
                      size="big"
                      status="active"
                      showInfo={false}
                      strokeColor={{ '0%': '#FADB14', '100%': '#FADB14' }}
                      strokeWidth={12}
                    />
                  </div>
                  <div className={cx('RatingHistogram')}>
                    {bookRating?.fourStar} (
                    {`${bookRating?.ratingCount > 0 ? (bookRating?.fourStar / bookRating?.ratingCount) * 100 : 0}%`})
                  </div>
                </div>
                <div className={cx('HistogramBar')}>
                  <div className={cx('TitleStar')}>3 sao</div>
                  <div className={cx('ProgressBar')}>
                    <Progress
                      percent={
                        bookRating?.ratingCount > 0 ? (bookRating?.threeStar / bookRating?.ratingCount) * 100 : 0
                      }
                      size="big"
                      status="active"
                      showInfo={false}
                      strokeColor={{ '0%': '#FADB14', '100%': '#FADB14' }}
                      strokeWidth={12}
                    />
                  </div>
                  <div className={cx('RatingHistogram')}>
                    {bookRating?.threeStar} (
                    {`${bookRating?.ratingCount > 0 ? (bookRating?.threeStar / bookRating?.ratingCount) * 100 : 0}%`})
                  </div>
                </div>
                <div className={cx('HistogramBar')}>
                  <div className={cx('TitleStar')}>2 sao</div>
                  <div className={cx('ProgressBar')}>
                    <Progress
                      percent={bookRating?.ratingCount > 0 ? (bookRating?.twoStar / bookRating?.ratingCount) * 100 : 0}
                      size="big"
                      status="active"
                      showInfo={false}
                      strokeColor={{ '0%': '#FADB14', '100%': '#FADB14' }}
                      strokeWidth={12}
                    />
                  </div>
                  <div className={cx('RatingHistogram')}>
                    {bookRating?.twoStar} (
                    {`${bookRating?.ratingCount > 0 ? (bookRating?.twoStar / bookRating?.ratingCount) * 100 : 0}%`})
                  </div>
                </div>
                <div className={cx('HistogramBar')}>
                  <div className={cx('TitleStar')}>1 sao</div>
                  <div className={cx('ProgressBar')}>
                    <Progress
                      percent={bookRating?.ratingCount > 0 ? (bookRating?.oneStar / bookRating?.ratingCount) * 100 : 0}
                      size="big"
                      status="active"
                      showInfo={false}
                      strokeColor={{ '0%': '#FADB14', '100%': '#FADB14' }}
                      strokeWidth={12}
                    />
                  </div>
                  <div className={cx('RatingHistogram')}>
                    {bookRating?.oneStar} (
                    {`${bookRating?.ratingCount > 0 ? (bookRating?.oneStar / bookRating?.ratingCount) * 100 : 0}%`})
                  </div>
                </div>
              </div>
              {reviews?.length > 0 &&
                reviews.map((review, index) => {
                  if (review.content)
                    return (
                      <div className={cx('ReviewList')} key={index}>
                        <div className={cx('ReviewerProfile')}>
                          <div className={cx('ReviewProfile')}>
                            <a href={`/user/${review.userObj?.id}`}>
                              <Avatar size={60} src={review.userObj?.avatar} />
                            </a>
                            <div>
                              <a className={cx('Name')} href={`/user/${review.userObj?.id}`}>
                                {review.userObj?.name}
                              </a>
                            </div>
                            <div className={cx('ReviewInfo')}>
                              <div>{review.userObj?.reviewCount}</div>
                              <div>
                                <p>đánh giá</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={cx('ReviewCardContent')}>
                          <div className={cx('ReviewCard_Row')}>
                            <div className={cx('ShelfStatus')}>
                              <Rate disabled defaultValue={review.rating} />
                            </div>
                            <div className={cx('TextDate')}>{dayjs(review.createdAt).format('DD/MM/YYYY')}</div>
                          </div>
                          <div className={cx('TruncatedContent')}>
                            <div className={cx('CommentText')}>
                              <p>{review.content}</p>
                            </div>
                          </div>
                          <div className={cx('SocialFooter_statsContainer')}>
                            <div className={cx('LabelItemDT')}>
                              {review.upvotes?.length}
                              <span>Đồng tình</span>
                            </div>
                            <div className={cx('LabelItemKDT')}>
                              {review.downvotes?.length}
                              <span>Không đồng tình</span>
                            </div>
                          </div>
                          {isLogged && (
                            <div className={cx('SocialFooter_actionsContainer')}>
                              <div className={cx('ActionItemDT')} onClick={() => handleVote(review.id, 'upvote')}>
                                {review.voteStatus && review.voteStatus === 'upvote' ? (
                                  <CaretUpFilled />
                                ) : (
                                  <UpOutlined />
                                )}
                                <span>Đồng tình</span>
                              </div>
                              <div className={cx('ActionItemKDT')} onClick={() => handleVote(review.id, 'downvote')}>
                                {review.voteStatus && review.voteStatus === 'downvote' ? (
                                  <CaretDownFilled />
                                ) : (
                                  <DownOutlined />
                                )}
                                <span>Không đồng tình</span>
                              </div>
                            </div>
                          )}
                          <hr />
                        </div>
                      </div>
                    );
                  else return null;
                })}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookShow;
