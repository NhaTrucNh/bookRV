/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import logo from '../../asset/images/Logo.png';

const cx = classNames.bind(styles);

function Register() {
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
                    <button>Đăng ký</button>
                </div>
                <p>
                    Đã có tài khoản ? <a href="../Login">Đăng nhập</a>
                </p>
            </div>
        </div>
    );
}

export default Register;
