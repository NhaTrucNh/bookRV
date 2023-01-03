import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { categoryApi, homeApi } from '~/api/api';
import styles from './Genre.module.scss';

const cx = classNames.bind(styles);

export default function Genre() {
  const { code } = useParams();
  const [category, setCategory] = useState({});
  const [allCategories, setAllCategories] = useState([]);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    homeApi.getCategories().then((res) => {
      setAllCategories(res.data.result);
    });
    categoryApi.getBooksByCategory(code).then((res) => {
      setCategory(res.data.result.tag);
      setBooks(res.data.result.books);
      setLoading(false);
    });
  }, [code]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('GenreBook')}>
          <p className={cx('title')}>
            <a href="genre">{category.name}</a>
          </p>
          <div className={cx('lBook')}>
            {books.map((book, index) => (
              <a href={`/book/${book.id}`} key={index}>
                <img
                  src={book.cover}
                  alt="cover"
                />
              </a>
            ))}
          </div>
        </div>
        <div className={cx('GenreBar')}>
          <p className={cx('title')}>Các thể loại khác</p>
          <hr />
          <ul className={cx('list')}>
            {allCategories.map((category, index) => (
              <li key={index}>
                <a href={`/genre/${category.code}`}>{category.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
