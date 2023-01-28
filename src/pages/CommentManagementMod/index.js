import { DeleteOutlined, ExclamationCircleFilled, ReloadOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Modal, Pagination, Rate } from 'antd';
import classNames from 'classnames/bind';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { adminApi } from '~/api/api';
import styles from './CommentManagementMod.module.scss';

const cx = classNames.bind(styles);
const token = Cookies.get('token');

export default function CommentManagementMod() {
  const { confirm } = Modal;
  const [reviews, setReviews] = useState([]);
  const [displayReviews, setDisplayReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [query, setQuery] = useState('');

  useEffect(() => {
    adminApi
      .getAllReviews(token)
      .then((res) => {
        if (res.data.result) {
          setReviews(res.data.result);
          setFilteredReviews(res.data.result);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    filteredReviews && setDisplayReviews(filteredReviews.slice((page - 1) * pageSize, page * pageSize));
  }, [filteredReviews, page, pageSize]);

  useEffect(() => {
    if (reviews.length > 0)
      setFilteredReviews(
        reviews.filter(
          (review) =>
            review.userObj?.name.includes(query) ||
            review.bookObj?.title.includes(query) ||
            review.rating?.toString() === query ||
            review.content?.includes(query),
        ),
      );
  }, [reviews, query]);

  const showDeleteConfirm = (review) => {
    confirm({
      title: 'Bạn có muốn xoá bình luận này không?',
      icon: <ExclamationCircleFilled />,
      content: 'Nhấn "Ok" để xoá bình luận',
      onOk() {
        adminApi
          .deleteReview(review.id, token)
          .then((res) => {
            if (res.data.code === 200) {
              // const index = reviews.findIndex((reviewElement) => reviewElement.id === review.id);
              const newReviews = reviews.map((reviewElement) =>
                reviewElement.id === review.id ? res.data.result : reviewElement,
              );
              setReviews(newReviews);
              return toast.success(res.data.message);
            } else return toast.error('Đã có lỗi xảy ra');
          })
          .catch((err) => {
            const msg = err.response.data.message ? err.response.data.message : 'Đã có lỗi xảy ra';
            return toast.error(msg);
          });
      },
      onCancel() {},
    });
  };

  const showRestoreConfirm = (review) => {
    confirm({
      title: 'Bạn có muốn phục hồi bình luận này không?',
      icon: <ExclamationCircleFilled />,
      content: 'Nhấn "Ok" để phục hồi bình luận',
      onOk() {
        adminApi
          .restoreReview(review.id, token)
          .then((res) => {
            if (res.data.code === 200) {
              // const index = reviews.findIndex((reviewElement) => reviewElement.id === review.id);
              const newReviews = reviews.map((reviewElement) =>
                reviewElement.id === review.id ? res.data.result : reviewElement,
              );
              setReviews(newReviews);
              return toast.success(res.data.message);
            } else return toast.error('Đã có lỗi xảy ra');
          })
          .catch((err) => {
            const msg = err.response.data.message ? err.response.data.message : 'Đã có lỗi xảy ra';
            return toast.error(msg);
          });
      },
      onCancel() {},
    });
  };

  return (
    <>
      <div className={cx('usermanagement')}>
        <div className={cx('title')}>Bình luận người dùng</div>
        <div className={cx('tab')}>
          <div className={cx('titles')}>
            <p>Quản lý bình luận</p>
          </div>
          <div className={cx('search')}>
            <form onSubmit={(e) => e.preventDefault()} role="search">
              <label htmlFor="search">Tìm kiếm</label>
              <input
                id="search"
                type="search"
                placeholder="Nhập vào đây..."
                autoFocus
                required
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit">
                <SearchOutlined style={{ fontSize: '16px', color: '#fff' }} />
              </button>
            </form>
          </div>
          <table className={cx('userList')}>
            <thead>
              <tr>
                <th width="5%">STT</th>
                <th width="18%">Tên sách</th>
                <th width="18%">Tên người dùng</th>
                <th width="19%">Đánh giá</th>
                <th width="37%">Bình luận</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {displayReviews?.map((review, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{review.bookObj.title}</td>
                  <td>{review.userObj.name}</td>
                  <td>
                    <Rate disabled defaultValue={review.rating} />
                  </td>
                  <td>{review.content}</td>
                  <td>
                    <Button
                      onClick={() => (review.deletedAt ? showRestoreConfirm(review) : showDeleteConfirm(review))}
                      type="link"
                      icon={review.deletedAt ? <ReloadOutlined /> : <DeleteOutlined />}
                      danger={!review.deletedAt}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={cx('pagin')}>
            <Pagination
              total={filteredReviews?.length}
              defaultCurrent={page}
              defaultPageSize={pageSize}
              onChange={(value) => setPage(value)}
              onShowSizeChange={(current, size) => setPageSize(size)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
