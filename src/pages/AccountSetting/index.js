import { UploadOutlined } from '@ant-design/icons';
import { Button, DatePicker, Upload } from 'antd';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './AccountSetting.module.scss';

const cx = classNames.bind(styles);

export default class AccountSetting extends React.Component {
  render() {
    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };

    return (
      <div>
        <div className={cx('wrapper')}>
          <div className={cx('container')}>
            <h2 className={cx('title')}>Cài đặt tài khoản</h2>
            <a href="profile">Xem hồ sơ của tôi</a>
          </div>
          <div className={cx('content')}>
            <div className={cx('Form')}>
              <form>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  disabled="disabled"
                  value="heisia1412@gmail.com"
                />

                <label htmlFor="username">Tên hiển thị</label>
                <input type="text" id="username" name="username" />

                <label htmlFor="avatar">Ảnh đại diện</label>

                <div className={cx('cover')}>
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture"
                    maxCount={1}
                  >
                    <Button icon={<UploadOutlined />}>Tải lên ảnh đại diện</Button>
                  </Upload>
                </div>

                <label htmlFor="dob">Ngày sinh</label>
                <div className={cx('space')}>
                  <DatePicker onChange={onChange} />
                </div>

                <label htmlFor="aboutme">Về tôi</label>
                <textarea id="aboutme" name="aboutme"></textarea>

                <div className={cx('submit')}>
                  <Button type="primary">Lưu lại</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
