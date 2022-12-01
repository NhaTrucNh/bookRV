import classNames from 'classnames/bind';
import styles from './BookShow.module.scss';

const cx = classNames.bind(styles);

function BookShow() {
    return (
        <div className={cx('wrapper')}>
            <aside className={cx('BookPage-LeftColumn')}>
                <h1>
                    Cupidatat est sint occaecat aute incididunt anim ex ullamco nulla ea non consequat veniam pariatur.
                </h1>
            </aside>
            <section className={cx('BookPage-RightColumn')}>
                <h1>
                    Cupidatat est sint occaecat aute incididunt anim ex ullamco nulla ea non consequat veniam pariatur.
                </h1>
            </section>
        </div>
    );
}

export default BookShow;
