import { BookOutlined, CommentOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';
import classNames from 'classnames/bind';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { authApi } from '~/api/api';
import Logo from '../../../asset/images/Logo.png';
import styles from './ModDashboardFrame.module.scss';

const cx = classNames.bind(styles);

function ModDashboardFrame({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handleLogout = async () => {
    const email = JSON.parse(localStorage.getItem('user')).email;
    await authApi.logout(email);
    Cookies.remove('token');
    localStorage.removeItem('user');
    toast.success('Đăng xuất thành công');
    navigate('/login');
  };

  useEffect(() => {
    if (Cookies.get('token') && localStorage.getItem('user')) {
      authApi
        .verify(JSON.parse(localStorage.getItem('user')).email, Cookies.get('token'))
        .then((response) => {
          if (response.data.code === 200 && response.data.result.role === 'mod') {
            setUser(JSON.parse(localStorage.getItem('user')));
          } else {
            toast.error('Verify Failed');
            Cookies.remove('token');
            localStorage.removeItem('user');
            navigate('/login');
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
  }, [navigate]);

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="profile" href="/mod">
          Quản lý
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="profile" href="/profile">
          Hồ sơ người dùng
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="account setting" href="accountsetting">
          Chỉnh sửa hồ sơ
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a target="_blank" rel="change password" href="changepassword">
          Đổi mật khẩu
        </a>
      ),
    },
    {
      key: '5',
      label: (
        <p onClick={handleLogout} style={{ cursor: 'pointer' }}>
          Đăng xuất
        </p>
      ),
    },
  ];

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('sideBar')}>
          <div className={cx('info')}>
            <img src={user.avatar} alt="" />
            <div className={cx('Name')}>{user.name}</div>
          </div>
          <div className={cx('treev')}>
            <div className={cx('item')}>
              <a href="/mod/users">
                <span className={cx('icon')}>
                  <UserOutlined />
                </span>
                <span>Quản lý người dùng</span>
              </a>
            </div>

            <div className={cx('item')}>
              <a href="/mod/books">
                <span className={cx('icon')}>
                  <BookOutlined />
                </span>
                <span>Quản lý sách</span>
              </a>
            </div>

            <div className={cx('item')}>
              <a href="/mod/comments">
                <span className={cx('icon')}>
                  <CommentOutlined />
                </span>
                <span>Quản lý bình luận</span>
              </a>
            </div>
          </div>
        </div>
        <div className={cx('HeaderandFrame')}>
          <div className={cx('header')}>
            <a href="/">
              <img src={Logo} alt="" />
            </a>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
              arrow={{
                pointAtCenter: true,
              }}
            >
              <Button>{user.name}</Button>
            </Dropdown>
          </div>
          <div className={cx('frame')}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default ModDashboardFrame;
