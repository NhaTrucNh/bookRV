import classNames from 'classnames/bind';
import React from 'react';
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
            <li><a href='/'>Trang chủ</a></li>
            <li>
              <div className={cx('square')}></div>
            </li>
            <li><a href='/genres'>Danh mục thể loại</a></li>
            <li>
              <div className={cx('square')}></div>
            </li>
            <li><a href='/news'>Tin tức</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
