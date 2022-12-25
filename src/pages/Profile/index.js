import classNames from 'classnames/bind';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { userApi } from '~/api/api';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);


export default function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    useEffect(() => {
        if (Cookies.get('token') && localStorage.getItem('user')) {
            userApi.getSelf(Cookies.get('token')).then((response) => {
                if (response?.data.code === 200) {
                    setUser(response.data.result);
                }
            }).catch((error) => {
                const msg = error.response.data.message ? error.response.data.message : 'Verify Failed';
                toast.error(msg);
                Cookies.remove('token');
                localStorage.removeItem('user');
                navigate("/login");
            })
        }
    }, [navigate])

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
                                <div className={cx('userName')}>{user?.name}</div>
                                <hr />
                                <div className={cx('dob')}>
                                    Ngày sinh: <span>{user?.dateOfBirth ? user?.dateOfBirth : 'Chưa cập nhật'}</span>
                                </div>
                                <div className={cx('aboutMe')}>
                                    Về tôi: {'  '}
                                    <span>
                                        {user?.bio ? user?.bio : 'Chưa cập nhật'}
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
