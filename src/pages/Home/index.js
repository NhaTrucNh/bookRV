import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import bluep4 from '../../asset/images/bluep4.jpg';

const cx = classNames.bind(styles);

function Home() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('news-catalog')}>
                <p>Mới xuất bản</p>
                <hr width="100%" color="#E8E8E8" />
            </div>
            <div className={cx('book-publish')}>
                <div className="frame">
                    <a href="##">
                        <img src={bluep4} alt="bluep4" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;
