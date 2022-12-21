import React from 'react';
import classNames from 'classnames/bind';
import styles from './Review.module.scss';
import { Rate, Select, Input, Button } from 'antd';

const cx = classNames.bind(styles);

export default class Review extends React.Component {
    render() {
        const { Option } = Select;
        const { TextArea } = Input;
        return (
            <>
                <div className={cx('wrapper')}>
                    <div className={cx('bookinfo')}>
                        <div className={cx('cover')}>
                            <img
                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1570033159l/49966677.jpg"
                                alt=""
                            />
                        </div>
                        <div className={cx('info')}>
                            <div>
                                <div className={cx('title')}>Chainsaw Man Manga comic 4 Collection</div>
                                <div className={cx('author')}>
                                    <span>bởi </span>Tatsuki Fujimoto
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={cx('rating')}>
                        <div className={cx('rate')}>
                            <div className={cx('name')}>Đánh giá: </div>
                            <Rate />
                        </div>
                        <div className={cx('shelf')}>
                            <div className={cx('name')}>Tủ sách: </div>
                            <Select placeholder="Chọn tủ sách">
                                <Option value="wantread">Muốn đọc</Option>
                                <Option value="reading">Đang đọc</Option>
                                <Option value="read">Đã đọc</Option>
                                <Option value="drop">Ngưng đọc</Option>
                            </Select>
                        </div>
                        <div className={cx('review')}>
                            <div className={cx('name')}>Đánh giá: </div>
                            <TextArea
                                placeholder="Nhập cảm nhận của bạn vào đây"
                                style={{
                                    height: 200,
                                    marginBottom: 24,
                                }}
                            />
                        </div>
                        <div className={cx('post')}>
                            <Button type="primary">Đăng</Button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
