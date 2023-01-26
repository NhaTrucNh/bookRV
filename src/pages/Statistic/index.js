import classNames from 'classnames/bind';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { adminApi } from '~/api/api';
import styles from './Statistic.module.scss';

const cx = classNames.bind(styles);

export default function Statistic() {
  const [statistics, setStatistics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get('token');
    adminApi.getStatistics(token).then((res) => {
      setStatistics(res.data.result);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className={cx('usermanagement')}>
        <div className={cx('title')}>Thống kê</div>
        <div className={cx('statistic')}>
          <div className={cx('content')}>
            <div className={cx('frame')}>
              <h4>Số lượng đầu sách</h4>
              <p>
                {statistics.books}
                <span> cuốn</span>
              </p>
            </div>
            <div className={cx('frame')}>
              <h4>Số lượng thành viên</h4>
              <p>
                {statistics.users}
                <span> thành viên</span>
              </p>
            </div>
            <div className={cx('frame')}>
              <h4>Số lượng danh mục</h4>
              <p>
                {statistics.categories}
                <span> danh mục</span>
              </p>
            </div>
            <div className={cx('frame')}>
              <h4>Số lượng điều phối viên</h4>
              <p>
                {statistics.mods}
                <span> điều phối viên</span>
              </p>
            </div>
            <div className={cx('frame')}>
              <h4>Số lượng đánh giá</h4>
              <p>
                {statistics.ratings}
                <span> đánh giá</span>
              </p>
            </div>
            <div className={cx('frame')}>
              <h4>Số lượng bình luận</h4>
              <p>
                {statistics.comments}
                <span> bình luận</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
