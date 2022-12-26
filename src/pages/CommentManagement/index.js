import React from 'react';
import classNames from 'classnames/bind';
import styles from './CommentManagement.module.scss';
import { Button, Modal } from 'antd';
import { ExclamationCircleFilled, SearchOutlined, DeleteOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

export default function CommentManagement() {
    const { confirm } = Modal;
    const showDeleteConfirm = () => {
        confirm({
            title: 'Bạn có muốn xoá bình luận này không?',
            icon: <ExclamationCircleFilled />,
            content: 'Một khi đã "Ok", bình luận sẽ bị xoá',
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
                            <label for="search">Tìm kiếm</label>
                            <input id="search" type="search" placeholder="Nhập vào đây..." autofocus required />
                            <button type="submit">
                                <SearchOutlined style={{ fontSize: '16px', color: '#fff' }} />
                            </button>
                        </form>
                    </div>
                    <table className={cx('userList')}>
                        <tr>
                            <th>Tên sách</th>
                            <th>Tên người dùng</th>
                            <th>Bình luận</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Sakura - Thủ lĩnh thẻ bài</td>
                            <td>Nhã Trúc</td>
                            <td>
                                Ex sit pariatur duis non esse in dolore sint ea consequat sit nisi. Cupidatat aute
                                aliquip occaecat cupidatat minim esse enim id excepteur incididunt dolor velit veniam
                                proident.showDeleteConfirm
                            </td>
                            <td>
                                <Button onClick={showDeleteConfirm} danger type="link" icon={<DeleteOutlined />} />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}
