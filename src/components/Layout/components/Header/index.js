/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('asideLeft')}>
                    <div className={cx('logoBook')}>
                        <img src="https://i.imgur.com/eCnefBB.png" alt="logo" />
                    </div>
                    <div id={cx('menu')}>
                        <ul>
                            <li>
                                <a href="https://www.youtube.com/">Trang chủ</a>
                            </li>
                            <li>
                                <p>/</p>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/">Tủ sách của tôi</a>
                            </li>
                            <li>
                                <p>/</p>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/">Danh mục thể loại</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('search')}>
                        <input placeholder="Bạn muốn tìm gì" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
                <div className={cx('actions')}>
                    <button className={cx('button')}>Đăng nhập</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
