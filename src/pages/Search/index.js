import { Pagination } from 'antd';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { homeApi } from '~/api/api';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

export default function Search() {
  const [searchParams] = useSearchParams();
  const [books, setBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const keyword = searchParams.get('keyword');
    if (!keyword) toast.error('Keyword is required');
    else {
      console.log(keyword);
      homeApi.search(keyword).then((res) => {
        setBooks(res.data.result);
        setLoading(false);
      });
    }
  }, [searchParams]);

  useEffect(() => {
    books && setDisplayBooks(books.slice((page - 1) * pageSize, page * pageSize));
  }, [books, page, pageSize]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('GenreBook')}>
          <p className={cx('title')}>Tìm kiếm</p>
          <div className={cx('lBook')}>
            {displayBooks?.map((book, index) => (
              <a href={`/${book.id}`} key={index}>
                <img src={book.cover} alt="cover" />
              </a>
            ))}
          </div>
          <div className={cx('Pagina')}>
            <Pagination
              total={books?.length}
              defaultCurrent={page}
              defaultPageSize={pageSize}
              onChange={(value) => setPage(value)}
              pageSizeOptions={[10, 20, 50]}
              onShowSizeChange={(current, size) => setPageSize(size)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
