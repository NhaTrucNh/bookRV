import React from 'react';
import classNames from 'classnames/bind';
import styles from './DashboardFrame.module.scss';
import Logo from '../../../asset/images/Logo.png';
import { Button, Dropdown } from 'antd';
import {
    UserOutlined,
    TeamOutlined,
    BookOutlined,
    FolderOutlined,
    CommentOutlined,
    ProjectOutlined,
} from '@ant-design/icons';

const cx = classNames.bind(styles);

function DashboardFrame({ children }) {
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="profile" href="profile">
                    Hồ sơ
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="review" href="historycomment">
                    Lịch sử bình luận
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="account setting" href="accountsetting">
                    Cài đặt tài khoản
                </a>
            ),
        },
        {
            key: '4',
            label: (
                <a target="_blank" rel="change password" href="changepassword">
                    Đổi mật khẩu
                </a>
            ),
        },
        {
            key: '5',
            label: (
                <a target="_blank" rel="logout" href="login">
                    Đăng xuất
                </a>
            ),
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('sideBar')}>
                    <div className={cx('info')}>
                        <img src="https://i.imgur.com/gpCBqBP.jpg" alt="" />
                        <div className={cx('Name')}>Nhã Trúc</div>
                    </div>
                    <div className={cx('treev')}>
                        <div className={cx('item')}>
                            <a href="user">
                                <span className={cx('icon')}>
                                    <UserOutlined />
                                </span>
                                <span>Quản lý người dùng</span>
                            </a>
                        </div>

                        <div className={cx('item')}>
                            <a href="mod">
                                <span className={cx('icon')}>
                                    <TeamOutlined />
                                </span>
                                <span>Quản lý điều phối viên</span>
                            </a>
                        </div>

                        <div className={cx('item')}>
                            <a href="books">
                                <span className={cx('icon')}>
                                    <BookOutlined />
                                </span>
                                <span>Quản lý sách</span>
                            </a>
                        </div>

                        <div className={cx('item')}>
                            <a href="category">
                                <span className={cx('icon')}>
                                    <FolderOutlined />
                                </span>
                                <span>Quản lý danh mục</span>
                            </a>
                        </div>

                        <div className={cx('item')}>
                            <a href="comment">
                                <span className={cx('icon')}>
                                    <CommentOutlined />
                                </span>
                                <span>Quản lý bình luận</span>
                            </a>
                        </div>

                        <div className={cx('item')}>
                            <a href="statistic">
                                <span className={cx('icon')}>
                                    <ProjectOutlined />
                                </span>
                                <span>Thống kê</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={cx('HeaderandFrame')}>
                    <div className={cx('header')}>
                        <a href="/">
                            <img src={Logo} alt="" />
                        </a>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            placement="bottom"
                            arrow={{
                                pointAtCenter: true,
                            }}
                        >
                            <Button>Nhã Trúc</Button>
                        </Dropdown>
                    </div>
                    <div className={cx('frame')}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default DashboardFrame;
