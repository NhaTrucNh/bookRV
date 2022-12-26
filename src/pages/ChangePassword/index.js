import React from 'react';
import classNames from 'classnames/bind';
import styles from './ChangePassword.module.scss';
import { Button } from 'antd';

const cx = classNames.bind(styles);

export default class ChangePassword extends React.Component {
    render() {
        return (
            <div>
                <div className={cx('wrapper')}>
                    <div className={cx('container')}>
                        <h2 className={cx('title')}>Đổi mật khẩu</h2>
                        <a href="profile">Xem hồ sơ của tôi</a>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('Form')}>
                            <form>
                                <label for="oldpassword">
                                    <span>*</span>Nhập mật khẩu cũ
                                </label>
                                <input type="password" id="oldpassword" name="oldpassword" />

                                <label for="newpassword">
                                    <span>*</span>Nhập mật khẩu mới
                                </label>
                                <input type="password" id="newpassword" name="newpassword" />

                                <label for="enternewpassword">
                                    <span>*</span>Nhập lại mật khẩu mới
                                </label>
                                <input type="password" id="enternewpassword" name="enternewpassword" />

                                <div className={cx('submit')}>
                                    <Button type="primary">Lưu lại</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
