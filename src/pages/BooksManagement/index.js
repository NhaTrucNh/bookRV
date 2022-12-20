import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './BooksManagement.module.scss';
import Popup from '../../components/Popup';
import { Tabs, Button, Upload, Form, Input, Table, Space, Checkbox, Col, Row } from 'antd';
import { UploadOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

export default function BooksManagement() {
    const { TextArea } = Input;
    const onChange = (key) => {
        console.log(key);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [showPopup, setShowPopup] = useState(false);

    const columns = [
        {
            title: 'Tên sách',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phonenumber',
            key: 'phonenumber',
        },
        {
            title: 'Giới tính',
            dataIndex: 'sex',
            key: 'sex',
        },
        {
            title: 'Năm sinh',
            dataIndex: 'dob',
            key: 'dob',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <button onClick={() => setShowPopup(true)}>
                        <EditOutlined />
                    </button>
                    <Popup trigger={showPopup} setTrigger={setShowPopup}>
                        <div className={cx('popup-content')}>
                            <p>Chỉnh sửa thông tin sách</p>
                            <div className={cx('FormUpdate')}>
                                <Form
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                    layout="vertical"
                                >
                                    <Form.Item label="Tên điều phối viên" name="username">
                                        <Input />
                                    </Form.Item>

                                    <Form.Item label="Email" name="email">
                                        <Input />
                                    </Form.Item>

                                    <Form.Item label="Thể loại" name="genre">
                                        <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                                            <Row>
                                                <Col span={8}>
                                                    <Checkbox value="A">A</Checkbox>
                                                </Col>
                                                <Col span={8}>
                                                    <Checkbox value="B">B</Checkbox>
                                                </Col>
                                                <Col span={8}>
                                                    <Checkbox value="C">C</Checkbox>
                                                </Col>
                                                <Col span={8}>
                                                    <Checkbox value="D">D</Checkbox>
                                                </Col>
                                                <Col span={8}>
                                                    <Checkbox value="E">E</Checkbox>
                                                </Col>
                                            </Row>
                                        </Checkbox.Group>
                                    </Form.Item>

                                    <Form.Item
                                        wrapperCol={{
                                            offset: 9,
                                            span: 16,
                                        }}
                                    >
                                        <Space wrap>
                                            <Button type="primary" htmlType="submit">
                                                Lưu lại
                                            </Button>
                                        </Space>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </Popup>

                    <DeleteOutlined />
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            username: 'Nhã Trúc',
            email: 'heisia1412@gmail.com',
            phonenumber: '0276453453',
            sex: 'Nữ',
            dob: '11/10/2998',
            tags: ['Hoạt động'],
        },
        {
            key: '2',
            username: 'Anh Hoàng',
            email: 'heisia1412@gmail.com',
            phonenumber: '0276453453',
            sex: 'Nữ',
            dob: '11/10/2998',
            tags: ['Khoá'],
        },
        {
            key: '3',
            username: 'Jennie Nguyễn',
            email: 'heisia1412@gmail.com',
            phonenumber: '0276453453',
            sex: 'Nữ',
            dob: '11/10/2998',
            tags: ['Hoạt động'],
        },
        {
            key: '4',
            username: 'Hoa Phạm',
            email: 'heisia1412@gmail.com',
            phonenumber: '0276453453',
            sex: 'Nữ',
            dob: '11/10/2998',
            tags: ['Hoạt động'],
        },
    ];
    return (
        <>
            <div className={cx('usermanagement')}>
                <div className={cx('title')}>Sách</div>
                <div className={cx('tab')}>
                    <Tabs
                        defaultActiveKey="1"
                        onChange={onChange}
                        items={[
                            {
                                label: `Tạo mới sách`,
                                key: '1',
                                children: (
                                    <>
                                        <div className={cx('create')}>
                                            <div className={cx('titles')}>
                                                <p>Tạo mới sách</p>
                                            </div>
                                            <div className={cx('content')}>
                                                <div className={cx('info')}>
                                                    <Form
                                                        initialValues={{
                                                            remember: true,
                                                        }}
                                                        onFinish={onFinish}
                                                        onFinishFailed={onFinishFailed}
                                                        autoComplete="off"
                                                        layout="vertical"
                                                    >
                                                        <Form.Item label="Mã sách" name="usercode" disabled={true}>
                                                            <Input disabled={true} />
                                                        </Form.Item>

                                                        <Form.Item
                                                            label="Tên sách"
                                                            name="username"
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: 'Vui lòng nhập tên sách',
                                                                },
                                                            ]}
                                                        >
                                                            <Input />
                                                        </Form.Item>

                                                        <Form.Item
                                                            label="Tác giả"
                                                            name="Author"
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: 'Vui lòng nhập tên tác giả',
                                                                },
                                                            ]}
                                                        >
                                                            <Input />
                                                        </Form.Item>

                                                        <Form.Item label="Thể loại" name="genre">
                                                            <Checkbox.Group
                                                                style={{ width: '100%' }}
                                                                onChange={onChange}
                                                            >
                                                                <Space className={cx('GenreList')}>
                                                                    <Checkbox value="KHVT">
                                                                        Khoa học viễn tưởng
                                                                    </Checkbox>
                                                                    <Checkbox value="KHVT">Thơ</Checkbox>
                                                                    <Checkbox value="KHVT">
                                                                        Khoa học viễn tưởng
                                                                    </Checkbox>
                                                                    <Checkbox value="KHVT">
                                                                        Khoa học viễn tưởng
                                                                    </Checkbox>
                                                                    <Checkbox value="KHVT">
                                                                        Khoa học viễn tưởng
                                                                    </Checkbox>
                                                                    <Checkbox value="KHVT">
                                                                        Khoa học viễn tưởng
                                                                    </Checkbox>
                                                                    <Checkbox value="KHVT">Âm nhạc</Checkbox>
                                                                </Space>
                                                            </Checkbox.Group>
                                                        </Form.Item>

                                                        <Form.Item name="summary" label="Tóm tắt">
                                                            <TextArea autoSize={{ minRows: 5, maxRows: 8 }} />
                                                        </Form.Item>

                                                        <Form.Item label="Ảnh bìa" name="avatar">
                                                            <Upload
                                                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                                listType="picture"
                                                                maxCount={1}
                                                            >
                                                                <Button icon={<UploadOutlined />}>
                                                                    Tải lên ảnh bìa
                                                                </Button>
                                                            </Upload>
                                                        </Form.Item>

                                                        <Form.Item label="Nhà xuất bản" name="publisher">
                                                            <Input />
                                                        </Form.Item>

                                                        <Form.Item label="Ngày xuất bản" name="publisher">
                                                            <Input />
                                                        </Form.Item>

                                                        <Form.Item
                                                            label="Mật khẩu"
                                                            name="password"
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: 'Vui lòng nhập mật khẩu',
                                                                },
                                                            ]}
                                                        >
                                                            <Input.Password />
                                                        </Form.Item>

                                                        <Form.Item
                                                            wrapperCol={{
                                                                offset: 9,
                                                                span: 16,
                                                            }}
                                                        >
                                                            <Space wrap>
                                                                <Button type="primary" htmlType="submit">
                                                                    Tạo mới
                                                                </Button>
                                                                <Button htmlType="submit">Huỷ bỏ</Button>
                                                            </Space>
                                                        </Form.Item>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ),
                            },
                            {
                                label: `Quản lý sách`,
                                key: '2',
                                children: (
                                    <>
                                        <div className={cx('update')}>
                                            <div className={cx('titles')}>
                                                <p>Quản lý sách</p>
                                            </div>
                                            <div className={cx('content')}>
                                                <Table columns={columns} dataSource={data} />
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
