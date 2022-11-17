import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';
import CoverHeader from '~/components/Layout/components/CoverHeader';
import Footer from '~/components/Layout/components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <CoverHeader />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
