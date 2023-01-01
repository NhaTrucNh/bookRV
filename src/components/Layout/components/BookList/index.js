import classNames from 'classnames/bind';
import styles from './BookList.module.scss';
const cx = classNames.bind(styles);

export default function BookList({ books }) {
    return (
        <div className={cx('book-publish')}>
            {books?.map((book, index) => (
                <a href={`/book/${book.id}`} key={index}>
                    <img
                        src={book.cover}
                        alt="cover"
                    />
                </a>
            ))}
        </div>
    );
}
