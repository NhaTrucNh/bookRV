import React from 'react';
import classNames from 'classnames/bind';
import styles from './CategoryManagement.module.scss';
import { Tabs, Button, Modal } from 'antd';
import { DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';

const cx = classNames.bind(styles);

export default function CategoryManagement() {
    const onChange = (key) => {
        console.log(key);
    };

    const { confirm } = Modal;

    const showDeleteConfirm = () => {
        confirm({
            title: 'Bạn có muốn xoá danh mục này không?',
            icon: <ExclamationCircleFilled />,
            content: 'Một khi đã "Ok", danh mục sẽ bị xoá khỏi hệ thống',
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
                                                        <label for="genrecode">
                                                            <span>*</span>Mã Danh mục
                                                        </label>
                                                        <input type="text" id="genrecode" name="genrecode" />

                                                        <label for="genrename">
                                                            <span>*</span>Tên danh mục
                                                        </label>
                                                        <input type="text" id="genrename" name="genrename" />

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
                                                    <tr>
                                                        <th>Mã danh mục</th>
                                                        <th>Tên danh mục</th>
                                                        <th></th>
                                                    </tr>
                                                    <tr>
                                                        <td>khvt</td>
                                                        <td>Khoa Học Viễn Tưởng</td>
                                                        <td>
                                                            <Button
                                                                onClick={showDeleteConfirm}
                                                                danger
                                                                type="link"
                                                                icon={<DeleteOutlined />}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>khvt</td>
                                                        <td>Khoa Học Viễn Tưởng</td>
                                                        <td>
                                                            <Button
                                                                onClick={showDeleteConfirm}
                                                                danger
                                                                type="link"
                                                                icon={<DeleteOutlined />}
                                                            />
                                                        </td>
                                                    </tr>
                                                </table>
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
