/* eslint-disable jsx-a11y/alt-text */
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../../asset/images/Logo.png';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    const encodedKeyword = encodeURI(searchKeyword);
    navigate(`/search?keyword=${encodedKeyword}`);
  }
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('column')}>
          <div className={cx('side')}>
            <div className={cx('asideLeft')}>
              <a href="/">
                <div className={cx('logoBook')}>
                  <img src={logo} alt="logo" />
                </div>
              </a>
              <div id={cx('menu')}>
                <ul>
                  <li>
                    <a href="/">Trang chủ</a>
                  </li>
                  <li>
                    <p>/</p>
                  </li>
                  <li>
                    <a href="/genres">Danh mục thể loại</a>
                  </li>
                  <li>
                    <p>/</p>
                  </li>
                  <li>
                    <a href="/news">Tin tức</a>
                  </li>
                </ul>
              </div>
              <form className={cx('search')} onSubmit={handleSearch}>
                <input
                  placeholder="BẠN MUỐN TÌM GÌ"
                  spellCheck={false}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <button className={cx('clear')}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
                <button type="submit" onSubmit={handleSearch} className={cx('search-btn')}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </form>
            </div>
            <div className={cx('actions')}>
              <div className={cx('button')}>
                <a href="../../../../login">
                  <p>Đăng nhập</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
