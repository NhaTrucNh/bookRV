/* eslint-disable jsx-a11y/alt-text */

import classNames from 'classnames/bind';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { authApi } from '~/api/api';
import logo from '../../asset/images/Logo.png';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);
const EMAIL_REGEX = /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,4}$/;

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [validEmail, setValidEmail] = useState(false);

    useEffect(() => {
        if (Cookies.get('token')) {
            navigate("/");
        }
    }, [navigate])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    const handleSubmit = async (e) => {
        e.preventDefault();
        authApi.login({ email, password: pwd }).then((response) => {
            if (response?.data.code === 200) {
                //clear state and controlled inputs
                setPwd('');
                setEmail('');
                toast.success('Login Successful');
                localStorage.setItem('user', JSON.stringify({
                    email: response.data.result.email,
                    name: response.data.result.name,
                    role: response.data.result.role,
                }));
                Cookies.set('token', response.data.result.token);
                navigate("/");
            } else {
                toast.error(response.data.message);
            }
        }).catch((error) => {
            const msg = error.response.data.message ? error.response.data.message : 'Login Failed';
            toast.error(msg);
        })
    }

    return (
        <div className={cx('wrapper')}>
            <form className={cx('inner')} onSubmit={handleSubmit}>
                <div className={cx('logo')}>
                    <img src={logo} />
                </div>
                <div className={cx('form')}>
                    <input type="email" placeholder="Nhập email" spellCheck={false} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={cx('form')}>
                    <input type="password" placeholder="Nhập mật khẩu" spellCheck={false} value={pwd} onChange={(e) => setPwd(e.target.value)} />
                </div>
                <div className={cx('submit')} type="submit">
                    <button type="submit" disabled={!validEmail || pwd.length < 8} >Đăng nhập</button>
                </div>
                <p>
                    Chưa có tài khoản ? <a href="./register">Đăng ký</a>
                </p>
            </form>
        </div>
    );
}
