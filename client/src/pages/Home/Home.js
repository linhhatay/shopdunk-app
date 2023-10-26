import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import * as httpRequest from '~/utils/httpRequest';
import { calculateDiscountedPrice, formatCurrency } from '~/utils/helpers';

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
                                                products.map((product) => (
                                                    <div className={cx('item-box')} key={product._id}>
                                                        <div className={cx('product-item')}>
                                                            <div className={cx('product-tag')}>
                                                                <img
                                                                    src="https://shopdunk.com/images/uploaded/icon/new.png"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className={cx('picture')}>
                                                                <Link to={`/${product._id}`}>
                                                                    <img
                                                                        alt={product.name}
                                                                        src={`http://localhost:8000/img/products/${product.imageCover}`}
                                                                        title={product.name}
                                                                    />
                                                                </Link>
                                                            </div>
                                                            <div className={cx('details')}>
                                                                <h3>
                                                                    <Link to={`/${product._id}`}>{product.name}</Link>
                                                                </h3>
                                                                <div className={cx('add-info')}>
                                                                    <div className={cx('prices')}>
                                                                        <div className={cx('price-ratio-container')}>
                                                                            <span>{`-${product.discount}%`}</span>
                                                                        </div>
                                                                        <span className={cx('old-price')}>
                                                                            {formatCurrency(product.colors.at(0).price)}
                                                                        </span>
                                                                        <span className={cx('actual-price')}>
                                                                            {calculateDiscountedPrice(
                                                                                product.colors.at(0).price,
                                                                                product.discount,
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
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
