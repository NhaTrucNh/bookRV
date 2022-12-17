import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

class Footer extends React.Component {
    render() {
        return (
            <footer className={cx('wrapper')}>
                <div className={cx('nav')}>
                    <ul>
                        <li>© 2022, BOOKRV, Inc.</li>
                        <li>
                            <div className={cx('square')}></div>
                        </li>
                        <li>Công ty</li>
                        <li>
                            <div className={cx('square')}></div>
                        </li>
                        <li>Hỗ trợ</li>
                        <li>
                            <div className={cx('square')}></div>
                        </li>
                        <li>Điều khoản dịch vụ</li>
                        <li>
                            <div className={cx('square')}></div>
                        </li>
                        <li>Chính sách bảo mật</li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;
