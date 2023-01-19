import { ExclamationCircleFilled, SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Modal, Pagination } from 'antd';
import classNames from 'classnames/bind';
import styles from './ModManagement.module.scss';

const cx = classNames.bind(styles);

export default function ModManagement() {
  const { confirm } = Modal;
  const showUnModConfirm = () => {
    confirm({
      title: 'Bạn có muốn xoá quyền người dùng này không?',
      icon: <ExclamationCircleFilled />,
      content: 'Nhấn "Ok" để xoá bỏ quyền hạn của người dùng',
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
        <div className={cx('title')}>Điều phối viên</div>
        <div className={cx('tab')}>
          <div className={cx('titles')}>
            <p>Quản lý điều phối viên</p>
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
              <th width="20%">Tên</th>
              <th width="20%">Email</th>
              <th width="20%">Số điện thoại</th>
              <th width="15%">Giới tính</th>
              <th width="15%">Năm sinh</th>
              <th width="10%"></th>
            </tr>
            <tr>
              <td>Nhã Trúc</td>
              <td>heisia1412@gmail.com</td>
              <td>0384673572</td>
              <td>Nữ</td>
              <td>27/2/1998</td>
              <td className={cx('centerAlign')}>
                <div className={cx('edit')}>
                  <Button danger onClick={showUnModConfirm} type="link" icon={<CloseOutlined />} />
                </div>
              </td>
            </tr>
            <tr>
              <td>Nhã Trúc</td>
              <td>heisia1412@gmail.com</td>
              <td>0384673572</td>
              <td>Nữ</td>
              <td>27/2/1998</td>
              <td className={cx('centerAlign')}>
                <div className={cx('edit')}>
                  <Button danger onClick={showUnModConfirm} type="link" icon={<CloseOutlined />} />
                </div>
              </td>
            </tr>
            <tr>
              <td>Nhã Trúc</td>
              <td>heisia1412@gmail.com</td>
              <td>0384673572</td>
              <td>Nữ</td>
              <td>27/2/1998</td>
              <td className={cx('centerAlign')}>
                <div className={cx('edit')}>
                  <Button danger onClick={showUnModConfirm} type="link" icon={<CloseOutlined />} />
                </div>
              </td>
            </tr>
            <tr>
              <td>Nhã Trúc</td>
              <td>heisia1412@gmail.com</td>
              <td>0384673572</td>
              <td>Nữ</td>
              <td>27/2/1998</td>
              <td className={cx('centerAlign')}>
                <div className={cx('edit')}>
                  <Button danger onClick={showUnModConfirm} type="link" icon={<CloseOutlined />} />
                </div>
              </td>
            </tr>
            <tr>
              <td>Nhã Trúc</td>
              <td>heisia1412@gmail.com</td>
              <td>0384673572</td>
              <td>Nữ</td>
              <td>27/2/1998</td>
              <td className={cx('centerAlign')}>
                <div className={cx('edit')}>
                  <Button danger onClick={showUnModConfirm} type="link" icon={<CloseOutlined />} />
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
