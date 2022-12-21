import React from 'react';
import classNames from 'classnames/bind';
import styles from './Statistic.module.scss';

const cx = classNames.bind(styles);

export default function Statistic() {
    return (
        <>
            <div className={cx('usermanagement')}>
                <div className={cx('title')}>Thống kê</div>
                <div className={cx('statistic')}>
                    <div className={cx('content')}>
                        <div className={cx('frame')}>
                            <h4>Số lượng đầu sách</h4>
                            <p>
                                10000<span> cuốn</span>
                            </p>
                        </div>
                        <div className={cx('frame')}>
                            <h4>Số lượng thành viên</h4>
                            <p>
                                10000<span> thành viên</span>
                            </p>
                        </div>
                        <div className={cx('frame')}>
                            <h4>Số lượng danh mục</h4>
                            <p>
                                10000<span> danh mục</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
