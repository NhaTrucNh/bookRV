import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import bluep4 from '../../asset/images/bluep4.jpg';

const cx = classNames.bind(styles);

function Home() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('catalog')}>
                <p>Mới xuất bản</p>
                <hr width="100%" color="#E8E8E8" />
            </div>
            <div className={cx('book-publish')}>
                <a href="##">
                    <img src={bluep4} alt="bluep4" />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1574943819i/43890641.jpg"
                        alt="Hamnet"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg"
                        alt="FStar"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1632915175i/58944475.jpg"
                        alt="flove"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1532714506i/40961427.jpg"
                        alt="1984"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg"
                        alt="Rye"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595373758i/53239311.jpg"
                        alt="HPE"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1664562463i/61432185.jpg"
                        alt="CSM12"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1367545443i/157993.jpg"
                        alt="HTB"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646444605i/485894.jpg"
                        alt="Meta"
                    />
                </a>
            </div>
            <a href="##">
                <p className={cx('readmore')}>Xem thêm</p>
            </a>

            <div className={cx('catalog')}>
                <p>Nhiều lượt đánh giá</p>
                <hr width="100%" color="#E8E8E8" />
            </div>
            <div className={cx('book-publish')}>
                <a href="##">
                    <img src={bluep4} alt="bluep4" />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1574943819i/43890641.jpg"
                        alt="Hamnet"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg"
                        alt="FStar"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1632915175i/58944475.jpg"
                        alt="flove"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1532714506i/40961427.jpg"
                        alt="1984"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg"
                        alt="Rye"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595373758i/53239311.jpg"
                        alt="HPE"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1664562463i/61432185.jpg"
                        alt="CSM12"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1367545443i/157993.jpg"
                        alt="HTB"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646444605i/485894.jpg"
                        alt="Meta"
                    />
                </a>
            </div>
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
