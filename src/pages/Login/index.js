/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import logo from '../../asset/images/Logo.png';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logo} />
                </div>
                <div className={cx('form')}>
                    <input type="email" placeholder="Nhập email" spellCheck={false} />
                </div>
                <div className={cx('form')}>
                    <input type="password" placeholder="Nhập mật khẩu" spellCheck={false} />
                </div>

                <div className={cx('submit')}>
                    <button>Đăng nhập</button>
                </div>
                <p>
                    Chưa có tài khoản ? <a href="../Register">Đăng ký</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
