import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountSetting.module.scss';
import { Button, Form, Input, DatePicker, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

export default class AccountSetting extends React.Component {
    render() {
        const onFinish = (values) => {
            console.log('Success:', values);
        };
        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };

        const onChange = (date, dateString) => {
            console.log(date, dateString);
        };

        const { TextArea } = Input;

        return (
            <div>
                <div className={cx('wrapper')}>
                    <div className={cx('container')}>
                        <h2 className={cx('title')}>Cài đặt tài khoản</h2>
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
                                    disabled={true}
                                    defaultValue="nguyennhatruc@gmail.com"
                                    label="Email"
                                    name="email"
                                >
                                    <Input disabled={true} defaultValue="nguyennhatruc@gmail.com" />
                                </Form.Item>

                                <Form.Item
                                    label="Tên tài khoản"
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Tên này sẽ được hiển thị trên BookRV',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item label="Ảnh đại diện" name="avatar">
                                    <Upload
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        listType="picture"
                                        maxCount={1}
                                    >
                                        <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
                                    </Upload>
                                </Form.Item>

                                <Form.Item label="Ngày sinh" name="date">
                                    <DatePicker onChange={onChange} />
                                </Form.Item>

                                <Form.Item label="Đôi điều về tôi" name="aboutme">
                                    <TextArea rows={6} maxLength={300} />
                                </Form.Item>

                                <Form.Item
                                    wrapperCol={{
                                        offset: 10,
                                        span: 16,
                                    }}
                                >
                                    <Button style={{ backgroundColor: '#ee684b', color: '#fff' }} htmlType="submit">
                                        Lưu lại
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
