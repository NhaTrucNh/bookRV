import {
  CheckCircleOutlined, DeleteOutlined, EditOutlined, ExclamationCircleFilled,
  SearchOutlined,
  StopOutlined
} from '@ant-design/icons';
import { Button, Modal, Tag } from 'antd';
import classNames from 'classnames/bind';
import styles from './UserManagement.module.scss';

const cx = classNames.bind(styles);
export default function UserManagement() {
  const { confirm } = Modal;

  const showAddModConfirm = () => {
    confirm({
      title: 'Bạn có muốn thêm người dùng này thành điều phối viên không?',
      icon: <ExclamationCircleFilled />,
      content: 'Một khi đã "Ok", người dùng sẽ có quyền hạn của điều ph viên',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() { },
    });
  };

  const showBannedConfirm = () => {
    confirm({
      title: 'Bạn có muốn cấm người dùng này không?',
      icon: <ExclamationCircleFilled />,
      content: 'Một khi đã "Ok", mọi quyền hạn của người dùng đều bị khoá',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() { },
    });
  };

  const showUnbannedConfirm = () => {
    confirm({
      title: 'Bạn có muốn bỏ cấm người dùng này không?',
      icon: <ExclamationCircleFilled />,
      content: 'Một khi đã "Ok", mọi quyền hạn của người dùng đều trở lại bình thường',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() { },
    });
  };

  const showDeleteConfirm = () => {
    confirm({
      title: 'Bạn có muốn cấm người dùng này không?',
      icon: <ExclamationCircleFilled />,
      content: 'Một khi đã "Ok", người dùng sẽ bị xoá khỏi hệ thống',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() { },
    });
  };
  return (
    <>
      <div className={cx('usermanagement')}>
        <div className={cx('title')}>Người dùng</div>
        <div className={cx('tab')}>
          <div className={cx('titles')}>
            <p>Quản lý tài khoản người dùng</p>
          </div>
          <div className={cx('search')}>
            <form onsubmit="event.preventDefault();" role="search">
              <label htmlFor="search">Tìm kiếm</label>
              <input id="search" type="search" placeholder="Nhập vào đây..." autofocus required />
              <button type="submit">
                <SearchOutlined style={{ fontSize: '16px', color: '#fff' }} />
              </button>
            </form>
          </div>
          <table className={cx('userList')}>
            <tr>
              <th>Tên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Giới tính</th>
              <th>Năm sinh</th>
              <th>Trạng thái</th>
              <th></th>
            </tr>
            <tr>
              <td>Nhã Trúc</td>
              <td>heisia1412@gmail.com</td>
              <td>0384673572</td>
              <td>Nữ</td>
              <td>27/2/1998</td>
              <td>
                <Tag color="green">Active</Tag>
              </td>
              <td className={cx('centerAlign')}>
                <div>
                  <Button onClick={showAddModConfirm} type="link" icon={<EditOutlined />} />
                </div>
                <div>
                  <Button onClick={showBannedConfirm} type="link" icon={<StopOutlined />} />
                </div>
                <div>
                  <Button onClick={showDeleteConfirm} danger type="link" icon={<DeleteOutlined />} />
                </div>
              </td>
            </tr>
            <tr>
              <td>Nhã Trúc</td>
              <td>heisia1412@gmail.com</td>
              <td>0384673572</td>
              <td>Nữ</td>
              <td>27/2/1998</td>
              <td>
                <Tag color="red">Banned</Tag>
              </td>
              <td className={cx('centerAlign')}>
                <div>
                  <Button disabled onClick={showAddModConfirm} type="link" icon={<EditOutlined />} />
                </div>
                <div>
                  <Button onClick={showUnbannedConfirm} type="link" icon={<CheckCircleOutlined />} />
                </div>
                <div>
                  <Button onClick={showDeleteConfirm} danger type="link" icon={<DeleteOutlined />} />
                </div>
              </td>
            </tr>
            <tr>
              <td>Nhã Trúc</td>
              <td>heisia1412@gmail.com</td>
              <td>0384673572</td>
              <td>Nữ</td>
              <td>27/2/1998</td>
              <td>
                <Tag color="green">Active</Tag>
              </td>
              <td className={cx('centerAlign')}>
                <div>
                  <Button onClick={showAddModConfirm} type="link" icon={<EditOutlined />} />
                </div>
                <div>
                  <Button onClick={showBannedConfirm} type="link" icon={<StopOutlined />} />
                </div>
                <div>
                  <Button onClick={showDeleteConfirm} danger type="link" icon={<DeleteOutlined />} />
                </div>
              </td>
            </tr>
            <tr>
              <td>Nhã Trúc</td>
              <td>heisia1412@gmail.com</td>
              <td>0384673572</td>
              <td>Nữ</td>
              <td>27/2/1998</td>
              <td>
                <Tag color="green">Active</Tag>
              </td>
              <td className={cx('centerAlign')}>
                <div>
                  <Button onClick={showAddModConfirm} type="link" icon={<EditOutlined />} />
                </div>
                <div>
                  <Button onClick={showBannedConfirm} type="link" icon={<StopOutlined />} />
                </div>
                <div>
                  <Button onClick={showDeleteConfirm} danger type="link" icon={<DeleteOutlined />} />
                </div>
              </td>
            </tr>
            <tr>
              <td>Nhã Trúc</td>
              <td>heisia1412@gmail.com</td>
              <td>0384673572</td>
              <td>Nữ</td>
              <td>27/2/1998</td>
              <td>
                <Tag color="green">Active</Tag>
              </td>
              <td className={cx('centerAlign')}>
                <div>
                  <Button onClick={showAddModConfirm} type="link" icon={<EditOutlined />} />
                </div>
                <div>
                  <Button onClick={showBannedConfirm} type="link" icon={<StopOutlined />} />
                </div>
                <div>
                  <Button onClick={showDeleteConfirm} danger type="link" icon={<DeleteOutlined />} />
                </div>
              </td>
            </tr>
            <tr>
              <td>Nhã Trúc</td>
              <td>heisia1412@gmail.com</td>
              <td>0384673572</td>
              <td>Nữ</td>
              <td>27/2/1998</td>
              <td>
                <Tag color="green">Active</Tag>
              </td>
              <td className={cx('centerAlign')}>
                <div>
                  <Button onClick={showAddModConfirm} type="link" icon={<EditOutlined />} />
                </div>
                <div>
                  <Button onClick={showBannedConfirm} type="link" icon={<StopOutlined />} />
                </div>
                <div>
                  <Button onClick={showDeleteConfirm} danger type="link" icon={<DeleteOutlined />} />
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
