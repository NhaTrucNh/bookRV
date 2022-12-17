import classNames from 'classnames/bind';
import HeaderAccount from '~/components/Layout/components/HeaderAccount';
import styles from './AccountLayout.module.scss';
import Footer from '~/components/Layout/components/Footer';

const cx = classNames.bind(styles);

function AccountLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderAccount />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default AccountLayout;
