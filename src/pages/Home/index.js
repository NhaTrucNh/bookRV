import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { homeApi } from '~/api/api';
import BookList from '../../components/Layout/components/BookList';
import styles from './Home.module.scss';
// import bluep4 from '../../asset/images/bluep4.jpg';

const cx = classNames.bind(styles);

function Home() {
    const [books, setBooks] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        homeApi.getBooks().then((res) => {
            setBooks(res.data.result);
        });
        homeApi.getCategories().then((res) => {
            setTags(res.data.result);
        });
    }, []);

    return (
        <section className={cx('wrapper')}>
            <div className={cx('catalog')}>
                <p>Mới xuất bản</p>
                <hr color="#E8E8E8" />
            </div>
            <BookList books={books.newPublish} />
            <a href="##">
                <p className={cx('readmore')}>Xem thêm</p>
            </a>

            <div className={cx('catalog')}>
                <p>Nhiều lượt đánh giá</p>
                <hr width="100%" color="#E8E8E8" />
            </div>
            <BookList books={books.mostReview} />
            <a href="##">
                <p className={cx('readmore')}>Xem thêm</p>
            </a>

            <div className={cx('catalog')}>
                <p>Các thể loại sách</p>
                <hr width="100%" color="#E8E8E8" />
            </div>
            <div className={cx('genre')}>
                {tags?.map((tag, index) => (
                    <div key={index}>
                        <a href={`/genre/${tag.code}`}>{tag.name}</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Home;
