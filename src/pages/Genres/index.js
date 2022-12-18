import React from 'react';
import classNames from 'classnames/bind';
import styles from './Genres.module.scss';

const cx = classNames.bind(styles);

export default class Genres extends React.Component {
    render() {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('GenreBar')}>
                        <p className={cx('title')}>Thể loại</p>
                        <hr />
                        <ul className={cx('list')}>
                            <li>
                                <a href="##">Tiểu thuyết</a>
                            </li>
                            <li>
                                <a href="##">Truyện ngắn</a>
                            </li>
                            <li>
                                <a href="##">Ngôn tình</a>
                            </li>
                            <li>
                                <a href="##">Light novel</a>
                            </li>
                            <li>
                                <a href="##">Thơ</a>
                            </li>
                            <li>
                                <a href="##">Tiểu sử</a>
                            </li>
                            <li>
                                <a href="##">Tiểu thuyết</a>
                            </li>
                            <li>
                                <a href="##">Truyện ngắn</a>
                            </li>
                            <li>
                                <a href="##">Ngôn tình</a>
                            </li>
                            <li>
                                <a href="##">Light novel</a>
                            </li>
                            <li>
                                <a href="##">Thơ</a>
                            </li>
                            <li>
                                <a href="##">Tiểu sử</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('GenreBook')}>
                        <p className={cx('title')}>
                            <a href="genre">Manga</a>
                        </p>
                        <div className={cx('lBook')}>
                            <a href="##">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1366576585i/17835727.jpg"
                                    alt=""
                                />
                            </a>
                            <a href="##">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1366576585i/17835727.jpg"
                                    alt=""
                                />
                            </a>
                            <a href="##">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1366576585i/17835727.jpg"
                                    alt=""
                                />
                            </a>
                            <a href="##">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1366576585i/17835727.jpg"
                                    alt=""
                                />
                            </a>
                            <a href="##">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1366576585i/17835727.jpg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className={cx('more')}>
                            <a href="genre">Xem thêm</a>
                        </div>
                        <hr />

                        <p className={cx('title')}>
                            <a href="genre">Manga</a>
                        </p>
                        <div className={cx('lBook')}>
                            <a href="##">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1366576585i/17835727.jpg"
                                    alt=""
                                />
                            </a>
                            <a href="##">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1366576585i/17835727.jpg"
                                    alt=""
                                />
                            </a>
                            <a href="##">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1366576585i/17835727.jpg"
                                    alt=""
                                />
                            </a>
                            <a href="##">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1366576585i/17835727.jpg"
                                    alt=""
                                />
                            </a>
                            <a href="##">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1366576585i/17835727.jpg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className={cx('more')}>
                            <a href="genre">Xem thêm</a>
                        </div>
                        <hr />

                        <p className={cx('title')}>
                            <a href="genre">Manga</a>
                        </p>
                        <div className={cx('lBook')}>
                            <a href="##">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1366576585i/17835727.jpg"
                                    alt=""
                                />
                            </a>
                            <a href="##">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1366576585i/17835727.jpg"
                                    alt=""
                                />
                            </a>
                            <a href="##">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1366576585i/17835727.jpg"
                                    alt=""
                                />
                            </a>
                            <a href="##">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1366576585i/17835727.jpg"
                                    alt=""
                                />
                            </a>
                            <a href="##">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1366576585i/17835727.jpg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className={cx('more')}>
                            <a href="genre">Xem thêm</a>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}
