import React from 'react';
import classNames from 'classnames/bind';
import styles from './ModManagement.module.scss';
import { Button, Modal } from 'antd';
import { ExclamationCircleFilled, SearchOutlined, StopOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

export default function ModManagement() {
    const { confirm } = Modal;
    const showUnModConfirm = () => {
        confirm({
            title: 'Bạn có muốn xoá quyền người dùng này không?',
            icon: <ExclamationCircleFilled />,
            content: 'Một khi đã "Ok", mọi quyền hạn của người dùng đều bị xoá',
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
                <div className={cx('title')}>Điều phối viên</div>
                <div className={cx('tab')}>
                    <div className={cx('titles')}>
                        <p>Quản lý điều phối viên</p>
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
                            <th>Tên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Giới tính</th>
                            <th>Năm sinh</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Nhã Trúc</td>
                            <td>heisia1412@gmail.com</td>
                            <td>0384673572</td>
                            <td>Nữ</td>
                            <td>27/2/1998</td>
                            <td className={cx('centerAlign')}>
                                <div className={cx('edit')}>
                                    <Button danger onClick={showUnModConfirm} type="link" icon={<StopOutlined />} />
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
                                    <Button danger onClick={showUnModConfirm} type="link" icon={<StopOutlined />} />
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
                                    <Button danger onClick={showUnModConfirm} type="link" icon={<StopOutlined />} />
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
                                    <Button danger onClick={showUnModConfirm} type="link" icon={<StopOutlined />} />
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
                                    <Button danger onClick={showUnModConfirm} type="link" icon={<StopOutlined />} />
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}
