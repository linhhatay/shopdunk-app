import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Breadcrumb from '~/components/Breadcrumb';
import { useSelector } from 'react-redux';
import { getCart } from '~/store/actions/cartAction';
import CartItem from './CartItem';

const cx = classNames.bind(styles);

function Cart() {
    const cart = useSelector(getCart);

    if (!cart.length) return <div className={cx('no-data')}>Giỏ hàng của bạn đang trống!</div>;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Breadcrumb className={cx('breadcrumb')} />
                <div className={cx('content')}>
                    <div>
                        <div className={cx('orders')}>
                            <form className={cx('form')}>
                                <div className={cx('info')}>
                                    <div className={cx('details')}>
                                        <div className={cx('table-wrapper')}>
                                            <table>
                                                <colgroup>
                                                    <col width={1} />
                                                    <col width={1} />
                                                    <col />
                                                    <col width={1} />
                                                    <col width={1} />
                                                    <col width={1} />
                                                    <col width={1} />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th className={cx('sku')}>SKU</th>
                                                        <th className={cx('product-picture')}>Hình ảnh</th>
                                                        <th className={cx('product')}>Tên sản phẩm</th>
                                                        <th className={cx('unit-price')}>Giá bán</th>
                                                        <th className={cx('quantity')}>Số lượng</th>
                                                        <th className={cx('subtotal')}>Toàn bộ</th>
                                                        <th className={cx('remove-from-cart')}></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cart.map((item) => (
                                                        <CartItem item={item} key={item._id} />
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div>
                                            <div className={cx('options')}>
                                                <button>Cập nhật giỏ hàng</button>
                                                <button>Tiếp tục mua sắm</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('checkout')}>
                                    <div className={cx('checkout-inner')}>
                                        <div className={cx('checkout-content')}>
                                            <div className={cx('collaterals')}>
                                                <div className={cx('deals')}>
                                                    <div className={cx('coupon-box')}>
                                                        <div className={cx('coupon-code')}>
                                                            <input type="text" placeholder="Mã giảm giá" />
                                                            <button>Áp dụng</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('totals')}>
                                                <div className={cx('totals-info')}>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <label>Tổng phụ:</label>
                                                                </td>
                                                                <td>
                                                                    <span>27.990.000₫</span>
                                                                </td>
                                                            </tr>
                                                            <tr className={cx('order-total')}>
                                                                <td>
                                                                    <label>Tổng cộng:</label>
                                                                </td>
                                                                <td>
                                                                    <span>27.990.000₫</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className={cx('terms-of-service')}>
                                                    <div>
                                                        <div className={cx('terms-of-service-input')}>
                                                            <input type="checkbox" />
                                                        </div>
                                                        <label htmlFor="termsofservice">
                                                            <span className="rule-web">Tôi đã đọc và đồng ý với</span>
                                                            <a href="/" target="_blank">
                                                                điều khoản và điều kiện
                                                            </a>{' '}
                                                            <span className="rule-web">của website</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className={cx('checkout-btn')}>
                                                    <button> Tiến hành đặt hàng </button>
                                                </div>
                                                <div className={cx('note-ck')}>
                                                    (*) Phí phụ thu sẽ được tính khi bạn tiến hành thanh toán.
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
        </div>
    );
}

export default Cart;
