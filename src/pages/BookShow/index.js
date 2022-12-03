import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './BookShow.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import Rate from '~/components/Layout/components/Rate';
import CSPACAT3 from '../../asset/images/CSPACAT3.png';

const cx = classNames.bind(styles);

function BookShow() {
    const [rating, setRating] = useState(0);
    return (
        <div className={cx('wrapper')}>
            <aside className={cx('BookPage-LeftColumn')}>
                <div className={cx('BookCover')}>
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1551980663i/43664228.jpg"
                        alt="BP4"
                    />
                </div>
                <div className={cx('ActionButton')}>
                    <div className={cx('AddBtn')}>
                        <button className={cx('Add')}>Thêm vào tủ sách</button>
                        <button className={cx('Change-btn')}>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </button>
                    </div>
                    <div className={cx('BuyBtn')}>
                        <button className={cx('Add')}>Nơi bán</button>
                        <button className={cx('Change-btn')}>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </button>
                    </div>
                </div>
                <Rate rating={rating} onRating={(rate) => setRating(rate)} />
            </aside>
            <section className={cx('BookPage-RightColumn')}>
                <h1 className={cx('Title')}>Blue Period - Tập 4</h1>
                <a className={cx('Author')} href="##">
                    Yamaguchi Tsubasa
                </a>
                <div className={cx('RatingStats')}>
                    <div className={cx('Rating')}>
                        <FontAwesomeIcon className={cx('Star')} icon={faStar} />
                        <FontAwesomeIcon className={cx('Star')} icon={faStar} />
                        <FontAwesomeIcon className={cx('Star')} icon={faStar} />
                        <FontAwesomeIcon className={cx('Star')} icon={faStar} />
                        <FontAwesomeIcon className={cx('Star')} icon={faStarHalfStroke} />
                    </div>
                    <div>
                        <h1>4.55</h1>
                    </div>
                </div>
                <div className={cx('Summary')}>
                    <p>
                        Yataro Yaguchi là một học sinh xuất sắc nhưng có lối sống buông thả, không mục đích. Một ngày
                        nọ, tận mắt chiêm ngưỡng bức tranh của một chị lớp trên ở CLB Mỹ thuật, Yataro hoàn toàn bị hút
                        hồn và lần đầu tiên trong đời, cậu đã tìm ra thứ mình thật sự đam mê và đặt mọi tâm huyết vào
                        đó. Yataro quyết định tham gia vào CLB mỹ thuật và nuôi hy vọng thi vào trường ĐH mỹ thuật Tokyo
                        danh tiếng. Thế nhưng, cậu liên tục vấp phải sự phản đối từ cha mẹ và bạn bè. Đứng trước tình
                        thế khó xử này, Yataro đã quyết định tự mình thuyết phục mọi người bằng các bức vẽ đầy tâm
                        huyết.
                    </p>
                    <br />
                    <p>
                        Bộ truyện đã đạt giải Manga Taisho và giải thưởng Kodansha năm 2019. Năm 2020, bộ truyện tiếp
                        tục đạt hai giải Manga Taisho và Kodansha, đồng thời nhận giải thưởng danh giá Tezuka Osamu.
                    </p>
                </div>
                <div className={cx('Genre')}>
                    <p className={cx('GenreTitle')}>Thể loại:</p>
                    <p className={cx('GenreTag')}>Manga, Truyện tranh, Seinen, Mỹ Thuật, Đời thường, Giả tưởng</p>
                </div>
                <div className={cx('Info1')}>
                    <p>192 trang, Bìa mềm</p>
                    <p>Xuất bản lần đầu ngày 22 tháng 2 năm 2019</p>
                </div>
                <p>TỰA SÁCH CÙNG DANH MỤC</p>
                <hr></hr>
                <div className={cx('sameGenre')}>
                    <div className={cx('Product')}>
                        <img className={cx('imgProduct')} src={CSPACAT3} alt="P1" />
                        <img className={cx('imgProduct')} src={CSPACAT3} alt="P1" />
                        <img className={cx('imgProduct')} src={CSPACAT3} alt="P1" />
                        <img className={cx('imgProduct')} src={CSPACAT3} alt="P1" />
                        {/* <img className={cx('imgProduct')} src={CSPACAT3} alt="P1" /> */}
                    </div>
                </div>
                <div className={cx('Review')}>
                    <h1>Đánh giá</h1>
                </div>
                <hr />
                <h1>Đánh giá của cộng đồng</h1>
            </section>
        </div>
    );
}

export default BookShow;
