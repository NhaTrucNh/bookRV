import { DeleteOutlined } from '@ant-design/icons';
import { Button, Pagination, Rate, Select } from 'antd';
import classNames from 'classnames/bind';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { userApi } from '~/api/api';
import { DateConverter } from '~/helper/helper';
import styles from './MyBook.module.scss';

const cx = classNames.bind(styles);

const collectionMap = {
  wishlist: 'Dự định đọc',
  readingList: 'Đang đọc',
  readList: 'Đã đọc',
  droppedList: 'Ngừng đọc',
};

export default function MyBook() {
  const [collection, setCollection] = useState([]);
  const [all, setAll] = useState([]);
  const [selectedList, setSelectedList] = useState('all');
  const [displayList, setDisplayList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    const token = Cookies.get('token');
    userApi
      .getCollection(token)
      .then((res) => {
        const collection = res.data.result;
        setCollection(collection);
        const totalBook = Object.keys(collection)
          .map((key) => collection[key].map((item) => item))
          .flat();
        setAll(totalBook);
        setDisplayList(totalBook);
        setLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (selectedList === 'all') {
      setDisplayList(all);
    } else {
      setDisplayList(collection[selectedList]);
    }
  }, [page, selectedList, pageSize, collection, all]);

  if (loading) return <div>Loading...</div>;

  const handleChange = (value) => {
    console.log(value);
  };
  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('Left')}>
          <div className={cx('Shelf')}>
            <h4>Tủ sách của tôi</h4>
            <Button
              onClick={() => setSelectedList('all')}
              style={selectedList === 'all' ? { background: 'green' } : { background: 'red' }}
            >
              Tất cả<span>({all ? all.length : 0})</span>
            </Button>
            <Button
              onClick={() => setSelectedList('wishlist')}
              style={selectedList === 'wishlist' ? { background: 'green' } : { background: 'red' }}
            >
              Dự định đọc<span>({collection.wishlist ? collection.wishlist.length : 0})</span>
            </Button>
            <Button
              onClick={() => setSelectedList('readingList')}
              style={selectedList === 'readingList' ? { background: 'green' } : { background: 'red' }}
            >
              Đang đọc<span>({collection.readingList ? collection.readingList.length : 0})</span>
            </Button>
            <Button
              onClick={() => setSelectedList('readList')}
              style={selectedList === 'readList' ? { background: 'green' } : { background: 'red' }}
            >
              Đã đọc<span>({collection.readList ? collection.readList.length : 0})</span>
            </Button>
            <Button
              onClick={() => setSelectedList('droppedList')}
              style={selectedList === 'droppedList' ? { background: 'green' } : { background: 'red' }}
            >
              Ngưng đọc<span>({collection.droppedList ? collection.droppedList.length : 0})</span>
            </Button>
          </div>
        </div>
        <div className={cx('Right')}>
          <div className={cx('BookTableStack')}>
            <table>
              <thead>
                <tr>
                  <th className={cx('cover')}>Ảnh bìa</th>
                  <th className={cx('title')}>Tiêu đề</th>
                  <th className={cx('author')}>Tác giả</th>
                  <th className={cx('avg')}>Điểm trung bình</th>
                  <th className={cx('lineRate')}>Đánh giá</th>
                  <th className={cx('shef')}>Tủ sách</th>
                  <th className={cx('DateAdd')}>Ngày thêm</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {displayList.length > 0 &&
                  displayList.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img src={item.book.cover} alt="" />
                      </td>
                      <td className={cx('title')}>{item.book.title}</td>
                      <td className={cx('author')}>{item.book.author}</td>
                      <td className={cx('avg')}>4.50</td>
                      <td className={cx('lineRate')}>
                        <Rate max={5} defaultValue={0} style={{ fontSize: 13 }} />
                      </td>
                      <td className={cx('shef')}>
                        <Select
                          labelInValue
                          defaultValue={{
                            value: 'Dự định đọc',
                            label: 'Dự định đọc',
                          }}
                          style={{
                            width: 120,
                          }}
                          onChange={handleChange}
                          options={[
                            {
                              value: 'Dự định đọc',
                              label: 'Dự định đọc',
                            },
                            {
                              value: 'Đang đọc',
                              label: 'Đang đọc',
                            },
                            {
                              value: 'Đã đọc',
                              label: 'Đã đọc',
                            },
                            {
                              value: 'Ngưng đọc',
                              label: 'Ngưng đọc',
                            },
                          ]}
                        />
                      </td>
                      <td className={cx('DateAdd')}>{DateConverter(item.addedAt).dateOnly}</td>
                      <td>
                        <DeleteOutlined />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className={cx('Pagina')}>
            <Pagination
              total={displayList.length}
              defaultCurrent={page}
              defaultPageSize={pageSize}
              onChange={(value) => setPage(value)}
              onShowSizeChange={(current, size) => setPageSize(size)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
