import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  LoadingOutlined,
  PlusOutlined,
  ReloadOutlined,
  SearchOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Button, DatePicker, Modal, Pagination, Tabs, Upload } from 'antd';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
import { useEffect, useReducer, useState } from 'react';
import { toast } from 'react-hot-toast';
import { adminApi } from '~/api/api';
import { DateConverter, isObjectEmpty } from '~/helper/helper';
import styles from './BooksManagement.module.scss';

const cx = classNames.bind(styles);
const token = Cookies.get('token');
const dateFormat = 'DD/MM/YYYY';

const uploadApi =
  process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD;

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    toast.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    toast.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

export default function BooksManagement() {
  const { confirm } = Modal;
  const [open, setOpen] = useState(false);
  const [seed, forceUpdate] = useReducer((x) => x + 1, 0);

  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [translator, setTranslator] = useState('');
  const [description, setDescription] = useState('');
  const [publisher, setPublisher] = useState('');
  const [publishDate, setPublishDate] = useState(Date.now());
  const [pageCount, setPageCount] = useState('');
  const [buyLink, setBuyLink] = useState('');
  const [query, setQuery] = useState('');

  const [bookUpdate, setBookUpdate] = useState([]);
  const [titleUpdate, setTitleUpdate] = useState('');
  const [coverUpdate, setCoverUpdate] = useState('');
  const [authorUpdate, setAuthorUpdate] = useState('');
  const [translatorUpdate, setTranslatorUpdate] = useState('');
  const [descriptionUpdate, setDescriptionUpdate] = useState('');
  const [publisherUpdate, setPublisherUpdate] = useState('');
  const [publishDateUpdate, setPublishDateUpdate] = useState(null);
  const [pageCountUpdate, setPageCountUpdate] = useState('');
  const [buyLinkUpdate, setBuyLinkUpdate] = useState('');
  const [selectedCategoriesUpdate, setSelectedCategoriesUpdate] = useState([]);

  useEffect(() => {
    adminApi
      .getAllBooks(token)
      .then((res) => {
        if (res.data.result) {
          setBooks(res.data.result);
          setFilteredBooks(res.data.result);
        }
      })
      .catch((err) => console.log(err));
  }, [seed]);

  useEffect(() => {
    adminApi
      .getAllCategories(token)
      .then((res) => {
        if (res.data.result) setCategories(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    filteredBooks && setDisplayBooks(filteredBooks.slice((page - 1) * pageSize, page * pageSize));
  }, [filteredBooks, page, pageSize]);

  useEffect(() => {
    if (books.length > 0)
      setFilteredBooks(
        books.filter(
          (book) => book.title?.includes(query) || book.author[0]?.includes(query) || book.publisher?.includes(query),
        ),
      );
  }, [books, query]);

  const showDeleteConfirm = (book) => {
    confirm({
      title: 'Bạn có muốn xoá cuốn sách này không?',
      icon: <ExclamationCircleFilled />,
      content: 'Nhấn "Ok" để xoá sách',
      onOk() {
        adminApi
          .deleteBook(book.id, token)
          .then((res) => {
            if (res.data.code === 200) {
              // const index = books.findIndex((reviewElement) => reviewElement.id === review.id);
              const newBooks = books.map((bookElement) => (bookElement.id === book.id ? res.data.result : bookElement));
              setBooks(newBooks);
              return toast.success(res.data.message);
            } else return toast.error('Đã có lỗi xảy ra');
          })
          .catch((err) => {
            const msg = err.response.data.message ? err.response.data.message : 'Đã có lỗi xảy ra';
            return toast.error(msg);
          });
      },
      onCancel() {},
    });
  };

  const showRestoreConfirm = (book) => {
    confirm({
      title: 'Bạn có muốn phục hồi cuốn sách này không?',
      icon: <ExclamationCircleFilled />,
      content: 'Nhấn "Ok" để phục hồi sách',
      onOk() {
        adminApi
          .restoreBook(book.id, token)
          .then((res) => {
            if (res.data.code === 200) {
              // const index = books.findIndex((reviewElement) => reviewElement.id === review.id);
              const newBooks = books.map((bookElement) => (bookElement.id === book.id ? res.data.result : bookElement));
              setBooks(newBooks);
              return toast.success(res.data.message);
            } else return toast.error('Đã có lỗi xảy ra');
          })
          .catch((err) => {
            const msg = err.response.data.message ? err.response.data.message : 'Đã có lỗi xảy ra';
            return toast.error(msg);
          });
      },
      onCancel() {},
    });
  };

  const onChange = (key) => {
    console.log(key);
  };

  useEffect(() => {
    console.log(selectedCategories);
  }, [selectedCategories]);

  const handleTagCheck = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, { code: value }]);
    } else {
      setSelectedCategories(selectedCategories.filter((category) => category !== value));
    }
  };

  const handleTagUpdateCheck = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategoriesUpdate([...selectedCategoriesUpdate, { code: value }]);
    } else {
      setSelectedCategoriesUpdate(selectedCategoriesUpdate.filter((category) => category !== value));
    }
  };

  const [coverLoading, setCoverLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [cover, setCover] = useState();

  const uploadButton = (
    <div>
      {coverLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const handleUpload = (info) => {
    if (info.file.status === 'uploading') {
      setCoverLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      !isObjectEmpty(bookUpdate) ? setCoverUpdate(info.file.response.url) : setCover(info.file.response.url);
      getBase64(info.file.originFileObj, (url) => {
        setCoverLoading(false);
        setImageUrl(url);
      });
    }
  };

  const UpdateModal = () => (
    <Modal
      title="Chỉnh sửa thông tin sách"
      centered
      open={open}
      onOk={() => handleUpdate()}
      onCancel={() => setOpen(false)}
      width={1280}
    >
      <div className={cx('column')}>
        <div className={cx('Left')}>
          <div className={cx('content')}>
            <div className={cx('info')}>
              <form>
                <label htmlFor="bookname">Tên sách</label>
                <input
                  type="text"
                  id="bookname"
                  name="bookname"
                  value={titleUpdate}
                  onChange={(e) => setTitleUpdate(e.target.value)}
                />

                <label htmlFor="author">Tác giả</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={authorUpdate && authorUpdate?.join('; ')}
                  onChange={(e) => setAuthorUpdate(e.target.value?.split('; '))}
                />

                <label htmlFor="genre">Thể loại</label>
                <div className={cx('GenreList')}>
                  {categories?.map((category, index) => (
                    <label className={cx('form-control')} key={index}>
                      <input
                        type="checkbox"
                        name="checkbox"
                        value={category.code}
                        checked={bookUpdate.tags?.find((e) => e.code === category.code)}
                        onChange={handleTagUpdateCheck}
                      />
                      {category.name}
                    </label>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={cx('Right')}>
          <div className={cx('content')}>
            <div className={cx('info')}>
              <form>
                <label htmlFor="summary">Tóm tắt</label>
                <textarea
                  id="story"
                  name="story"
                  onChange={(e) => setDescriptionUpdate(e.target.value)}
                  defaultValue={descriptionUpdate}
                ></textarea>
                <label htmlFor="coverbook">Ảnh bìa</label>
                <div className={cx('cover')}>
                  <Upload
                    maxCount={1}
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action={`${uploadApi}/admin/upload-cover`}
                    headers={{ Authorization: `Bearer ${Cookies.get('token')}` }}
                    beforeUpload={beforeUpload}
                    onChange={handleUpload}
                  >
                    {coverUpdate ? (
                      <img
                        src={coverUpdate}
                        alt="cover"
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    ) : (
                      // <Button icon={<UploadOutlined />}>Tải lên ảnh bìa</Button>
                      uploadButton
                    )}
                    <Button icon={<UploadOutlined />}></Button>
                  </Upload>
                </div>

                <label htmlFor="publisher">Nhà xuất bản</label>
                <input
                  type="text"
                  id="publisher"
                  name="publisher"
                  value={publisherUpdate}
                  onChange={(e) => setPublisherUpdate(e.target.value)}
                />

                <label htmlFor="date">Ngày xuất bản</label>
                <div>
                  <DatePicker
                    onChange={onChangeDateUpdate}
                    defaultValue={publishDateUpdate ? dayjs(publishDateUpdate) : null}
                    value={publishDateUpdate ? dayjs(publishDateUpdate) : null}
                    format={dateFormat}
                  />
                </div>
                <br />

                <label htmlFor="pages">Số trang</label>
                <input
                  type="text"
                  id="pages"
                  name="pages"
                  value={pageCountUpdate}
                  onChange={(e) => setPageCountUpdate(e.target.value)}
                />

                <label htmlFor="buylink">Liên kết tới nơi bán</label>
                <input
                  type="text"
                  id="buylink"
                  name="buylink"
                  value={buyLinkUpdate}
                  onChange={(e) => setBuyLinkUpdate(e.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );

  const handleSelectBook = (book) => {
    adminApi.getBookDetails(book.id, token).then((res) => {
      if (res.data.code !== 200) {
        return toast.error('Error occurred');
      }
      const bookUpdate = res.data.result;
      setBookUpdate(bookUpdate);
      setCoverUpdate(bookUpdate.cover);
      setTitleUpdate(bookUpdate.title);
      setAuthorUpdate(bookUpdate.author);
      setDescriptionUpdate(bookUpdate.description);
      setPublisherUpdate(bookUpdate.publisher);
      setPublishDateUpdate(bookUpdate.publishDate);
      setPageCountUpdate(bookUpdate.pageCount);
      setBuyLinkUpdate(bookUpdate.buyLink);
      setOpen(true);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      cover,
      tags: selectedCategories,
      author: author.split(';'),
      translator,
      description,
      publisher,
      publishDate,
      pageCount,
      buyLink,
    };

    adminApi
      .addBook(data, Cookies.get('token'))
      .then((response) => {
        if (response?.data.code === 201) {
          toast.success('Thêm mới thành công');
          forceUpdate();
        }
      })
      .catch((error) => {
        const msg = error.response.data.message ? error.response.data.message : 'Error occured';
        toast.error(msg);
      });
  };

  const handleUpdate = () => {
    console.log(authorUpdate);
    const data = {
      title: titleUpdate,
      cover: coverUpdate,
      tags: selectedCategoriesUpdate,
      author: authorUpdate,
      translator: translatorUpdate,
      description: descriptionUpdate,
      publisher: publisherUpdate,
      publishDate: publishDateUpdate,
      pageCount: pageCountUpdate,
      buyLink: buyLinkUpdate,
    };

    adminApi
      .updateBook(bookUpdate.id, data, token)
      .then((response) => {
        if (response?.data.code === 201) {
          toast.success('Cập nhật thành công');
          forceUpdate();
          setBookUpdate({});
          setOpen(false);
        }
      })
      .catch((error) => {
        const msg = error.response.data.message ? error.response.data.message : 'Error occured';
        toast.error(msg);
      });
  };

  const onChangeDate = (date, dateString) => {
    setPublishDate(date.toDate());
  };

  const onChangeDateUpdate = (date, dateString) => {
    setPublishDateUpdate(date.toDate());
  };

  return (
    <>
      <div className={cx('bookmanagement')}>
        {UpdateModal()}
        <div className={cx('title')}>Sách</div>
        <div className={cx('tab')}>
          <Tabs
            defaultActiveKey="1"
            onChange={onChange}
            items={[
              {
                label: `Tạo mới sách`,
                key: '1',
                children: (
                  <>
                    <div className={cx('create')}>
                      <div className={cx('titles')}>
                        <p>Tạo mới sách</p>
                      </div>
                      <div className={cx('content')}>
                        <div className={cx('info')}>
                          <form>
                            <label htmlFor="bookname">
                              <span>*</span>Tên sách
                            </label>
                            <input
                              type="text"
                              id="bookname"
                              name="bookname"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                            />

                            <label htmlFor="author">
                              <span>*</span>Tác giả
                            </label>
                            <input
                              type="text"
                              id="author"
                              name="author"
                              value={author}
                              onChange={(e) => setAuthor(e.target.value)}
                            />

                            <label htmlFor="genre">
                              <span>*</span>Thể loại
                            </label>
                            <div className={cx('GenreList')}>
                              {categories?.map((category, index) => (
                                <label className={cx('form-control')} key={index}>
                                  <input
                                    type="checkbox"
                                    value={category.code}
                                    checked={selectedCategories.find((e) => e === category.code)}
                                    onChange={handleTagCheck}
                                  />
                                  {category.name}
                                </label>
                              ))}
                            </div>

                            <label htmlFor="summary">
                              <span>*</span>Tóm tắt
                            </label>

                            <textarea
                              id="story"
                              name="story"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                            >
                              {description}
                            </textarea>

                            <label htmlFor="coverbook">
                              <span>*</span>Ảnh bìa
                            </label>
                            <div className={cx('cover')}>
                              <Upload
                                // listType="picture"
                                maxCount={1}
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action={`${uploadApi}/admin/upload-cover`}
                                headers={{ Authorization: `Bearer ${Cookies.get('token')}` }}
                                beforeUpload={beforeUpload}
                                onChange={handleUpload}
                              >
                                {imageUrl ? (
                                  <img
                                    src={imageUrl}
                                    alt="cover"
                                    style={{
                                      width: '100%',
                                      height: '100%',
                                    }}
                                  />
                                ) : (
                                  // <Button icon={<UploadOutlined />}>Tải lên ảnh bìa</Button>
                                  uploadButton
                                )}
                              </Upload>
                            </div>

                            <label htmlFor="publisher">Nhà xuất bản</label>
                            <input
                              type="text"
                              id="publisher"
                              name="publisher"
                              value={publisher}
                              onChange={(e) => setPublisher(e.target.value)}
                            />

                            <label htmlFor="date">Ngày xuất bản</label>
                            <div>
                              <DatePicker
                                onChange={onChangeDate}
                                defaultValue={publishDate ? dayjs(publishDate) : null}
                                format={dateFormat}
                              />
                            </div>
                            <br />
                            {/* <input
                              type="text"
                              id="date"
                              name="date"
                              value={publishDate}
                              onChange={(e) => setPublishDate(e.target.value)}
                            /> */}

                            <label htmlFor="pages">Số trang</label>
                            <input
                              type="text"
                              id="pages"
                              name="pages"
                              value={pageCount}
                              onChange={(e) => setPageCount(e.target.value)}
                            />

                            <label htmlFor="buylink">Nơi bán</label>
                            <input
                              type="text"
                              id="buylink"
                              name="buylink"
                              value={buyLink}
                              onChange={(e) => setBuyLink(e.target.value)}
                            />

                            <div className={cx('submit')}>
                              <Button type="primary" onClick={handleSubmit}>
                                Tạo mới
                              </Button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </>
                ),
              },
              {
                label: `Quản lý sách`,
                key: '2',
                children: (
                  <>
                    <div className={cx('update')}>
                      <div className={cx('titles')}>
                        <p>Quản lý sách</p>
                      </div>
                      <div className={cx('content')}>
                        <div className={cx('search')}>
                          <form onSubmit={(e) => e.preventDefault()} role="search">
                            <label htmlFor="search">Tìm kiếm</label>
                            <input
                              id="search"
                              type="search"
                              placeholder="Nhập vào đây..."
                              autoFocus
                              required
                              onChange={(e) => setQuery(e.target.value)}
                            />
                            <button type="submit">
                              <SearchOutlined style={{ fontSize: '16px', color: '#fff' }} />
                            </button>
                          </form>
                        </div>
                      </div>
                      <table className={cx('bookList')}>
                        <thead>
                          <tr>
                            <th>Ảnh bìa</th>
                            <th>Tên sách</th>
                            <th>Tác giả</th>
                            <th>Nhà xuất bản</th>
                            <th>Ngày xuất bản</th>
                            <th>Số trang</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {displayBooks?.map((book, index) => (
                            <tr key={index}>
                              <td>
                                <img src={book.cover} alt="" />
                              </td>
                              <td>{book.title}</td>
                              <td>{book.author && book.author.join('; ')}</td>
                              <td>{book.publisher}</td>
                              <td>{book.publishDate && DateConverter(book.publishDate).dateOnly}</td>
                              <td>{book.pageCount}</td>
                              <td>
                                <span>
                                  <Button onClick={() => handleSelectBook(book)} type="link" icon={<EditOutlined />} />
                                </span>
                                <span>
                                  <Button
                                    onClick={() =>
                                      book.deletedAt ? showRestoreConfirm(book) : showDeleteConfirm(book)
                                    }
                                    type="link"
                                    icon={book.deletedAt ? <ReloadOutlined /> : <DeleteOutlined />}
                                    danger={!book.deletedAt}
                                  />
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className={cx('pagin')}>
                        <Pagination
                          total={filteredBooks?.length}
                          defaultCurrent={page}
                          defaultPageSize={pageSize}
                          onChange={(value) => setPage(value)}
                          onShowSizeChange={(current, size) => setPageSize(size)}
                        />
                      </div>
                    </div>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
