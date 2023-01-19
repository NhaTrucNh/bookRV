import classNames from 'classnames/bind';
import styles from './OtherCriteria.module.scss';

const cx = classNames.bind(styles);

export default function OtherCriteria() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('GenreBook')}>
          <p className={cx('title')}>
            <a href="genre">Sách mới xuất bản</a>
          </p>
          <div className={cx('lBook')}>
              <a href="/">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1591987940i/20939661.jpg"
                  alt="cover"
                />
              </a>
              <a href="/">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1591987940i/20939661.jpg"
                  alt="cover"
                />
              </a>
              <a href="/">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1591987940i/20939661.jpg"
                  alt="cover"
                />
              </a>
              <a href="/">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1591987940i/20939661.jpg"
                  alt="cover"
                />
              </a>
          </div>
        </div>
        <div className={cx('GenreBar')}>
          <div className={cx('title')}>Sắp xếp theo</div>
          <ul className={cx('list')}>
              <li>
                <div><a href="/">Sách mới xuất bản</a></div>
              </li>
              <li>
                <div><a href="/">Sách nhiều lượt đánh giá</a></div>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
