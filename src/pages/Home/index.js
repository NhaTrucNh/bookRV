import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import BookList from '../../components/Layout/components/BookList';
// import bluep4 from '../../asset/images/bluep4.jpg';

const cx = classNames.bind(styles);

function Home() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('catalog')}>
                <p>Mới xuất bản</p>
                <hr color="#E8E8E8" />
            </div>
            <BookList />
            <a href="##">
                <p className={cx('readmore')}>Xem thêm</p>
            </a>

            <div className={cx('catalog')}>
                <p>Nhiều lượt đánh giá</p>
                <hr width="100%" color="#E8E8E8" />
            </div>
            <BookList />
            <a href="##">
                <p className={cx('readmore')}>Xem thêm</p>
            </a>

            <div className={cx('catalog')}>
                <p>Các thể loại sách</p>
                <hr width="100%" color="#E8E8E8" />
            </div>
            <div className={cx('genre')}>
                <div className={cx('listlink')}>
                    <ul>
                        <li>
                            <a href="##">Nghệ thuật</a>
                        </li>
                        <li>
                            <a href="##">Tiểu sử</a>
                        </li>
                        <li>
                            <a href="##">Kinh doanh</a>
                        </li>
                        <li>
                            <a href="##">Thiếu nhi</a>
                        </li>
                        <li>
                            <a href="##">Kinh điển</a>
                        </li>
                        <li>
                            <a href="##">Truyện tranh</a>
                        </li>
                        <li>
                            <a href="##">Sách dạy nấu ăn</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('listlink')}>
                    <ul>
                        <li>
                            <a href="##">Khoa học viễn tưởng</a>
                        </li>
                        <li>
                            <a href="##">Giả tưởng</a>
                        </li>
                        <li>
                            <a href="##">Kinh dị</a>
                        </li>
                        <li>
                            <a href="##">Lịch sử</a>
                        </li>
                        <li>
                            <a href="##">Bí ẩn</a>
                        </li>
                        <li>
                            <a href="##">Lãng mạn</a>
                        </li>
                        <li>
                            <a href="##">Du lịch</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('listlink')}>
                    <ul>
                        <li>
                            <a href="##">Thơ</a>
                        </li>
                        <li>
                            <a href="##">Âm nhạc</a>
                        </li>
                        <li>
                            <a href="##">Tâm lý</a>
                        </li>
                        <li>
                            <a href="##">Thể thao</a>
                        </li>
                        <li>
                            <a href="##">Self Help</a>
                        </li>
                        <li>
                            <a href="##">Thể loại khác</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Home;
