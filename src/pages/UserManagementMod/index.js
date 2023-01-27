import {
  CheckCircleOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  SearchOutlined,
  StopOutlined,
} from '@ant-design/icons';
import { Button, Modal, Pagination, Tag } from 'antd';
import classNames from 'classnames/bind';
import styles from './UserManagementMod.module.scss';

const cx = classNames.bind(styles);
export default function UserManagementMod() {
  const { confirm } = Modal;

  const showAddModConfirm = () => {
    confirm({
      title: 'Bạn có muốn thêm người dùng này thành điều phối viên không?',
      icon: <ExclamationCircleFilled />,
      content: 'Nhấn "Ok" để thêm',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  };

  const showBannedConfirm = () => {
    confirm({
      title: 'Bạn có muốn cấm người dùng này không?',
      icon: <ExclamationCircleFilled />,
      content: 'Nhấn "Ok" để khoá quyền hạn người dùng ',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  };

  const showUnbannedConfirm = () => {
    confirm({
      title: 'Bạn có muốn bỏ cấm người dùng này không?',
      icon: <ExclamationCircleFilled />,
      content: 'Nhấn "Ok" để khôi phục quyền hạn người dùng',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
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
            <form onSubmit="event.preventDefault();" role="search">
              <label htmlFor="search">Tìm kiếm</label>
              <input id="search" type="search" placeholder="Nhập vào đây..." autoFocus required />
              <button type="submit">
                <SearchOutlined style={{ fontSize: '16px', color: '#fff' }} />
              </button>
            </form>
          </div>
          <table className={cx('userList')}>
            <tr>
              <th width="15%">Tên</th>
              <th width="20%">Email</th>
              <th width="14%">Số điện thoại</th>
              <th width="11%">Giới tính</th>
              <th width="12%">Năm sinh</th>
              <th width="15%">Trạng thái</th>
              <th width="13%"></th>
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
                  <Button onClick={showBannedConfirm} type="link" icon={<StopOutlined />} danger />
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
                  <Button onClick={showBannedConfirm} type="link" icon={<StopOutlined />} danger />
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
                  <Button onClick={showBannedConfirm} type="link" icon={<StopOutlined />} danger />
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
                  <Button onClick={showBannedConfirm} type="link" icon={<StopOutlined />} danger />
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
                  <Button onClick={showBannedConfirm} type="link" icon={<StopOutlined />} danger />
                </div>
              </td>
            </tr>
          </table>
          <div className={cx('pagin')}>
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
    </>
  );
}
