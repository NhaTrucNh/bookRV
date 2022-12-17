import React from 'react';
import classNames from 'classnames/bind';
import styles from './ChangePassword.module.scss';
import { Button, Form, Input } from 'antd';

const cx = classNames.bind(styles);

export default class ChangePassword extends React.Component {
    render() {
        const onFinish = (values) => {
            console.log('Success:', values);
        };
        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };

        return (
            <div>
                <div className={cx('wrapper')}>
                    <div className={cx('container')}>
                        <h2 className={cx('title')}>Đổi mật khẩu</h2>
                        <a href="profile">Xem hồ sơ của tôi</a>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('Form')}>
                            <Form
                                layout="vertical"
                                onFinish={onFinish}
                                name="basic"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Mật khẩu hiện tại"
                                    name="currentpassword"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Vì lý do an ninh, bạn phải xác minh mật khẩu hiện tại trước khi đặt mật khẩu mới.',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    label="Mật khẩu mới"
                                    name="newpassword"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Bạn chưa nhập mật khẩu',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    label="Xác nhận mật khẩu mới"
                                    name="enterpassword"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Mật khẩu của bạn chưa đúng',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    wrapperCol={{
                                        offset: 10,
                                        span: 16,
                                    }}
                                >
                                    <Button style={{ backgroundColor: '#ee684b', color: '#fff' }} htmlType="submit">
                                        Lưu thay đổi
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
