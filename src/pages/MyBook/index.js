import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyBook.module.scss';
import { Rate, Select, Pagination } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

export default class MyBook extends React.Component {
    render() {
        const handleChange = (value) => {
            console.log(value);
        };
        return (
            <>
                <div className={cx('wrapper')}>
                    <div className={cx('Left')}>
                        <div className={cx('Shelf')}>
                            <h4>Tủ sách của tôi</h4>
                            <a href="##">
                                <p>
                                    Tất cả<span>(23)</span>
                                </p>
                            </a>
                            <a href="##">
                                <p>
                                    Muốn đọc<span>(10)</span>
                                </p>
                            </a>
                            <a href="##">
                                <p>
                                    Đang đọc<span>(5)</span>
                                </p>
                            </a>
                            <a href="##">
                                <p>
                                    Đã đọc<span>(6)</span>
                                </p>
                            </a>
                            <a href="##">
                                <p>
                                    Ngưng đọc<span>(2)</span>
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className={cx('Right')}>
                        <div className={cx('BookTableStack')}>
                            <table>
                                <thead>
                                    <tr>
                                        <th className={cx('cover')}>Ảnh bìa</th>
                                        <th className={cx('title')}>Tiêu đề</th>
                                        <th className={cx('author')}>Tác giả</th>
                                        <th className={cx('avg')}>Điểm trung bình</th>
                                        <th className={cx('lineRate')}>Đánh giá</th>
                                        <th className={cx('shef')}>Tủ sách</th>
                                        <th className={cx('DateAdd')}>Ngày thêm</th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img
                                                src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/519namgWJTL._SY346_.jpg"
                                                alt=""
                                            />
                                        </td>
                                        <td className={cx('title')}>
                                            Harry Potter and the Order of the Phoenix (Harry Potter, #5)
                                        </td>
                                        <td className={cx('author')}>Rowling, J.K.</td>
                                        <td className={cx('avg')}>4.50</td>
                                        <td className={cx('lineRate')}>
                                            <Rate max={5} defaultValue={0} style={{ fontSize: 13 }} />
                                        </td>
                                        <td className={cx('shef')}>
                                            <Select
                                                labelInValue
                                                defaultValue={{
                                                    value: 'Muốn đọc',
                                                    label: 'Muốn đọc',
                                                }}
                                                style={{
                                                    width: 120,
                                                }}
                                                onChange={handleChange}
                                                options={[
                                                    {
                                                        value: 'Muốn đọc',
                                                        label: 'Muốn đọc',
                                                    },
                                                    {
                                                        value: 'Đang đọc',
                                                        label: 'Đang đọc',
                                                    },
                                                    {
                                                        value: 'Đã đọc',
                                                        label: 'Đã đọc',
                                                    },
                                                    {
                                                        value: 'Ngưng đọc',
                                                        label: 'Ngưng đọc',
                                                    },
                                                ]}
                                            />
                                        </td>
                                        <td className={cx('DateAdd')}>Nov 29, 2022</td>
                                        <td>
                                            <DeleteOutlined />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <img
                                                src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/519namgWJTL._SY346_.jpg"
                                                alt=""
                                            />
                                        </td>
                                        <td className={cx('title')}>
                                            Harry Potter and the Order of the Phoenix (Harry Potter, #5)
                                        </td>
                                        <td className={cx('author')}>Rowling, J.K.</td>
                                        <td className={cx('avg')}>4.50</td>
                                        <td className={cx('lineRate')}>
                                            <Rate max={5} defaultValue={0} style={{ fontSize: 13 }} />
                                        </td>
                                        <td className={cx('shef')}>
                                            <Select
                                                labelInValue
                                                defaultValue={{
                                                    value: 'Muốn đọc',
                                                    label: 'Muốn đọc',
                                                }}
                                                style={{
                                                    width: 120,
                                                }}
                                                onChange={handleChange}
                                                options={[
                                                    {
                                                        value: 'Muốn đọc',
                                                        label: 'Muốn đọc',
                                                    },
                                                    {
                                                        value: 'Đang đọc',
                                                        label: 'Đang đọc',
                                                    },
                                                    {
                                                        value: 'Đã đọc',
                                                        label: 'Đã đọc',
                                                    },
                                                    {
                                                        value: 'Ngưng đọc',
                                                        label: 'Ngưng đọc',
                                                    },
                                                ]}
                                            />
                                        </td>
                                        <td className={cx('DateAdd')}>Nov 29, 2022</td>
                                        <td>
                                            <DeleteOutlined />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={cx('Pagina')}>
                            <Pagination defaultCurrent={1} total={50} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
