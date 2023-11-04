import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as httpRequest from '~/utils/httpRequest';
import { addItem } from '~/store/actions/cartAction';
import { useDispatch } from 'react-redux';
import config from '~/configs';
import PageNotFound from '../PageNotFound';
import { calculateDiscountedPrice, formatCurrency } from '~/utils/helpers';

const cx = classNames.bind(styles);

const nameToColor = {
    Đen: '#191d20',
    Hồng: '#efcfd2',
    Vàng: '#e9dfa7',
};

function Product() {
    const { id: productId } = useParams();
    const [product, setProduct] = useState({});
    const [selectedColor, setSelectedColor] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    useEffect(() => {
        async function fetchProduct() {
            const res = await httpRequest.get(`/products/${productId}`);
            setProduct(res.data.data);
        }
        fetchProduct();
    }, [productId]);

    function handleAddToCart(e) {
        e.preventDefault();
        const newItem = {
            ...product,
            quantity: 1,
            color: product.colors[selectedColor],
        };
        dispatch(addItem(newItem));
        navigate(config.routes.cart);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('breadcrumb')}>
                <ul>
                    <li>
                        <a href="/">
                            <span>Trang chủ</span>
                        </a>
                        <span className={cx('breadcrumb-delimiter')}>›</span>
                    </li>
                    <li>
                        <a href="/">
                            <span>{product.category}</span>
                        </a>
                        <span className={cx('breadcrumb-delimiter')}>›</span>
                    </li>
                    <li>
                        <strong>{product.name}</strong>
                    </li>
                </ul>
            </div>
            <div className={cx('content')}>
                <div className={cx('details')}>
                    <div>
                        <form className={cx('form')}>
                            <div>
                                <div className={cx('essential')}>
                                    <div className={cx('gallery')}>
                                        <div className={cx('gallery-inner')}>
                                            <div className={cx('picture')}>
                                                <a href="/">
                                                    <img
                                                        alt={product.name}
                                                        src={`http://localhost:8000/img/products/${product.imageCover}`}
                                                    />
                                                </a>
                                            </div>
                                            <div className={cx('slideshow')}>
                                                <div className={cx('draggable')}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('overview')}>
                                        <div className={cx('info')}>
                                            <div className={cx('name')}>
                                                <h1>{product.name}</h1>
                                            </div>
                                            <div className={cx('review')}>
                                                <div>
                                                    <div className={cx('rating')}>
                                                        <div></div>
                                                    </div>
                                                    <div className={cx('evaluate')}>
                                                        <a href="/">Đánh giá</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('prices')}>
                                            <div>
                                                <div className={cx('current-price')}>
                                                    <span>
                                                        {calculateDiscountedPrice(
                                                            product.colors?.at(selectedColor).price,
                                                            product.discount,
                                                        )}
                                                    </span>
                                                </div>
                                                <div className={cx('old-price')}>
                                                    <span>
                                                        {formatCurrency(product.colors?.at(selectedColor).price)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('attributes')}>
                                            <dl>
                                                <dt>
                                                    <label>Dung lượng</label>
                                                </dt>
                                                <dd>
                                                    <ul className={cx('storage')}>
                                                        <li>
                                                            <label className={cx('checked-attr')}>128GB</label>
                                                        </li>
                                                        <li>
                                                            <label>256GB</label>
                                                        </li>
                                                        <li>
                                                            <label>512GB</label>
                                                        </li>
                                                    </ul>
                                                </dd>
                                                <dt>
                                                    <label>Màu sắc</label>
                                                </dt>
                                                <dd>
                                                    <ul className={cx('color-square')}>
                                                        {product.colors?.map((color, index) => (
                                                            <li
                                                                className={cx(
                                                                    selectedColor === index ? 'selected-color' : '',
                                                                )}
                                                                key={color.name}
                                                                onClick={() => handleColorClick(index)}
                                                            >
                                                                <label>
                                                                    <span
                                                                        style={{ height: '35.6px' }}
                                                                        className={cx('attribute-square-container')}
                                                                    >
                                                                        <span
                                                                            style={{
                                                                                backgroundColor:
                                                                                    nameToColor[color.name],
                                                                            }}
                                                                        >{` `}</span>
                                                                    </span>
                                                                </label>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className={cx('short-des')}>
                                            <p className={cx('icon-gift')}>Ưu đãi</p>
                                            <div className={cx('short-description')}>
                                                <p>
                                                    <span>
                                                        <strong>I. Ưu đãi thanh toán </strong>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span style={{ color: '#000' }}>
                                                        <img
                                                            src="https://shopdunk.com/images/uploaded/t%C3%ADch%20tr%C3%B2n%20(1).jpg"
                                                            width={16}
                                                            height={17}
                                                            alt=""
                                                        />
                                                        {` Giảm tới `} <strong>500.000đ </strong>qua cổng thanh toán
                                                    </span>
                                                </p>
                                                <p>
                                                    <span style={{ color: '#000' }}>
                                                        <img
                                                            src="https://shopdunk.com/images/uploaded/t%C3%ADch%20tr%C3%B2n%20(1).jpg"
                                                            width={16}
                                                            height={17}
                                                            alt=""
                                                        />
                                                        {` Giảm tới `} <strong>2.000.000đ </strong>khi thanh toán qua
                                                        thẻ tín dụng
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>
                                                        <strong>II. Ưu đãi trả góp (29/9 - 31/12)</strong>
                                                    </span>
                                                </p>
                                                <div className={cx('btn-more')}>
                                                    <a href="/">Xem thêm ưu đãi khác</a>
                                                </div>
                                            </div>
                                        </div>
                                        <a className={cx('popup-store-availability')} href="/">
                                            Xem cửa hàng có sẵn sản phẩm
                                        </a>
                                        <div className={cx('actions')}>
                                            <div>
                                                <div className={cx('add-to-cart')}>
                                                    <div>
                                                        <button onClick={handleAddToCart}>Mua ngay</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('btns')}>
                                                <Link to={'/'}>Trả góp</Link>
                                                <Link to={'/'} className={cx('btn-old')}>
                                                    Thu cũ đổi mới
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
