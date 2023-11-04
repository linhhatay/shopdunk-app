import classNames from 'classnames/bind';
import styles from './Sell.module.scss';

const cx = classNames.bind(styles);

function Sell() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('title')}>
                    <strong>Gợi ý phụ kiện đi kèm</strong>
                </div>
                <div className={cx('slick')}>
                    <div className={cx('slick-item')}>
                        <div>
                            <div className={cx('slick-item-box')}>
                                <div className={cx('product-item')}>
                                    <div className={cx('product-picture')}>
                                        <a href="#">
                                            <img
                                                src="https://shopdunk.com/images/thumbs/0021788_op-lung-silicon-magsafe-cho-iphone-15-pro_240.jpeg"
                                                alt=" "
                                            />
                                        </a>
                                    </div>
                                    <div className={cx('product-details')}>
                                        <div className={cx('product-title')}>
                                            <a href="/op-lung-silicon-magsafe-cho-iphone-15-pro" tabIndex="0">
                                                Ốp Lưng Silicon MagSafe cho iPhone 15 Pro
                                            </a>
                                            <div className={cx('product-add-info')}>
                                                <div className={cx('product-prices')}>
                                                    <span className={cx('product-old-price')}>1.590.000₫</span>
                                                    <span className={cx('product-actual-price')}>1.490.000₫</span>
                                                </div>
                                                <div className={cx('buttons')}>
                                                    <button>Mua ngay</button>
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
        </div>
    );
}

export default Sell;
