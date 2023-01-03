import { Button } from 'antd';
import classNames from 'classnames/bind';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { userApi } from '~/api/api';
import styles from './ChangePassword.module.scss';

const cx = classNames.bind(styles);
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default function ChangePassword() {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [matchPassword, setMatchPassword] = useState('');
  const [validMatchPassword, setValidMatchPassword] = useState(false);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(newPassword));
    setValidMatchPassword(matchPassword === newPassword);
  }, [newPassword, matchPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validPassword && validMatchPassword) {
      const token = Cookies.get('token');
      const data = {
        oldPassword,
        newPassword
      }
      userApi.changePassword(data, token).then((response) => {
        if (response.data.code === 200) {
          toast.success('Đổi mật khẩu thành công');
          navigate('/profile');
        }
      }).catch((error) => {
        if (error.response.data.message === 'Invalid password') {
          toast.error('Mật khẩu cũ không đúng');
        }
        if (error.response.data.code === 500) {
          toast.error('Đổi mật khẩu thất bại');
        }
        if (error.response.data.code === 401) {
          toast.error('Phiên đăng nhập đã hết hạn');
          Cookies.remove('token');
          localStorage.removeItem('user');
          navigate("/login");
        }
      })
    }
  }

  return (
    <div>
      <div className={cx('wrapper')}>
        <div className={cx('container')}>
          <h2 className={cx('title')}>Đổi mật khẩu</h2>
          <a href="profile">Xem hồ sơ của tôi</a>
        </div>
        <div className={cx('content')}>
          <div className={cx('Form')}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="oldpassword">
                <span>*</span>Nhập mật khẩu cũ
              </label>
              <input type="password" id="oldpassword" name="oldpassword" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />

              <label htmlFor="newpassword">
                <span>*</span>Nhập mật khẩu mới
              </label>
              <input type="password" id="newpassword" name="newpassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
              <label htmlFor="enternewpassword">
                <span>*</span>Nhập lại mật khẩu mới
              </label>
              <input type="password" id="enternewpassword" name="enternewpassword" value={matchPassword} onChange={(e) => setMatchPassword(e.target.value)} />

              <div className={cx('submit')}>
                <Button type="primary" disabled={!validPassword || !validMatchPassword} htmlType="submit">
                  Lưu lại
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
