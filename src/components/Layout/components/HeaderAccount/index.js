/* eslint-disable jsx-a11y/alt-text */
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Dropdown } from 'antd';
import classNames from 'classnames/bind';
import logo from '../../../../asset/images/Logo.png';
import styles from './HeaderAccount.module.scss';

const cx = classNames.bind(styles);

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="profile" href="profile">
                Hồ sơ
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="account setting" href="accountsetting">
                Cài đặt tài khoản
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="change password" href="changepassword">
                Đổi mật khẩu
            </a>
        ),
    },
    {
        key: '4',
        label: (
            <a target="_blank" rel="logout" href="login">
                Đăng xuất
            </a>
        ),
    },
];

function HeaderAccount({ user }) {
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
                                        <a href="genres">Danh mục thể loại</a>
                                    </li>
                                    <li>
                                        <p>/</p>
                                    </li>
                                    <li>
                                        <a href="news">Tin tức</a>
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
                            >
                                <Button>{user?.name}</Button>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderAccount;
