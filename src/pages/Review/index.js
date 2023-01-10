import { Button, Input, Rate, Select } from 'antd';
import classNames from 'classnames/bind';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { reviewApi, userApi } from '~/api/api';
import styles from './Review.module.scss';

const cx = classNames.bind(styles);

export default function Review() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { Option } = Select;
  const { TextArea } = Input;

  const [review, setReview] = useState('');
  const [book, setBook] = useState({});
  // const [user, setUser] = useState({});
  const [rating, setRating] = useState(0);
  const [currentCollection, setCurrentCollection] = useState('');
  const [collection, setCollection] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token && id) {
      reviewApi
        .getReview(id, token)
        .then((response) => {
          if (response?.data.code === 200) {
            const result = response.data.result;
            // setUser(result.user);
            setBook(result.book);
            setCollection(result.book.collection ? result.book.collection : '');
            setCurrentCollection(result.book.collection ? result.book.collection : '');
            if (result.review) {
              setReview(result.review.id);
              setRating(result.review.rating);
              setContent(result.review.content);
            }
          }
        })
        .catch((error) => {
          const msg = error.response.data.message ? error.response.data.message : 'Verify Failed';
          toast.error(msg);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  const handleSubmit = async () => {
    const token = Cookies.get('token');

    if (currentCollection !== collection) {
      const res = await userApi.updateCollection(id, collection, token);
      if (res?.data.code === 200) {
        toast.success('Cập nhật tủ sách thành công');
      } else {
        toast.error('Cập nhật tủ sách thất bại');
      }
    }

    if (!review) {
      const data = {
        bookId: id,
        rating,
        content,
      };

      reviewApi
        .createReview(data, token)
        .then((response) => {
          if (response?.data.code === 200) {
            toast.success('Đánh giá thành công');
            navigate(`/book/${id}`);
          }
        })
        .catch((error) => {
          const msg = error.response.data.message ? error.response.data.message : 'Verify Failed';
          toast.error(msg);
        });
    } else {
      const data = {
        reviewId: review,
        rating,
        content,
      };

      reviewApi
        .updateReview(data, token)
        .then((response) => {
          if (response?.data.code === 200) {
            toast.success('Cập nhật đánh giá thành công');
            navigate(`/book/${id}`);
          }
        })
        .catch((error) => {
          const msg = error.response.data.message ? error.response.data.message : 'Verify Failed';
          toast.error(msg);
        });
    }
  };

  if (loading) {
    return <div className={cx('loading')}>Loading...</div>;
  } else
    return (
      <>
        <div className={cx('wrapper')}>
          <div className={cx('bookinfo')}>
            <div className={cx('cover')}>
              <img src={book.cover} alt="" />
            </div>
            <div className={cx('info')}>
              <div>
                <div className={cx('title')}>{book.title}</div>
                <div className={cx('author')}>
                  <span>bởi </span>
                  {book.author}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={cx('rating')}>
            <div className={cx('rate')}>
              <div className={cx('name')}>Đánh giá: </div>
              <Rate allowHalf defaultValue={rating} onChange={(value) => setRating(value)} />
            </div>
            <div className={cx('collection')}>
              <div className={cx('name')}>Tủ sách: </div>
              <Select
                placeholder="Chọn tủ sách"
                style={{ width: 200 }}
                value={collection}
                onChange={(value) => setCollection(value)}
              >
                <Option value="wishlist">Dự định đọc</Option>
                <Option value="readingList">Đang đọc</Option>
                <Option value="readList">Đã đọc</Option>
                <Option value="droppedList">Ngưng đọc</Option>
              </Select>
            </div>
            <div className={cx('review')}>
              <div className={cx('name')}>Đánh giá: </div>
              <TextArea
                placeholder="Nhập cảm nhận của bạn vào đây"
                style={{
                  height: 200,
                  marginBottom: 24,
                }}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className={cx('post')}>
              <Button type="primary" onClick={handleSubmit}>
                Đăng
              </Button>
            </div>
          </div>
        </div>
      </>
    );
}
