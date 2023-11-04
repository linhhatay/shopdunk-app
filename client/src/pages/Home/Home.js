import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import * as httpRequest from '~/utils/httpRequest';
import Product from '~/components/Product';

const cx = classNames.bind(styles);

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const res = await httpRequest.get('/products');
            setProducts(res.data.data);
        }

        fetchProducts();
    }, []);

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
                                            {products.length > 0 &&
                                                products.map((product) => <Product data={product} key={product._id} />)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('show-all')}>
                            <Link to={`/categories/iPhone`}>
                                {` Xem tất cả iPhone `}
                                <FontAwesomeIcon icon={faChevronRight} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('banner-bottom')}>
                <div>
                    <div>
                        <p>
                            <a href="#">
                                <img
                                    src="https://shopdunk.com/images/uploaded/Trang%20ch%E1%BB%A7/2.jpeg"
                                    alt=""
                                    width={1200}
                                    height={401}
                                />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx('news-list')}>
                <h2 className={cx('news-title')}>
                    <strong>Tin Tức</strong>
                </h2>
                <div className={cx('news-items')}>
                    <div className={cx('news-item')}>
                        <div className={cx('news-picture')}>
                            <a href="#">
                                <img
                                    src="https://shopdunk.com/images/thumbs/0022649_apple-wwdc-2023-logo_1600.jpeg"
                                    alt="news"
                                />
                            </a>
                        </div>
                        <h3 className={cx('news-head')}>
                            <a href="#">
                                Tiêu điểm cuối năm 2023: Tổng hợp sản phẩm MacBook và iMac mới nhất của Apple
                            </a>
                        </h3>
                        <div className={cx('news-dates')}>
                            <span>31/10/2023</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('news-view-all')}>
                <a href="#">Xem tất cả Tin Tức</a>
            </div>
        </div>
    );
}

export default Home;
