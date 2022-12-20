import React from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <div className={cx('wrapper')}>
                    <div className={cx('container')}>
                        <h2 className={cx('title')}>Hồ sơ thành viên</h2>
                        <a href="accountsetting">Chỉnh sửa hồ sơ</a>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('profile')}>
                            <div className={cx('top')}>
                                <div className={cx('left')}>
                                    <div>
                                        <img src="https://i.imgur.com/eIeV9Bw.jpg" alt="" />
                                    </div>
                                    <div>
                                        <a href="##">
                                            2 <span>cảm nhận</span>
                                        </a>
                                    </div>
                                </div>
                                <div className={cx('right')}>
                                    <div className={cx('userName')}>Nhã Trúc</div>
                                    <hr />
                                    <div className={cx('dob')}>
                                        Ngày sinh: <span>30/6/2000</span>
                                    </div>
                                    <div className={cx('aboutMe')}>
                                        Về tôi:{' '}
                                        <span>
                                            Eu sunt in non magna cillum duis Lorem fugiat nostrud. Non sint occaecat
                                            adipisicing elit consectetur non.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className={cx('bot')}>
                                <div className={cx('Tit')}>Tủ sách của tôi</div>
                                <div className={cx('shelf')}>
                                    <a href="mybook">
                                        Muốn đọc <span>(16)</span>
                                    </a>
                                    <a href="mybook">
                                        Đang đọc <span>(5)</span>
                                    </a>
                                    <a href="mybook">
                                        Đã đọc <span>(10)</span>
                                    </a>
                                    <a href="mybook">
                                        Ngưng đọc <span>(2)</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
