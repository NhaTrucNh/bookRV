import { CheckCircleOutlined, ExclamationCircleFilled, StopOutlined } from '@ant-design/icons';
import { Button, Modal, Pagination, Tabs } from 'antd';
import classNames from 'classnames/bind';
import Cookies from 'js-cookie';
import { useEffect, useReducer, useState } from 'react';
import { toast } from 'react-hot-toast';
import { adminApi } from '~/api/api';
import styles from './CategoryManagement.module.scss';

const cx = classNames.bind(styles);
const token = Cookies.get('token');

export default function CategoryManagement() {
  const { confirm } = Modal;
  const [categories, setCategories] = useState([]);
  const [displayCategories, setDisplayCategories] = useState([]);
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [seed, forceUpdate] = useReducer((x) => x + 1, 0);

  const onChange = (key) => {
    console.log(key);
  };

  useEffect(() => {
    adminApi
      .getAllCategories(token)
      .then((res) => {
        if (res.data.result) setCategories(res.data.result);
      })
      .catch((err) => console.log(err));
  }, [seed]);

  useEffect(() => {
    categories && setDisplayCategories(categories.slice((page - 1) * pageSize, page * pageSize));
  }, [categories, page, pageSize]);

  const showDisableConfirm = (category) => {
    confirm({
      title: 'Bạn có muốn ẩn danh mục này không?',
      icon: <ExclamationCircleFilled />,
      content: 'Nhấn "Ok" để ẩn danh mục ',
      onOk() {
        adminApi
          .disableCategory(category.id, token)
          .then((res) => {
            if (res.data.code === 200) {
              // const index = categories.findIndex((categoryElement) => categoryElement.id === category.id);
              const newCategories = categories.map((categoryElement) =>
                categoryElement.id === category.id ? res.data.result : categoryElement,
              );
              setCategories(newCategories);
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

  const showEnableConfirm = (category) => {
    confirm({
      title: 'Bạn có muốn bỏ ẩn danh mục này không?',
      icon: <ExclamationCircleFilled />,
      content: 'Nhấn "Ok" để bỏ ẩn danh mục',
      onOk() {
        adminApi
          .enableCategory(category.id, token)
          .then((res) => {
            if (res.data.code === 200) {
              // const index = categories.findIndex((categoryElement) => categoryElement.id === category.id);
              const newCategories = categories.map((categoryElement) =>
                categoryElement.id === category.id ? res.data.result : categoryElement,
              );
              setCategories(newCategories);
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

  const createCategory = () => {
    const data = {
      code,
      name,
    };
    adminApi
      .addCategory(data, token)
      .then((res) => {
        if (res.data.code === 200) {
          toast.success(res.data.message);
          forceUpdate();
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <>
      <div className={cx('categorymanagement')}>
        <div className={cx('title')}>Danh mục</div>
        <div className={cx('tab')}>
          <Tabs
            defaultActiveKey="1"
            onChange={onChange}
            items={[
              {
                label: `Tạo mới danh mục`,
                key: '1',
                children: (
                  <>
                    <div className={cx('create')}>
                      <div className={cx('titles')}>
                        <p>Tạo danh mục</p>
                      </div>
                      <div className={cx('content')}>
                        <div className={cx('info')}>
                          <form>
                            <label htmlFor="genrecode">
                              <span>*</span>Mã Danh mục
                            </label>
                            <input
                              type="text"
                              id="genrecode"
                              name="genrecode"
                              value={code}
                              onChange={(e) => setCode(e.target.value)}
                            />

                            <label htmlFor="genrename">
                              <span>*</span>Tên danh mục
                            </label>
                            <input
                              type="text"
                              id="genrename"
                              name="genrename"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />

                            <div className={cx('submit')}>
                              <Button type="primary" onClick={() => createCategory()}>
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
                label: `Quản lý danh mục`,
                key: '2',
                children: (
                  <>
                    <div className={cx('update')}>
                      <div className={cx('titles')}>
                        <p>Danh sách danh mục</p>
                      </div>
                      <div className={cx('content')}>
                        <table className={cx('bookList')}>
                          <thead>
                            <tr>
                              <th>Mã danh mục</th>
                              <th>Tên danh mục</th>
                              <th>Hành động</th>
                            </tr>
                          </thead>
                          <tbody>
                            {displayCategories?.map((category, index) => (
                              <tr key={index}>
                                <td>{category.code}</td>
                                <td>{category.name}</td>
                                <td>
                                  <Button
                                    onClick={() =>
                                      category.status === 'active'
                                        ? showDisableConfirm(category)
                                        : showEnableConfirm(category)
                                    }
                                    type="link"
                                    icon={category.status === 'active' ? <StopOutlined /> : <CheckCircleOutlined />}
                                    danger={category.status === 'active'}
                                  />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className={cx('pagin')}>
                          <Pagination
                            total={categories?.length}
                            defaultCurrent={page}
                            defaultPageSize={pageSize}
                            onChange={(value) => setPage(value)}
                            onShowSizeChange={(current, size) => setPageSize(size)}
                          />
                        </div>
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
