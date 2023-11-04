import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import Breadcrumb from '~/components/Breadcrumb';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as httpRequest from '~/utils/httpRequest';
import Product from '~/components/Product';

const cx = classNames.bind(styles);

const options = [
    { value: 'regularPrice-desc', label: 'Giá cao đến thấp' },
    { value: 'createdAt-asc', label: 'Mới nhất' },
    { value: 'name-asc', label: 'Tên: A đến Z' },
    { value: 'name-desc', label: 'Tên: Z đến A' },
    { value: 'regularPrice-asc', label: 'Giá thấp đến cao' },
];

function Category() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState();
    const [searchParams, setSearchParams] = useSearchParams();

    const sortByRaw = searchParams.get('sortBy') || 'createdAt-asc';

    const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

    useEffect(() => {
        const pagination = { page, limit: 3 };
        const [field, direction] = sortByRaw.split('-');
        const sortBy = { field, direction };

        async function fetchProducts() {
            const res = await httpRequest.get(
                `/products?category=${category}&page=${pagination.page}&limit=${pagination.limit}&sort=${
                    sortBy.direction === 'asc' ? '' : '-'
                }${sortBy.field}`,
            );
            setCount(res.count);
            setProducts(res.data.data);
        }

        fetchProducts();
    }, [category, page, sortByRaw]);

    function handleChange(e) {
        searchParams.set('sortBy', e.target.value);
        setSearchParams(searchParams);
    }

    const currentPage = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

    const pageCount = Math.ceil(count / 3);

    function nextPage(e) {
        e.preventDefault();
        const next = currentPage === pageCount ? currentPage : currentPage + 1;

        searchParams.set('page', next);
        setSearchParams(searchParams);
    }

    function prevPage(e) {
        e.preventDefault();

        const prev = currentPage === 1 ? currentPage : currentPage - 1;

        searchParams.set('page', prev);
        setSearchParams(searchParams);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Breadcrumb />
                <div className={cx('content')}>
                    <div>
                        <div className={cx('content-inner')}>
                            <div className={cx('card')}>
                                <div className={cx('title')}>
                                    <h1>{category}</h1>
                                </div>
                                <div>
                                    <div className={cx('banner')}>
                                        <div className={cx('banner-inner')}>
                                            <a href="/">
                                                <img
                                                    src="https://shopdunk.com/images/uploaded/banner/banner_thang10/banner%20ipad%20gen%209%20T10_Danh%20m%E1%BB%A5c%20(1).jpg"
                                                    alt="banner"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={cx('list')}>
                                        <div className={cx('list-grid')}>
                                            <div className={cx(['item-box', 'active'])}>
                                                <div className={cx('item-title')}>
                                                    <a href="/"> Tất cả </a>
                                                </div>
                                            </div>
                                            <div className={cx('item-box')}>
                                                <div className={cx('item-title')}>
                                                    <a href="/"> iPad Pro M1 </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('selectors')}>
                                            <div className={cx('sorting')}>
                                                <span>Sắp xếp theo</span>
                                                <select name="products-orderby" onChange={handleChange}>
                                                    <option defaultValue>Thứ tự hiển thị</option>
                                                    {options.map((option) => (
                                                        <option value={option.value} key={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('products')}>
                                        <div>
                                            <div className={cx('product-grid')}>
                                                {products.map((item) => (
                                                    <Product data={item} key={item._id} />
                                                ))}
                                            </div>
                                            <div className={cx('pager')}>
                                                <ul>
                                                    <li className={cx('previous-page')}>
                                                        <Link to="/" onClick={prevPage}>
                                                            Kế tiếp
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <span>1</span>
                                                    </li>
                                                    <li>
                                                        <span>2</span>
                                                    </li>
                                                    <li className={cx('next-page')}>
                                                        <Link to="/" onClick={nextPage}>
                                                            Kế tiếp
                                                        </Link>
                                                    </li>
                                                </ul>
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
    );
}

export default Category;
