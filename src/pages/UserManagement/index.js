import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './UserManagement.module.scss';
import { Tabs, Button, Upload, Form, Input, Select, Table, Space, Tag, Modal } from 'antd';
import { UploadOutlined, EditOutlined, DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';

const cx = classNames.bind(styles);

export default function UserManagement() {
    const { confirm } = Modal;
    const showDeleteConfirm = () => {
        confirm({
            title: 'Bạn có chắc chắn muốn xoá người dùng này không?',
            icon: <ExclamationCircleFilled />,
            content: 'Một khi đã nhấn "Yes", người dùng sẽ bị xoá khỏi hệ thống',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    const { Option } = Select;
    const onChange = (key) => {
        console.log(key);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const columns = [
        {
            title: 'Tên',
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
            title: 'Trạng thái tài khoản',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color;
                        if (tag === 'Khoá') {
                            color = 'volcano';
                        }
                        if (tag === 'Hoạt động') {
                            color = 'green';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: '',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <button type="primary" onClick={showModal}>
                        <EditOutlined />
                    </button>
                    <Modal
                        title="Chỉnh sửa người dùng"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        type="dashed"
                    >
                        <div className={cx('popup-content')}>
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
                                    <Form.Item label="Tên người dùng" name="username">
                                        <Input />
                                    </Form.Item>

                                    <Form.Item label="Email" name="email">
                                        <Input />
                                    </Form.Item>

                                    <Form.Item label="Số điện thoại" name="phonenumber">
                                        <Input />
                                    </Form.Item>

                                    <Form.Item name="Giới tính" label="Giới tính">
                                        <Select placeholder="Chọn giới tính">
                                            <Option value="male">Nam</Option>
                                            <Option value="female">Nữ</Option>
                                            <Option value="other">Khác</Option>
                                        </Select>
                                    </Form.Item>

                                    <Form.Item name="Trạng thái tài khoản" label="Trạng thái tài khoản">
                                        <Select placeholder="Chọn trạng thái">
                                            <Option value="banner">Khoá tài khoản</Option>
                                            <Option value="active">Hoạt động</Option>
                                        </Select>
                                    </Form.Item>

                                    <Form.Item label="Mật khẩu" name="password">
                                        <Input.Password />
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </Modal>
                    <Button onClick={showDeleteConfirm} type="link">
                        <DeleteOutlined />
                    </Button>
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
                <div className={cx('title')}>Người dùng</div>
                <div className={cx('tab')}>
                    <Tabs
                        defaultActiveKey="1"
                        onChange={onChange}
                        items={[
                            {
                                label: `Tạo mới người dùng`,
                                key: '1',
                                children: (
                                    <>
                                        <div className={cx('create')}>
                                            <div className={cx('titles')}>
                                                <p>Tạo tài khoản người dùng</p>
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
                                                        <Form.Item
                                                            label="Mã người dùng"
                                                            name="usercode"
                                                            disabled={true}
                                                        >
                                                            <Input disabled={true} />
                                                        </Form.Item>

                                                        <Form.Item
                                                            label="Tên người dùng"
                                                            name="username"
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: 'Vui lòng nhập tên người dùng',
                                                                },
                                                            ]}
                                                        >
                                                            <Input />
                                                        </Form.Item>

                                                        <Form.Item
                                                            label="Email"
                                                            name="email"
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: 'Vui lòng nhập tên người dùng',
                                                                },
                                                            ]}
                                                        >
                                                            <Input />
                                                        </Form.Item>

                                                        <Form.Item label="Số điện thoại" name="phonenumber">
                                                            <Input />
                                                        </Form.Item>

                                                        <Form.Item name="Giới tính" label="Gender">
                                                            <Select placeholder="Chọn giới tính">
                                                                <Option value="male">Nam</Option>
                                                                <Option value="female">Nữ</Option>
                                                                <Option value="other">Khác</Option>
                                                            </Select>
                                                        </Form.Item>

                                                        <Form.Item label="Ảnh đại diện" name="avatar">
                                                            <Upload
                                                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                                listType="picture"
                                                                maxCount={1}
                                                            >
                                                                <Button icon={<UploadOutlined />}>
                                                                    Tải lên ảnh đại diện
                                                                </Button>
                                                            </Upload>
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
                                label: `Quản lý người dùng`,
                                key: '2',
                                children: (
                                    <>
                                        <div className={cx('update')}>
                                            <div className={cx('titles')}>
                                                <p>Quản lý tài khoản người dùng</p>
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
