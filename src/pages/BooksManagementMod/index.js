import {
  DeleteOutlined, EditOutlined, ExclamationCircleFilled,
  SearchOutlined, UploadOutlined
} from '@ant-design/icons';
import { Button, Modal, Tabs, Upload, Pagination } from 'antd';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './BooksManagementMod.module.scss';

const cx = classNames.bind(styles);

export default function BooksManagementMod() {
  const [open, setOpen] = useState(false);
  const { confirm } = Modal;

  const showDeleteConfirm = () => {
    confirm({
      title: 'Bạn có muốn xoá quyển sách này không?',
      icon: <ExclamationCircleFilled />,
      content: 'Một khi đã "Ok", quyển sách sẽ bị xoá khỏi hệ thống',
      async onOk() {
        try {
          return await new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          });
        } catch {
          return console.log('Oops errors!');
        }
      },
      onCancel() { },
    });
  };

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
      <div className={cx('bookmanagement')}>
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
                            <input type="text" id="bookname" name="bookname" />

                            <label htmlFor="author">
                              <span>*</span>Tác giả
                            </label>
                            <input type="text" id="author" name="author" />

                            <label htmlFor="genre">
                              <span>*</span>Thể loại
                            </label>
                            <div className={cx('GenreList')}>
                              <label className={cx('form-control')}>
                                <input type="checkbox" name="checkbox" />
                                Văn
                              </label>
                              <label className={cx('form-control')}>
                                <input type="checkbox" name="checkbox" />
                                Thơ
                              </label>
                              <label className={cx('form-control')}>
                                <input type="checkbox" name="checkbox" />
                                Thiếu nhi
                              </label>
                              <label className={cx('form-control')}>
                                <input type="checkbox" name="checkbox" />
                                Checkbox
                              </label>
                              <label className={cx('form-control')}>
                                <input type="checkbox" name="checkbox" />
                                Checkbox
                              </label>
                              <label className={cx('form-control')}>
                                <input type="checkbox" name="checkbox" />
                                Checkbox
                              </label>
                              <label className={cx('form-control')}>
                                <input type="checkbox" name="checkbox" />
                                Checkbox
                              </label>
                            </div>

                            <label htmlFor="summary">
                              <span>*</span>Tóm tắt
                            </label>

                            <textarea id="story" name="story"></textarea>

                            <label htmlFor="coverbook">
                              <span>*</span>Ảnh bìa
                            </label>
                            <div className={cx('cover')}>
                              <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture"
                                maxCount={1}
                              >
                                <Button icon={<UploadOutlined />}>
                                  Tải lên ảnh bìa
                                </Button>
                              </Upload>
                            </div>

                            <label htmlFor="publisher">Nhà xuất bản</label>
                            <input type="text" id="publisher" name="publisher" />

                            <label htmlFor="date">Ngày xuất bản</label>
                            <input type="text" id="date" name="date" />

                            <label htmlFor="pages">Số trang</label>
                            <input type="text" id="pages" name="pages" />

                            <label htmlFor="buylink">Nơi bán</label>
                            <input type="text" id="buylink" name="buylink" />

                            <div className={cx('submit')}>
                              <Button type="primary">Tạo mới</Button>
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
                          <form onsubmit="event.preventDefault();" role="search">
                            <label htmlFor="search">Tìm kiếm</label>
                            <input
                              id="search"
                              type="search"
                              placeholder="Nhập vào đây..."
                              autofocus
                              required
                            />
                            <button type="submit">
                              <SearchOutlined
                                style={{ fontSize: '16px', color: '#fff' }}
                              />
                            </button>
                          </form>
                        </div>
                      </div>
                      <table className={cx('bookList')}>
                        <tr>
                          <th>Ảnh bìa</th>
                          <th>Tên sách</th>
                          <th>Tác giả</th>
                          <th>Nhà xuất bản</th>
                          <th>Ngày xuất bản</th>
                          <th>Số trang</th>
                          <th></th>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1564589320i/46226780.jpg"
                              alt=""
                            />
                          </td>
                          <td>Chainsaw man 3</td>
                          <td>Tatsuki Fujimoto</td>
                          <td>NXB Trẻ</td>
                          <td>27/9/2022</td>
                          <td>254</td>
                          <td>
                            <span>
                              <Button
                                onClick={() => setOpen(true)}
                                type="link"
                                icon={<EditOutlined />}
                              />
                              <Modal
                                title="Chỉnh sửa thông tin sách"
                                centered
                                open={open}
                                onOk={() => setOpen(false)}
                                onCancel={() => setOpen(false)}
                                width={1280}
                              >
                                <div className={cx('column')}>
                                  <div className={cx('Left')}>
                                    <div className={cx('content')}>
                                      <div className={cx('info')}>
                                        <form>
                                          <label htmlFor="bookname">
                                            Tên sách
                                          </label>
                                          <input
                                            type="text"
                                            id="bookname"
                                            name="bookname"
                                          />

                                          <label htmlFor="author">Tác giả</label>
                                          <input
                                            type="text"
                                            id="author"
                                            name="author"
                                          />

                                          <label htmlFor="genre">Thể loại</label>
                                          <div className={cx('GenreList')}>
                                            <label
                                              className={cx(
                                                'form-control',
                                              )}
                                            >
                                              <input
                                                type="checkbox"
                                                name="checkbox"
                                              />
                                              Văn
                                            </label>
                                            <label
                                              className={cx(
                                                'form-control',
                                              )}
                                            >
                                              <input
                                                type="checkbox"
                                                name="checkbox"
                                              />
                                              Thơ
                                            </label>
                                            <label
                                              className={cx(
                                                'form-control',
                                              )}
                                            >
                                              <input
                                                type="checkbox"
                                                name="checkbox"
                                              />
                                              Thiếu nhi
                                            </label>
                                            <label
                                              className={cx(
                                                'form-control',
                                              )}
                                            >
                                              <input
                                                type="checkbox"
                                                name="checkbox"
                                              />
                                              Checkbox
                                            </label>
                                            <label
                                              className={cx(
                                                'form-control',
                                              )}
                                            >
                                              <input
                                                type="checkbox"
                                                name="checkbox"
                                              />
                                              Checkbox
                                            </label>
                                            <label
                                              className={cx(
                                                'form-control',
                                              )}
                                            >
                                              <input
                                                type="checkbox"
                                                name="checkbox"
                                              />
                                              Checkbox
                                            </label>
                                            <label
                                              className={cx(
                                                'form-control',
                                              )}
                                            >
                                              <input
                                                type="checkbox"
                                                name="checkbox"
                                              />
                                              Checkbox
                                            </label>
                                          </div>
                                          <label htmlFor="summary">Tóm tắt</label>

                                          <textarea
                                            id="story"
                                            name="story"
                                          ></textarea>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={cx('Right')}>
                                    <div className={cx('content')}>
                                      <div className={cx('info')}>
                                        <form>
                                          <label htmlFor="coverbook">
                                            Ảnh bìa
                                          </label>
                                          <div className={cx('cover')}>
                                            <Upload
                                              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                              listType="picture"
                                              maxCount={1}
                                            >
                                              <Button
                                                icon={
                                                  <UploadOutlined />
                                                }
                                              >
                                                Tải lên ảnh bìa
                                              </Button>
                                            </Upload>
                                          </div>

                                          <label htmlFor="publisher">
                                            Nhà xuất bản
                                          </label>
                                          <input
                                            type="text"
                                            id="publisher"
                                            name="publisher"
                                          />

                                          <label htmlFor="date">
                                            Ngày xuất bản
                                          </label>
                                          <input
                                            type="text"
                                            id="date"
                                            name="date"
                                          />

                                          <label htmlFor="pages">Số trang</label>
                                          <input
                                            type="text"
                                            id="pages"
                                            name="pages"
                                          />

                                          <label htmlFor="buylink">Liên kết tới nơi bán</label>
                                          <input
                                            type="text"
                                            id="buylink"
                                            name="buylink"
                                          />
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Modal>
                            </span>
                            <span>
                              <Button
                                onClick={showDeleteConfirm}
                                danger
                                type="link"
                                icon={<DeleteOutlined />}
                              />
                            </span>
                          </td>
                        </tr>
                      </table>
                      <div className={cx('pagin')}>
                        <Pagination defaultCurrent={1} total={50} />
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
