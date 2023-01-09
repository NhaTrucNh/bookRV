import { Button, Input, Rate, Select } from 'antd';
import classNames from 'classnames/bind';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { bookApi, reviewApi, userApi } from '~/api/api';
import styles from './Review.module.scss';

const cx = classNames.bind(styles);

export default function Review() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { Option } = Select;
  const { TextArea } = Input;

  const [book, setBook] = useState({});
  const [user, setUser] = useState({});
  const [rating, setRating] = useState(0);
  const [shelf, setShelf] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (Cookies.get('token') && localStorage.getItem('user')) {
      userApi
        .getSelf(Cookies.get('token'))
        .then((response) => {
          if (response?.data.code === 200) {
            setUser(response.data.result);
          }
        })
        .catch((error) => {
          const msg = error.response.data.message ? error.response.data.message : 'Verify Failed';
          toast.error(msg);
          Cookies.remove('token');
          localStorage.removeItem('user');
          navigate('/login');
        });
    } else {
      toast.error('Bạn chưa đăng nhập');
      Cookies.get('token') && Cookies.remove('token');
      localStorage.getItem('user') && localStorage.removeItem('user');
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const token = Cookies.get('token');
    if (user && id) {
      reviewApi
        .getReview(id, token)
        .then((response) => {
          if (response.data.code === 200) {
            const review = response.data.result;
            setRating(review.rating);
            // setShelf(review.shelf);
            setContent(review.content);
          }
        })
        .catch((error) => {
          const msg = error.response.data.message ? error.response.data.message : 'Verify Failed';
          toast.error(msg);
        });
    }
  }, [id, user]);

  useEffect(() => {
    if (id) {
      bookApi
        .getBook(id)
        .then((response) => {
          if (response?.data.code === 200) {
            setBook(response.data.result);
          }
        })
        .catch((error) => {
          const msg = error.response.data.message ? error.response.data.message : 'Verify Failed';
          toast.error(msg);
        });
    }
  }, [id]);

  const handleSubmit = () => {
    if (user.id && id) {
      reviewApi
        .postReview(user.id, id, rating, shelf, content, Cookies.get('token'))
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
    }
  };

  if (!book || !user) return <div>Loading...</div>;

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
            {rating !== 0 ? (
              <Rate allowHalf defaultValue={rating} onChange={(value) => setRating(value)} />
            ) : (
              <Rate allowHalf onChange={(value) => setRating(value)} />
            )}
          </div>
          <div className={cx('shelf')}>
            <div className={cx('name')}>Tủ sách: </div>
            <Select
              placeholder="Chọn tủ sách"
              style={{ width: 200 }}
              value={shelf}
              onChange={(value) => setShelf(value)}
            >
              <Option value="wantread">Muốn đọc</Option>
              <Option value="reading">Đang đọc</Option>
              <Option value="read">Đã đọc</Option>
              <Option value="drop">Ngưng đọc</Option>
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
