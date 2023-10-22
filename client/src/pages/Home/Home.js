import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div>
                <div className={cx('banner')}>
                    <div>
                        <div className={cx('banner-slick')}>
                            <button className={cx(['slick-btn', 'slick-prev'])}></button>
                            <div>
                                <a href="/">
                                    <img
                                        src="https://shopdunk.com/images/uploaded/banner/banner_thang10/banner%20iphone%2015%20pro%20max%20TH_PC%20(3).jpg"
                                        alt=""
                                        height={400}
                                        width={1200}
                                    />
                                </a>
                            </div>
                            <button className={cx(['slick-btn', 'slick-next'])}></button>
                            <ul className={cx('slick-dots')}>
                                {Array.from({ length: 9 }, (_, i) => (
                                    <li key={i}>
                                        <button></button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('advertisements')}>
                    <div className={cx('topic')}>
                        <div className={cx('topic-body')}>
                            <a href="/">
                                <img src="https://shopdunk.com/images/uploaded/BONUSt7.png" alt="topic" height={166} />
                            </a>
                            <a href="/">
                                <img
                                    src="https://shopdunk.com/images/uploaded/Bonus%20banner-26.png"
                                    alt="topic"
                                    height={166}
                                />
                            </a>
                            <a href="/">
                                <img
                                    src="https://shopdunk.com/images/uploaded/banner/bonus%20banner/387x166%201.png"
                                    alt="topic"
                                    height={166}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={cx('category-list')}>
                    <div className={cx('category-item')}>
                        <div className={cx('item-box-list')}>
                            <div>
                                <h2 className={cx('category-title')}>
                                    <Link to="/"> iPhone </Link>
                                </h2>
                                <div className={cx('products')}>
                                    <div className={cx('featured-product-grid')}>
                                        <div className={cx('item-grid')}>
                                            <div className={cx('item-box')}>
                                                <div className={cx('product-item')}>
                                                    <div className={cx('product-tag')}>
                                                        <img
                                                            src="https://shopdunk.com/images/uploaded/icon/new.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={cx('picture')}>
                                                        <Link to="/">
                                                            <img
                                                                alt="iPhone 15 128GB"
                                                                src="https://shopdunk.com/images/thumbs/0020320_iphone-15-128gb_240.webp"
                                                                title="iPhone 15 128GB"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className={cx('details')}>
                                                        <h3>
                                                            <Link to="/">iPhone 15 128GB</Link>
                                                        </h3>
                                                        <div className={cx('add-info')}>
                                                            <div className={cx('prices')}>
                                                                <div className={cx('price-ratio-container')}>
                                                                    <span>-14%</span>
                                                                </div>
                                                                <span className={cx('old-price')}>24,990,000₫</span>
                                                                <span className={cx('actual-price')}>21,490,000₫</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('show-all')}>
                            <Link to="/">
                                {` Xem tất cả iPhone `}
                                <FontAwesomeIcon icon={faChevronRight} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
