import classNames from 'classnames/bind';
import styles from './CoverHeader.module.scss';

const cx = classNames.bind(styles);

function CoverHeader() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('cover-header')}></div>
    </header>
  );
}

export default CoverHeader;
