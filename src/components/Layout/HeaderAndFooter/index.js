import classNames from 'classnames/bind';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { authApi } from '~/api/api';
import Footer from '~/components/Layout/components/Footer';
import Header from '~/components/Layout/components/Header';
import HeaderAccount from '../components/HeaderAccount';
import styles from './HeaderAndFooter.module.scss';

const cx = classNames.bind(styles);

function HeaderAndFooter({ children }) {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (Cookies.get('token') && localStorage.getItem('user')) {
      authApi
        .verify(JSON.parse(localStorage.getItem('user')).email, Cookies.get('token'))
        .then((response) => {
          if (response?.data.code === 200) {
            setIsLogged(true);
            setUser(JSON.parse(localStorage.getItem('user')));
          }
        })
        .catch((error) => {
          const msg = error.response.data.message ? error.response.data.message : 'Verify Failed';
          toast.error(msg);
          Cookies.remove('token');
          localStorage.removeItem('user');
          navigate('/login');
        });
    }
  }, [navigate]);
  return (
    <div className={cx('wrapper')}>
      {isLogged ? <HeaderAccount user={user} /> : <Header />}
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default HeaderAndFooter;
