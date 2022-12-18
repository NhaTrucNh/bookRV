import Header from '~/components/Layout/components/Header';
import Footer from '~/components/Layout/components/Footer';
import styles from './HeaderAndFooter.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function HeaderAndFooter({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default HeaderAndFooter;
