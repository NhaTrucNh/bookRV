/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { authApi } from '~/api/api';
import logo from '../../asset/images/Logo.png';
import styles from './Register.module.scss';

const EMAIL_REGEX = /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,4}$/;
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const cx = classNames.bind(styles);

export default function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);

  useEffect(() => {
    if (Cookies.get('token')) {
      navigate("/");
    }
  }, [navigate])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = PWD_REGEX.test(pwd);
    const v2 = EMAIL_REGEX.test(email);
    if (!v1 || !v2) {
      toast.error("Invalid Entry");
      return;
    }

    authApi.register({ name, email, password: pwd }).then((response) => {
      if (response?.data.code === 200) {
        //clear state and controlled inputs
        setPwd('');
        setEmail('');
        setMatchPwd('');
        toast.success('Registration Successful');

        // redirect to login page
        navigate('/login');
      }
    }).catch((error) => {
      if (!error?.response) {
        toast.error('No Server Response');
      } else if (error.response.data?.code === 400) {
        toast.error(error.response.data?.message);
      } else {
        console.log(error.response.data);
        toast.error('Registration Failed')
      }
    })
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={logo} />
        </div>
        <div className={cx('form')}>
          <input type="text" placeholder="Nhập tên" spellCheck={false} autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={cx('form')}>
          <input type="email" placeholder="Nhập email" spellCheck={false} autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} style={{ borderColor: validEmail ? 'green' : 'red' }} />
        </div>
        <div className={cx('form')}>
          <input type="password" placeholder="Nhập mật khẩu" spellCheck={false} value={pwd} onChange={(e) => setPwd(e.target.value)} style={{ borderColor: validPwd ? 'green' : 'red' }} />
        </div>
        <div className={cx('form')}>
          <input type="password" placeholder="Nhập lại mật khẩu" spellCheck={false} value={matchPwd} onChange={(e) => setMatchPwd(e.target.value)} style={{ borderColor: validMatch ? 'green' : 'red' }} />
        </div>

        <div className={cx('submit')}>
          <button type="submit" disabled={!(name && validEmail && validPwd && validMatch)} onClick={handleSubmit}>Đăng ký</button>
        </div>
        <p>
          Đã có tài khoản ? <a href="../login">Đăng nhập</a>
        </p>
      </div>
    </div>
  );
}
