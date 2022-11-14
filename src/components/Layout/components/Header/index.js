import classNames from 'classnames';
import styles from './Header.module.scss';

const cx = classNames.blind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>{/* logo */}</div>
        </header>
    );
}

export default Header;
