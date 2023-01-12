import classNames from 'classnames/bind';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { userApi } from '~/api/api';
import { isObjectEmpty } from '~/helper/helper';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);
const collectionMap = {
  wishlist: 'Dự định đọc',
  readingList: 'Đang đọc',
  readList: 'Đã đọc',
  droppedList: 'Ngừng đọc',
};

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (id) {
      userApi
        .getUser(id)
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
    }
  }, [navigate, id]);

  return (
    <div>
      <div className={cx('wrapper')}>
        <div className={cx('container')}>
          <h2 className={cx('title')}>Hồ sơ thành viên</h2>
        </div>
        <div className={cx('content')}>
          <div className={cx('profile')}>
            <div className={cx('top')}>
              <div className={cx('left')}>
                <div>
                  <img src={user.avatar} alt="" />
                </div>
                <div>
                  <a href="##">
                    2 <span>cảm nhận</span>
                  </a>
                </div>
              </div>
              <div className={cx('right')}>
                <div className={cx('userName')}>{user?.name}</div>
                {/* <hr /> */}
                <div className={cx('dob')}>
                  Ngày sinh: <span>{user.dateOfBirth ? user.dateOfBirth : 'Chưa cập nhật'}</span>
                </div>
                <div className={cx('aboutMe')}>
                  Về tôi: {'  '}
                  <span>{user.bio ? user.bio : 'Chưa cập nhật'}</span>
                </div>
              </div>
            </div>
            <hr />
            <div className={cx('bot')}>
              <div className={cx('Tit')}>Tủ sách của tôi</div>
              <div className={cx('shelf')}>
                {!isObjectEmpty(user) &&
                  Object.keys(user?.collectionCount).map((key, index) => (
                    <p key={index}>
                      {collectionMap[key]}
                      <span>({user.collectionCount[key]})</span>
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
