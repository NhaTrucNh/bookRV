/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../../asset/images/Logo.png';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('asideLeft')}>
                    <div className={cx('logoBook')}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div id={cx('menu')}>
                        <ul>
                            <li>
                                <a href="##">Trang chủ</a>
                            </li>
                            <li>
                                <p>/</p>
                            </li>
                            <li>
                                <a href="##">Tủ sách của tôi</a>
                            </li>
                            <li>
                                <p>/</p>
                            </li>
                            <li>
                                <a href="##">Danh mục thể loại</a>
                            </li>
                            <li>
                                <p>/</p>
                            </li>
                            <li>
                                <a href="##">Tin tức</a>
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
                    <div className={cx('button')}>
                        <a href="../../../../login">
                            <p>Đăng nhập</p>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
