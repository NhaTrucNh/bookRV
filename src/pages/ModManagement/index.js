import { CloseOutlined, ExclamationCircleFilled, SearchOutlined } from '@ant-design/icons';
import { Button, Modal, Pagination } from 'antd';
import classNames from 'classnames/bind';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { adminApi } from '~/api/api';
import { DateConverter } from '~/helper/helper';
import styles from './ModManagement.module.scss';

const cx = classNames.bind(styles);
const genderMap = {
  male: 'Nam',
  female: 'Nữ',
  unknown: 'Không rõ',
};
const token = Cookies.get('token');

export default function ModManagement() {
  const { confirm } = Modal;
  const [users, setUsers] = useState([]);
  const [displayUsers, setDisplayUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    adminApi
      .getAllMods(token)
      .then((res) => {
        if (res.data.result) setUsers(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    users && setDisplayUsers(users.slice((page - 1) * pageSize, page * pageSize));
  }, [users, page, pageSize]);

  const showUnModConfirm = (user) => {
    confirm({
      title: 'Bạn có muốn xoá quyền người dùng này không?',
      icon: <ExclamationCircleFilled />,
      content: 'Nhấn "Ok" để xoá bỏ quyền hạn của người dùng',
      onOk() {
        adminApi
          .removeMod(user.id, token)
          .then((res) => {
            if (res.data.code === 200) {
              setUsers(users.filter((item) => item.id !== user.id));
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

  return (
    <>
      <div className={cx('usermanagement')}>
        <div className={cx('title')}>Điều phối viên</div>
        <div className={cx('tab')}>
          <div className={cx('titles')}>
            <p>Quản lý điều phối viên</p>
          </div>
          <div className={cx('search')}>
            <form
              // onSubmit="event.preventDefault();"
              role="search"
            >
              <label htmlFor="search">Tìm kiếm</label>
              <input id="search" type="search" placeholder="Nhập vào đây..." autoFocus required />
              <button type="submit">
                <SearchOutlined style={{ fontSize: '16px', color: '#fff' }} />
              </button>
            </form>
          </div>
          <table className={cx('userList')}>
            <thead>
              <tr>
                <th width="20%">Tên</th>
                <th width="20%">Email</th>
                <th width="20%">Số điện thoại</th>
                <th width="15%">Giới tính</th>
                <th width="15%">Năm sinh</th>
                <th width="10%">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {displayUsers?.map((user, index) => (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{genderMap[user.gender]}</td>
                  <td>{user.dateOfBirth && DateConverter(user.dateOfBirth).dateOnly}</td>
                  <td className={cx('centerAlign')}>
                    <div className={cx('edit')}>
                      <Button danger onClick={() => showUnModConfirm(user)} type="link" icon={<CloseOutlined />} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={cx('pagin')}>
            <Pagination
              total={users?.length}
              defaultCurrent={page}
              defaultPageSize={pageSize}
              onChange={(value) => setPage(value)}
              pageSizeOptions={[10, 20, 50]}
              onShowSizeChange={(current, size) => setPageSize(size)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
