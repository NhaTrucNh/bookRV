import { DeleteOutlined, DislikeOutlined, LikeOutlined, UserOutlined } from '@ant-design/icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Progress, Rate } from 'antd';
import classNames from 'classnames/bind';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { bookApi } from '~/api/api';
import Popup from '../../components/Popup';
import styles from './BookShow.module.scss';

const cx = classNames.bind(styles);

function BookShow() {
  const { id } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [book, setBook] = useState({});
  const [isBookExist, setIsBookExist] = useState(0);

  useEffect(() => {
    bookApi.getBook(id).then((res) => {
      setBook(res.data.result);
      setIsBookExist(1);
    }).catch((err) => {
      toast.error(err.response.data.message);
      setIsBookExist(2);
    });
  }, [id]);

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
                <img
                  src={book.cover}
                  alt="BP4"
                />
              </div>
              <div className={cx('ActionButton')}>
                <div className={cx('AddBtn')}>
                  <button className={cx('Add')}>Thêm vào tủ sách</button>
                  <button className={cx('Change-btn')} onClick={() => setShowPopup(true)}>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                  <Popup trigger={showPopup} setTrigger={setShowPopup}>
                    <div className={cx('popup-content')}>
                      <h3>Chọn kệ tủ cho cuốn sách</h3>
                      <div className={cx('StepShelving')}>
                        <button className={cx('ButtonShelving')}>Muốn đọc</button>
                        <button className={cx('ButtonShelving')}>Đang đọc đọc</button>
                        <button className={cx('ButtonShelving')}>Đã đọc</button>
                        <button className={cx('ButtonShelving')}>Ngừng đọc</button>
                      </div>
                      <div className={cx('DeleteBtn')}>
                        <DeleteOutlined />
                        <div>Bỏ khỏi tủ sách</div>
                      </div>
                    </div>
                  </Popup>
                </div>
                <div className={cx('BuyBtn')}>
                  <button className={cx('Add')}>Nơi bán</button>
                </div>
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
                    <Rate allowHalf disabled defaultValue={book.rating?.averageRating} style={{ fontSize: 36 }} />
                  </div>
                  <div>
                    <h1>{book.rating?.averageRating}</h1>
                  </div>
                  <div className={cx('Statistic')}>
                    <div>{book.rating?.ratingCount}</div>
                    <div className={cx('space')}>Đánh giá</div>
                  </div>
                  <div className={cx('Statistic')}>
                    <div>{book.rating?.reviewCount}</div>
                    <div className={cx('space')}>Cảm nhận</div>
                  </div>
                </div>
              </a>
              <div className={cx('Summary')}>
                {book.description ? parse(book.description) : 'Không có mô tả'}
              </div>
              <div className={cx('Info')}>
                <p className={cx('InfoTitle')}>Thể loại:</p>
                <p className={cx('InfoTag')}>
                  {book.tags?.map((tag) => (
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
              <div className={cx('Mine')}>
                <h3>Của tôi</h3>
                <div className={cx('MyReviewCard')}>
                  <div className={cx('ReviewProfile')}>
                    <Avatar size={60} icon={<UserOutlined />} />
                    <div>
                      <a className={cx('Name')} href="##">
                        Nhã Trúc
                      </a>
                    </div>
                    <div className={cx('ReviewInfo')}>
                      <div>2</div>
                      <div>
                        <p>cảm nhận</p>
                      </div>
                    </div>
                  </div>
                  <div className={cx('WriteReview')}>
                    <div className={cx('Rate')}>
                      <Rate style={{ fontSize: 30 }} />
                      <p>Xếp hạng quyển sách này</p>
                    </div>
                    <a href={`/review/${book.id}/`} className={cx('WriteBtn')}>
                      <button className={cx('write')}>Viết cảm nhận</button>
                    </a>
                  </div>
                </div>
              </div>
              <hr />
              <div className={cx('Communicate')}>
                <h3>Đánh giá của cộng đồng</h3>
                <div id="Rtg" className={cx('ReviewsSectionStatistic')}>
                  <div className={cx('RatingStats')}>
                    <div className={cx('Rating')}>
                      <Rate allowHalf disabled defaultValue={book.rating?.averageRating} style={{ fontSize: 36 }} />
                    </div>
                    <div>
                      <h1>{book.rating?.averageRating}</h1>
                    </div>
                    <div className={cx('Statistic')}>
                      <div>{book.rating?.ratingCount}</div>
                      <div className={cx('space')}>Đánh giá</div>
                    </div>
                    <div className={cx('Statistic')}>
                      <div>{book.rating?.reviewCount}</div>
                      <div className={cx('space')}>Cảm nhận</div>
                    </div>
                  </div>
                </div>
                <div className={cx('HistogramBar')}>
                  <div className={cx('TitleStar')}>5 sao</div>
                  <div className={cx('ProgressBar')}>
                    <Progress
                      percent={book.rating?.ratingCount > 0 ? book.rating?.fiveStar / book.rating?.ratingCount * 100 : 0}
                      size="big"
                      status="active"
                      showInfo={false}
                      strokeColor={{ '0%': '#FADB14', '100%': '#FADB14' }}
                      strokeWidth={12}
                    />
                  </div>
                  <div className={cx('RatingHistogram')}>{book.rating?.fiveStar} ({`${book.rating?.ratingCount > 0 ? book.rating?.fiveStar / book.rating?.ratingCount * 100 : 0}%`})</div>
                </div>
                <div className={cx('HistogramBar')}>
                  <div className={cx('TitleStar')}>4 sao</div>
                  <div className={cx('ProgressBar')}>
                    <Progress
                      percent={book.rating?.ratingCount > 0 ? book.rating?.fourStar / book.rating?.ratingCount * 100 : 0}
                      size="big"
                      status="active"
                      showInfo={false}
                      strokeColor={{ '0%': '#FADB14', '100%': '#FADB14' }}
                      strokeWidth={12}
                    />
                  </div>
                  <div className={cx('RatingHistogram')}>{book.rating?.fourStar} ({`${book.rating?.ratingCount > 0 ? book.rating?.fourStar / book.rating?.ratingCount * 100 : 0}%`})</div>
                </div>
                <div className={cx('HistogramBar')}>
                  <div className={cx('TitleStar')}>3 sao</div>
                  <div className={cx('ProgressBar')}>
                    <Progress
                      percent={book.rating?.ratingCount > 0 ? book.rating?.threeStar / book.rating?.ratingCount * 100 : 0}
                      size="big"
                      status="active"
                      showInfo={false}
                      strokeColor={{ '0%': '#FADB14', '100%': '#FADB14' }}
                      strokeWidth={12}
                    />
                  </div>
                  <div className={cx('RatingHistogram')}>{book.rating?.threeStar} ({`${book.rating?.ratingCount > 0 ? book.rating?.threeStar / book.rating?.ratingCount * 100 : 0}%`})</div>
                </div>
                <div className={cx('HistogramBar')}>
                  <div className={cx('TitleStar')}>2 sao</div>
                  <div className={cx('ProgressBar')}>
                    <Progress
                      percent={book.rating?.ratingCount > 0 ? book.rating?.twoStar / book.rating?.ratingCount * 100 : 0}
                      size="big"
                      status="active"
                      showInfo={false}
                      strokeColor={{ '0%': '#FADB14', '100%': '#FADB14' }}
                      strokeWidth={12}
                    />
                  </div>
                  <div className={cx('RatingHistogram')}>{book.rating?.twoStar} ({`${book.rating?.ratingCount > 0 ? book.rating?.twoStar / book.rating?.ratingCount * 100 : 0}%`})</div>
                </div>
                <div className={cx('HistogramBar')}>
                  <div className={cx('TitleStar')}>1 sao</div>
                  <div className={cx('ProgressBar')}>
                    <Progress
                      percent={book.rating?.ratingCount > 0 ? book.rating?.oneStar / book.rating?.ratingCount * 100 : 0}
                      size="big"
                      status="active"
                      showInfo={false}
                      strokeColor={{ '0%': '#FADB14', '100%': '#FADB14' }}
                      strokeWidth={12}
                    />
                  </div>
                  <div className={cx('RatingHistogram')}>{book.rating?.oneStar} ({`${book.rating?.ratingCount > 0 ? book.rating?.oneStar / book.rating?.ratingCount * 100 : 0}%`})</div>
                </div>
              </div>
              <div className={cx('ReviewList')}>
                <div className={cx('ReviewerProfile')}>
                  <div className={cx('ReviewProfile')}>
                    <Avatar size={60} icon={<UserOutlined />} />
                    <div>
                      <a className={cx('Name')} href="##">
                        Nhã Trúc
                      </a>
                    </div>
                    <div className={cx('ReviewInfo')}>
                      <div>2</div>
                      <div>
                        <p>cảm nhận</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('ReviewCardContent')}>
                  <div className={cx('ReviewCard_Row')}>
                    <div className={cx('ShelfStatus')}>
                      <Rate disabled defaultValue={4} />
                    </div>
                    <div className={cx('TextDate')}>22/01/2019</div>
                  </div>
                  <div className={cx('TruncatedContent')}>
                    <div className={cx('CommentText')}>
                      In Volume 4 of Spy x Family, Anya steals the scene once more as she is
                      promised a dog as a reward for achieving her first Stella Star at school. A
                      day of shopping for a new addition is thrown into chaos when Twilight is
                      called away as he was informed about an assassination plot against Minister
                      Barintz.
                    </div>
                  </div>
                  <div className={cx('SocialFooter_statsContainer')}>
                    <div className={cx('LabelItemDT')}>
                      114<span>Đồng tình</span>
                    </div>
                    <div className={cx('LabelItemKDT')}>
                      10<span>Không đồng tình</span>
                    </div>
                  </div>
                  <div className={cx('SocialFooter_actionsContainer')}>
                    <div className={cx('ActionItemDT')}>
                      <LikeOutlined />
                      <span>Đồng tình</span>
                    </div>
                    <div className={cx('ActionItemKDT')}>
                      <DislikeOutlined />
                      <span>Không đồng tình</span>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookShow;
