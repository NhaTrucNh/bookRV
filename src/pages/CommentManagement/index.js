import React from 'react';
import classNames from 'classnames/bind';
import styles from './CommentManagement.module.scss';
import { Button, Table, Space, Modal } from 'antd';
import { DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';

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

    const columns = [
        {
            title: 'Tên sách',
            dataIndex: 'titlebook',
            key: 'titlebook',
        },
        {
            title: 'Tên người dùng',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Bình luận người dùng',
            dataIndex: 'comment',
            key: 'comment',
        },
        {
            title: 'Ngày bình luận',
            dataIndex: 'date',
            key: 'date',
        },

        {
            title: '',
            key: 'action',
            render: () => (
                <Space size="middle">
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
            titlebook: 'Chainsaw Man',
            username: 'Nhã Trúc',
            comment:
                'It is the same old story. Boy finds a devil dog with a chainsaw for a nose, devil dog is assimilated into the boys body, boy now has a chainsaw ripcord coming out of his chest, boy now can turn into chainsaw man by pulling the ripcord, boy then has a chainsaw coming out of his face and a chainsaw coming out of each arm, boy meets girl from the secret service, secret service girl forces boy to use his chainsaw powers to fight the many devils and demons that run amok in the world, boy is obsessed with boobs, boy is even more obsessed with secret service girl. We all heard it a million times before.',
            date: '11/10/2019',
        },

        {
            key: '2',
            titlebook: 'Chainsaw Man',
            username: 'ELLIAS (elliasreads)',
            comment:
                'Sometimes you just want to read something so insane itll make you laugh. This is Chainsaw Man. So at the start we have Denji who is trying to survive. Hell do pretty much anything for some money. He also has his trusty dog Pochita, who has a actual chainsaw coming out of his freaking head. So together they kill devils and make money. But one day something horrible happens to Denji and Pochita must do something to save him. Tus Chainsaw Man is born!',
            date: '11/10/2019',
        },
    ];
    return (
        <>
            <div className={cx('usermanagement')}>
                <div className={cx('title')}>Bình luận người dùng</div>
                <div className={cx('update')}>
                    <div className={cx('titles')}>
                        <p>Quản lý bình luận</p>
                    </div>
                    <div className={cx('content')}>
                        <Table columns={columns} dataSource={data} />
                    </div>
                </div>
            </div>
        </>
    );
}
