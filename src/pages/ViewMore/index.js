import { Button, Pagination } from 'antd';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { homeApi } from '~/api/api';
import styles from './ViewMore.module.scss';

const cx = classNames.bind(styles);

export default function ViewMore() {
  const { list } = useParams();
  const [allBooks, setAllBooks] = useState({});
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [filter, setFilter] = useState('newPublish');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    homeApi.getViewMore().then((res) => {
      setAllBooks(res.data.result);
    });
  }, []);

  useEffect(() => {
    if (list !== 'newPublish' && list !== 'mostReview') {
      setFilter('newPublish');
      window.history.replaceState(null, 'React App', `/viewmore/newPublish`);
      return;
    }
  }, [list]);

  useEffect(() => {
    window.history.replaceState(null, 'React App', `/viewmore/${filter}`);
  }, [filter]);

  useEffect(() => {
    if (filter && allBooks) {
      setFilteredBooks(allBooks[filter]);
    }
  }, [filter, allBooks]);

  useEffect(() => {
    filteredBooks && setDisplayBooks(filteredBooks.slice((page - 1) * pageSize, page * pageSize));
  }, [page, filteredBooks, pageSize]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('GenreBook')}>
          <p className={cx('title')}>
            <a href="genre">Sách mới xuất bản</a>
          </p>
          <div className={cx('lBook')}>
            {displayBooks?.map((book, index) => (
              <a href={`/${book.id}`} key={index}>
                <img src={book.cover} alt="cover" />
              </a>
            ))}
          </div>
          <div className={cx('Pagina')}>
            <Pagination
              total={filteredBooks?.length}
              defaultCurrent={page}
              defaultPageSize={pageSize}
              onChange={(value) => setPage(value)}
              pageSizeOptions={[10, 20, 50]}
              onShowSizeChange={(current, size) => setPageSize(size)}
            />
          </div>
        </div>
        <div className={cx('GenreBar')}>
          <div className={cx('title')}>Sắp xếp theo</div>
          <ul className={cx('list')}>
            <li>
              <Button
                onClick={() => setFilter('newPublish')}
                style={filter === 'newPublish' ? { color: '#ee684b' } : { color: 'black' }}
                type="text"
                block
              >
                Sách mới xuất bản
              </Button>
            </li>
            <li>
              <Button
                onClick={() => setFilter('mostReview')}
                style={filter === 'mostReview' ? { color: '#ee684b' } : { color: 'black' }}
                type="text"
                block
              >
                Sách nhiều lượt đánh giá
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
