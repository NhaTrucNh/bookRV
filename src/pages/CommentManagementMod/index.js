import { DeleteOutlined, ExclamationCircleFilled, SearchOutlined } from '@ant-design/icons';
import { Button, Modal, Rate, Pagination } from 'antd';
import classNames from 'classnames/bind';
import styles from './CommentManagementMod.module.scss';

const cx = classNames.bind(styles);

export default function CommentManagementMod() {
  const { confirm } = Modal;
  const showDeleteConfirm = () => {
    confirm({
      title: 'Bạn có muốn xoá bình luận này không?',
      icon: <ExclamationCircleFilled />,
      content: 'Nhấn "Ok" để xoá bình luận',
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
        <div className={cx('title')}>Bình luận người dùng</div>
        <div className={cx('tab')}>
          <div className={cx('titles')}>
            <p>Quản lý bình luận</p>
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
              <th width="5%">STT</th>
              <th width="18%">Tên sách</th>
              <th width="18%">Tên người dùng</th>
              <th width="19%">Đánh giá</th>
              <th width="37%">Bình luận</th>
              <th></th>
            </tr>
            <tr>
              <td>233</td>
              <td>Sakura - Thủ lĩnh thẻ bài</td>
              <td>Nhã Trúc</td>
              <td>
                <Rate disabled defaultValue={4} />
              </td>
              <td>
                Ex sit pariatur duis non esse in dolore sint ea consequat sit nisi. Cupidatat aute aliquip occaecat
                cupidatat minim esse enim id excepteur incididunt dolor velit veniam proident.showDeleteConfirm
              </td>
              <td>
                <Button onClick={showDeleteConfirm} danger type="link" icon={<DeleteOutlined />} />
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
