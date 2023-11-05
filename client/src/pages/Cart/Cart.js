import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Breadcrumb from '~/components/Breadcrumb';
import { useSelector } from 'react-redux';
import { getCart, getTotalCartPrice } from '~/store/actions/cartAction';
import CartItem from './CartItem';
import Sell from './Sell';
import Checkout from './Checkout';
import config from '~/configs';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '~/utils/helpers';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Cart() {
    const cart = useSelector(getCart);
    const totalCartPrice = useSelector(getTotalCartPrice);
    const navigate = useNavigate();
    const { register, formState, getValues, handleSubmit, reset } = useForm();
    const [checked, setChecked] = useState(false);

    if (!cart.length)
        return (
            <>
                <Breadcrumb className={cx('breadcrumb')} />
                <div className={cx('content')}>
                    <div className={cx('no-data')}>Giỏ hàng của bạn đang trống!</div>
                </div>
            </>
        );

    const handleToPayment = () => {
        const values = getValues();
        const checkInfo = Object.values(values).every((value) => value);
        if (!checkInfo) return alert('Vui lòng điền đầy đủ thông tin.');
        if (!checked) return alert('Vui lòng chấp nhận các điều khoản dịch vụ trước bước tiếp theo.');

        navigate(config.routes.orderDetails, {
            state: {
                ...values,
            },
        });
    };

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
                                                    {cart.map((item, index) => (
                                                        <CartItem item={item} key={index} />
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div>
                                            <div className={cx('options')}>
                                                <button>Cập nhật giỏ hàng</button>
                                                <button onClick={() => navigate('/')}>Tiếp tục mua sắm</button>
                                            </div>
                                        </div>
                                    </div>
                                    <Sell />
                                    <Checkout register={register} />
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
                                                                    <span>{formatCurrency(totalCartPrice)}</span>
                                                                </td>
                                                            </tr>
                                                            <tr className={cx('order-total')}>
                                                                <td>
                                                                    <label>Tổng cộng:</label>
                                                                </td>
                                                                <td>
                                                                    <span>{formatCurrency(totalCartPrice)}</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className={cx('terms-of-service')}>
                                                    <div>
                                                        <div className={cx('terms-of-service-input')}>
                                                            <input
                                                                type="checkbox"
                                                                value={checked}
                                                                onChange={() => setChecked((c) => !c)}
                                                            />
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
                                                    <button onClick={handleToPayment}> Tiến hành đặt hàng </button>
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
