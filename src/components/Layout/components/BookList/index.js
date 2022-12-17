import React from 'react';
import classNames from 'classnames/bind';
import styles from './BookList.module.scss';
const cx = classNames.bind(styles);

export default class BookList extends React.Component {
    render() {
        return (
            <div className={cx('book-publish')}>
                <a href="../bookshow">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1629043914i/58774893.jpg"
                        alt="bluep4"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1574943819i/43890641.jpg"
                        alt="Hamnet"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg"
                        alt="FStar"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1632915175i/58944475.jpg"
                        alt="flove"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1532714506i/40961427.jpg"
                        alt="1984"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg"
                        alt="Rye"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595373758i/53239311.jpg"
                        alt="HPE"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1664562463i/61432185.jpg"
                        alt="CSM12"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1367545443i/157993.jpg"
                        alt="HTB"
                    />
                </a>
                <a href="##">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646444605i/485894.jpg"
                        alt="Meta"
                    />
                </a>
            </div>
        );
    }
}
