import classNames from 'classnames/bind';
import News1 from '../../../../asset/images/News1.jpg';
import News2 from '../../../../asset/images/News2.jpg';
import News3 from '../../../../asset/images/News3.jpg';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <div className={cx('news-catalog')}>
        <p>Tin tức</p>
        <hr width="100%" color="#E8E8E8" />
      </div>
      <div className={cx('news-content')}>
        <a href="##">
          <img src={News1} alt="News1" />
          <p>Sách được độc giả mong đợi nhất tháng 12</p>
        </a>

        <a href="##">
          <img src={News2} alt="News2" />
          <p>7 Cuốn Sách Hay Lên kệ Tuần Này</p>
        </a>
        <a href="##">
          <img src={News3} alt="News3" />
          <p>Ôm ấp với những chuyện tình lãng mạn trong kỳ nghỉ đông năm 2022</p>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
