/* eslint-disable jsx-a11y/alt-text */
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Dropdown } from 'antd';
import classNames from 'classnames/bind';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { authApi } from '~/api/api';
import logo from '../../../../asset/images/Logo.png';
import styles from './HeaderAccount.module.scss';

const cx = classNames.bind(styles);

function HeaderAccount({ user }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const email = JSON.parse(localStorage.getItem('user')).email;
    await authApi.logout(email);
    Cookies.remove('token');
    localStorage.removeItem('user');
    toast.success('Đăng xuất thành công');
    navigate('/login');
  };

  const items = [
    {
      key: '1',
      label: (
        <a rel="mod" href="/mod" style={{ display: user.role === 'admin' ? 'block' : 'none' }}>
          Quản lý
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a rel="profile" href="/profile">
          Hồ sơ người dùng
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a rel="account setting" href="/accountsetting">
          Chỉnh sửa hồ sơ
        </a>
      ),
    },
    // {
    //   key: '3',
    //   label: (
    //     <a rel="mod" href="/mod" style={{ display: user.role === 'admin' ? 'block' : 'none' }}>
    //       Quản lý
    //     </a>
    //   ),
    // },
    {
      key: '4',
      label: (
        <a rel="change password" href="/changepassword">
          Đổi mật khẩu
        </a>
      ),
    },
    {
      key: '5',
      label: <p onClick={handleLogout}>Đăng xuất</p>,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('column')}>
          <div className={cx('side')}>
            <div className={cx('asideLeft')}>
              <a href="/">
                <div className={cx('logoBook')}>
                  <img src={logo} alt="logo" />
                </div>
              </a>
              <div id={cx('menu')}>
                <ul>
                  <li>
                    <a href="/">Trang chủ</a>
                  </li>
                  <li>
                    <p>/</p>
                  </li>
                  <li>
                    <a href="/mybook">Tủ sách của tôi</a>
                  </li>
                  <li>
                    <p>/</p>
                  </li>
                  <li>
                    <a href="/genres">Danh mục thể loại</a>
                  </li>
                  <li>
                    <p>/</p>
                  </li>
                  <li>
                    <a href="/news">Tin tức</a>
                  </li>
                </ul>
              </div>
              <div className={cx('search')}>
                <input placeholder="BẠN MUỐN TÌM GÌ" spellCheck={false} />
                <button className={cx('clear')}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
                <button className={cx('search-btn')}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </div>
            <div className={cx('actions')}>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
                arrow={{
                  pointAtCenter: true,
                }}
                color="primary"
              >
                <Button type="primary" danger>{user?.name}</Button>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderAccount;
