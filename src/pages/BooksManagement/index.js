import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './BooksManagement.module.scss';
import { Tabs, Button, Upload, Form, Input, Table, Space, Checkbox, Modal } from 'antd';
import { UploadOutlined, EditOutlined, DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';

const cx = classNames.bind(styles);

export default function BooksManagement() {
    const { confirm } = Modal;
    const showDeleteConfirm = () => {
        confirm({
            title: 'Bạn chắc chắn muốn xoá cuốn sách này?',
            icon: <ExclamationCircleFilled />,
            content: 'Nếu bấm "Yes", bạn sẽ xoá sách khỏi hệ thống',
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
    const [open, setOpen] = useState(false);

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

    const columns = [
        {
            title: 'Bìa sách',
            dataIndex: 'coverbook',
            key: 'coverbook',
            render: (theImageURL) => <img src={theImageURL} alt={theImageURL} />,
        },
        {
            title: 'Tên sách',
            dataIndex: 'titlebook',
            key: 'titlebook',
        },
        {
            title: 'Tác giả',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: 'Thể loại',
            dataIndex: 'genre',
            key: 'genre',
        },
        {
            title: 'Nhà xuất bản',
            dataIndex: 'publisher',
            key: 'publisher',
        },
        {
            title: 'Ngày phát hành',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Số trang',
            dataIndex: 'pages',
            key: 'pages',
        },

        {
            title: '',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <button type="primary" onClick={() => setOpen(true)}>
                        <EditOutlined />
                    </button>
                    <Modal
                        title="Chỉnh sửa thông tin sách"
                        centered
                        open={open}
                        onOk={() => setOpen(false)}
                        onCancel={() => setOpen(false)}
                        width={1000}
                    >
                        <div className={cx('column')}>
                            <div className={cx('Left')}>
                                <Form
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                    layout="vertical"
                                >
                                    <Form.Item label="Mã sách" name="bookcode" disabled={true}>
                                        <Input disabled={true} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Tên sách"
                                        name="bookname"
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
                                        name="author"
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
                                        <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                                            <Space className={cx('GenreList')}>
                                                <Checkbox value="KHVT">Khoa học viễn tưởng</Checkbox>
                                                <Checkbox value="KHVT">Thơ</Checkbox>
                                                <Checkbox value="KHVT">Khoa học viễn tưởng</Checkbox>
                                                <Checkbox value="KHVT">Khoa học viễn tưởng</Checkbox>
                                                <Checkbox value="KHVT">Khoa học viễn tưởng</Checkbox>
                                                <Checkbox value="KHVT">Khoa học viễn tưởng</Checkbox>
                                                <Checkbox value="KHVT">Âm nhạc</Checkbox>
                                            </Space>
                                        </Checkbox.Group>
                                    </Form.Item>
                                </Form>
                            </div>
                            <div className={cx('Right')}>
                                <Form
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                    layout="vertical"
                                >
                                    <Form.Item name="summary" label="Tóm tắt">
                                        <TextArea autoSize={{ minRows: 5, maxRows: 8 }} />
                                    </Form.Item>

                                    <Form.Item label="Ảnh bìa" name="avatar">
                                        <Upload
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            listType="picture"
                                            maxCount={1}
                                        >
                                            <Button icon={<UploadOutlined />}>Tải lên ảnh bìa</Button>
                                        </Upload>
                                    </Form.Item>

                                    <Form.Item label="Nhà xuất bản" name="publisher">
                                        <Input />
                                    </Form.Item>

                                    <Form.Item label="Ngày xuất bản" name="date">
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Số trang" name="pages">
                                        <Input />
                                    </Form.Item>

                                    <Form.Item label="Nơi bán" name="link">
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
            coverbook:
                'https://mangaycomics.com/wp-content/webpc-passthru.php?src=https://mangaycomics.com/wp-content/uploads/2022/09/chainsaw-man-home-160x250.jpg&nocache=1',
            titlebook: 'Chainsaw Man',
            author: 'Tatsuki Fujimoto',
            genre: 'Manga',
            publisher: '11/10/2998',
            date: '1/10/2019',
            pages: '295 trang',
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
                                                        <Form.Item label="Mã sách" name="bookcode" disabled={true}>
                                                            <Input disabled={true} />
                                                        </Form.Item>

                                                        <Form.Item
                                                            label="Tên sách"
                                                            name="bookname"
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

                                                        <Form.Item label="Ngày xuất bản" name="date">
                                                            <Input />
                                                        </Form.Item>
                                                        <Form.Item label="Số trang" name="pages">
                                                            <Input />
                                                        </Form.Item>

                                                        <Form.Item label="Nơi bán" name="link">
                                                            <Input />
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
