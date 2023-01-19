import { DeleteOutlined } from '@ant-design/icons';
import { Button, Pagination, Rate, Select } from 'antd';
import classNames from 'classnames/bind';
import Cookies from 'js-cookie';
import { useEffect, useReducer, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
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
  const { list } = useParams();
  const [collection, setCollection] = useState([]);
  const [all, setAll] = useState([]);
  const [selectedList, setSelectedList] = useState('all');
  const [displayList, setDisplayList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const [seed, forceUpdate] = useReducer((x) => x + 1, 0);

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
  }, [seed]);

  useEffect(() => {
    list ? setSelectedList(list) : setSelectedList('all');
  }, [list]);

  useEffect(() => {
    window.history.replaceState(null, 'React App', `/mybook/${selectedList}`);
  }, [selectedList]);

  useEffect(() => {
    if (selectedList === 'all') {
      setDisplayList(all);
    } else {
      setDisplayList(collection[selectedList]);
    }
  }, [page, selectedList, pageSize, collection, all]);

  const getCollection = (book) => {
    if (collection.length === 0) return;
    const result = Object.keys(collection).find((key) =>
      collection[key].find((item) => item.book._id.valueOf() === book._id.valueOf()),
    );
    return {
      value: result,
      label: collectionMap[result],
    };
  };

  const handleUpdateCollection = (bookId, target) => {
    const token = Cookies.get('token');
    userApi.updateCollection(bookId, target, token).then((res) => {
      if (res.data.code === 200) {
        // Object.keys(collection).every((key) =>
        //   collection[key].forEach((bookInCollection) => {
        //     console.log(bookInCollection?.book.id === bookId);
        //     if (bookInCollection?.book.id === bookId) collection[target].push(bookInCollection);
        //     collection[key].splice(collection[key].indexOf(bookInCollection), 1);
        //     console.log(collection);
        //     return false;
        //   }),
        // );
        // setDisplayList(collection[selectedList]);
        toast.success('Cập nhật tủ sách thành công');
        forceUpdate();
      }
    });
  };

  const handleRemoveFromCollection = (bookId) => {
    const token = Cookies.get('token');
    userApi.removeFromCollection(bookId, token).then((res) => {
      if (res.data.code === 200) {
        toast.success('Xóa khỏi tủ sách thành công');

        Object.keys(collection).forEach((key) =>
          collection[key].forEach((bookInCollection) => {
            if (bookInCollection?.book.id === bookId)
              collection[key].splice(collection[key].indexOf(bookInCollection), 1);
          }),
        );
        setAll(all.filter((bookInCollection) => bookInCollection.book.id !== bookId));
      }
    });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('Left')}>
          <div className={cx('Shelf')}>
            <div className={cx('shelfTitle')}>Tủ sách của tôi</div>
            <Button
              onClick={() => setSelectedList('all')}
              style={selectedList === 'all' ? { color: '#ee684b' } : { color: 'black' }}
              type="text" block>
              Tất cả<span>({all ? all.length : 0})</span>
            </Button>
            <Button
              onClick={() => setSelectedList('wishlist')}
              style={selectedList === 'wishlist' ? { color: '#ee684b' } : { color: 'black' }}
              type="text" block>
              Dự định đọc<span>({collection.wishlist ? collection.wishlist.length : 0})</span>
            </Button>
            <Button
              onClick={() => setSelectedList('readingList')}
              style={selectedList === 'readingList' ? { color: '#ee684b' } : { color: 'black' }}
              type="text" block>
              Đang đọc<span>({collection.readingList ? collection.readingList.length : 0})</span>
            </Button>
            <Button
              onClick={() => setSelectedList('readList')}
              style={selectedList === 'readList' ? { color: '#ee684b' } : { color: 'black' }}
              type="text" block>
              Đã đọc<span>({collection.readList ? collection.readList.length : 0})</span>
            </Button>
            <Button
              onClick={() => setSelectedList('droppedList')}
              style={selectedList === 'droppedList' ? { color: '#ee684b' } : { color: 'black' }}
              type="text" block>
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
                {displayList?.map((item) => (
                  <tr key={item.book.id}>
                    <td>
                      <img src={item.book.cover} alt="" />
                    </td>
                    <td className={cx('title')}>
                      <a href={`/book/${item.book.id}`} target="_blank" rel="noreferrer">
                        {item.book.title}
                      </a>
                    </td>
                    <td className={cx('author')}>{item.book.author}</td>
                    <td className={cx('avg')}>{item.book.reviewStat.averageRating}</td>
                    <td className={cx('lineRate')}>
                      <Rate
                        max={5}
                        defaultValue={item.book.reviewStat.averageRating}
                        style={{ fontSize: 13 }}
                        disabled
                      />
                    </td>
                    <td className={cx('shef')}>
                      <Select
                        labelInValue
                        defaultValue={getCollection(item.book)}
                        style={{
                          width: 120,
                        }}
                        onChange={(value) => handleUpdateCollection(item.book.id, value.key)}
                        options={Object.keys(collectionMap).map((key) => ({ value: key, label: collectionMap[key] }))}
                      />
                    </td>
                    <td className={cx('DateAdd')}>{DateConverter(item.addedAt).dateOnly}</td>
                    <td>
                      <Button type="text" size="small" onClick={() => handleRemoveFromCollection(item.book.id)}>
                        <DeleteOutlined />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={cx('Pagina')}>
            <Pagination
              total={displayList?.length}
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
