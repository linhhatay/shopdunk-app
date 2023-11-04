import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';
import { calculateDiscountedPrice, formatCurrency } from '~/utils/helpers';

const cx = classNames.bind(styles);

function Product({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('tag')}>
                    <img src="https://shopdunk.com/images/uploaded/icon/new.png" alt="new" />
                </div>
                <div className={cx('picture')}>
                    <Link to={`/${data._id}`}>
                        <img
                            alt={data.name}
                            src={`http://localhost:8000/img/products/${data.imageCover}`}
                            title={data.name}
                        />
                    </Link>
                </div>
                <div className={cx('details')}>
                    <h3>
                        <Link to={`/${data._id}`}>{data.name}</Link>
                    </h3>
                    <div className={cx('add-info')}>
                        <div className={cx('prices')}>
                            <div className={cx('price-ratio-container')}>
                                <span>{`-${data.discount}%`}</span>
                            </div>
                            <span className={cx('old-price')}>{formatCurrency(data.colors.at(0).price)}</span>
                            <span className={cx('actual-price')}>
                                {calculateDiscountedPrice(data.colors.at(0).price, data.discount)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
