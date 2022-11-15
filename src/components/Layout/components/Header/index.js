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
                <div className={cx('logoBook')}>
                    <img src="https://i.imgur.com/eCnefBB.png" alt="logo" />
                </div>
                <div className={cx('navigation')}>{/* Điều hướng */}</div>
                <div className={cx('search')}>
                    <input placeholder="Bạn muốn tìm gì" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
