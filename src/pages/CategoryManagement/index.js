import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CategoryManagement.module.scss';
import { Tabs, Button, Form, Input, Table, Space, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';

const cx = classNames.bind(styles);

export default function CategoryManagement() {
    const { confirm } = Modal;
    const showDeleteConfirm = () => {
        confirm({
            title: 'Bạn có chắc chắn muốn xoá danh mục này không?',
            icon: <ExclamationCircleFilled />,
            content: 'Một khi đã nhấn "Yes", danh mục sẽ bị xoá khỏi hệ thống',
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
            title: 'Mã danh mục',
            dataIndex: 'catecode',
            key: 'catecode',
        },
        {
            title: 'Tên danh mục',
            dataIndex: 'catename',
            key: 'catename',
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
                        title="Chỉnh sửa danh mục"
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
                                    <Form.Item label="Mã danh mục" name="catecode">
                                        <Input />
                                    </Form.Item>

                                    <Form.Item label="Tên danh mục" name="catename">
                                        <Input />
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
            catecode: 'TN',
            catename: 'Thiếu nhi',
        },

        {
            key: '2',
            catecode: 'KHVT',
            catename: 'Khoa học viễn tưởng',
        },

        {
            key: '3',
            catecode: 'KD',
            catename: 'Kinh dị',
        },
    ];
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
                                                    <Form
                                                        initialValues={{
                                                            remember: true,
                                                        }}
                                                        onFinish={onFinish}
                                                        onFinishFailed={onFinishFailed}
                                                        autoComplete="off"
                                                        layout="vertical"
                                                    >
                                                        <Form.Item label="Mã danh mục" name="catecode">
                                                            <Input />
                                                        </Form.Item>

                                                        <Form.Item label="Tên danh mục" name="catename">
                                                            <Input />
                                                        </Form.Item>

                                                        <Form.Item
                                                            wrapperCol={{
                                                                offset: 10,
                                                                span: 16,
                                                            }}
                                                        >
                                                            <Space wrap>
                                                                <Button type="primary" htmlType="submit">
                                                                    Tạo mới
                                                                </Button>
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
                                label: `Quản lý danh mục`,
                                key: '2',
                                children: (
                                    <>
                                        <div className={cx('update')}>
                                            <div className={cx('titles')}>
                                                <p>Danh sách danh mục</p>
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
