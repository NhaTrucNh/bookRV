import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>
                Sidebar Ut reprehenderit tempor nulla ea aliqua commodo excepteur aliqua ipsum mollit est minim
                reprehenderit.
            </h2>
        </aside>
    );
}

export default Sidebar;
