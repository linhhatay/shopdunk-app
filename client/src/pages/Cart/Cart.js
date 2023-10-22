import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Breadcrumb from '~/components/Breadcrumb';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Breadcrumb className={cx('breadcrumb')} />
                <div className={cx('content')}>
                    <div>
                        <div className={cx('orders')}>
                            {/* <div className={cx('no-data')}>Giỏ hàng của bạn đang trống!</div> */}
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
                                                    <tr>
                                                        <td className={cx('sku')}>
                                                            <label className={cx('td-title')}>SKU:</label>
                                                            <span className={cx('sku-number')}></span>
                                                        </td>
                                                        <td className={cx('product-picture')}>
                                                            <a href="/iphone-15-pro">
                                                                <img
                                                                    alt="Ảnh của iPhone 15 Pro 128GB"
                                                                    src="https://shopdunk.com/images/thumbs/0020313_iphone-15-pro-128gb_80.webp"
                                                                />
                                                            </a>
                                                        </td>
                                                        <td className={cx('product')}>
                                                            <a href="/iphone-15-pro" className="product-name">
                                                                iPhone 15 Pro 128GB
                                                            </a>
                                                            <div className={cx('attributes')}>Màu sắc: Titan Xanh</div>
                                                            <div className={cx('edit-item')}>
                                                                <a href="https://shopdunk.com/iphone-15-pro?updatecartitemid=158622">
                                                                    Sửa
                                                                </a>
                                                            </div>
                                                        </td>
                                                        <td className={cx('unit-price')}>
                                                            {/* <label className={cx('td-title')}>Giá bán:</label> */}
                                                            <span className={cx('product-unit-price')}>
                                                                27.990.000₫
                                                            </span>
                                                        </td>
                                                        <td className={cx('quantity')}>
                                                            <div className={cx('quantity-input-container')}>
                                                                <svg
                                                                    id="cart-quantity-input-subtract158622"
                                                                    width="11"
                                                                    height="11"
                                                                    viewBox="0 0 11 11"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g clipPath="url(#clip0_10158_65576)">
                                                                        <path
                                                                            d="M-0.00390625 5.90234H11.0039C11.1133 5.90234 11.207 5.86328 11.2852 5.78516C11.3633 5.70182 11.4023 5.60547 11.4023 5.49609C11.4023 5.38672 11.3633 5.29297 11.2852 5.21484C11.207 5.13672 11.1133 5.09766 11.0039 5.09766H-0.00390625C-0.0768229 5.09766 -0.144531 5.11589 -0.207031 5.15234C-0.264323 5.1888 -0.311198 5.23828 -0.347656 5.30078C-0.384115 5.35807 -0.402344 5.42318 -0.402344 5.49609C-0.402344 5.57422 -0.384115 5.64453 -0.347656 5.70703C-0.311198 5.76432 -0.264323 5.8112 -0.207031 5.84766C-0.144531 5.88411 -0.0768229 5.90234 -0.00390625 5.90234Z"
                                                                            fill="#0066CC"
                                                                        ></path>
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_10158_65576">
                                                                            <rect
                                                                                width="11"
                                                                                height="11"
                                                                                fill="white"
                                                                            ></rect>
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                                <input type="text" value={1} />
                                                                <svg
                                                                    id="cart-quantity-input-add158622"
                                                                    width="12"
                                                                    height="13"
                                                                    viewBox="0 0 12 13"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g clipPath="url(#clip0_10158_65579)">
                                                                        <path
                                                                            d="M-0.304688 6.5C-0.304688 6.61458 -0.265625 6.71094 -0.1875 6.78906C-0.104167 6.86719 -0.0104167 6.90625 0.09375 6.90625H5.19531V12.0078C5.19531 12.1172 5.23438 12.2109 5.3125 12.2891C5.39583 12.3672 5.49219 12.4062 5.60156 12.4062C5.71094 12.4062 5.80469 12.3672 5.88281 12.2891C5.96094 12.2109 6 12.1172 6 12.0078V6.90625H11.1016C11.2109 6.90625 11.3047 6.86719 11.3828 6.78906C11.4609 6.71094 11.5 6.61458 11.5 6.5C11.5 6.39062 11.4609 6.29688 11.3828 6.21875C11.3047 6.14062 11.2109 6.10156 11.1016 6.10156H6V1C6 0.890625 5.96094 0.796875 5.88281 0.71875C5.80469 0.635417 5.71094 0.59375 5.60156 0.59375C5.49219 0.59375 5.39583 0.635417 5.3125 0.71875C5.23438 0.796875 5.19531 0.890625 5.19531 1V6.10156H0.09375C-0.0104167 6.10156 -0.104167 6.14062 -0.1875 6.21875C-0.265625 6.29688 -0.304688 6.39062 -0.304688 6.5Z"
                                                                            fill="#0066CC"
                                                                        ></path>
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_10158_65579">
                                                                            <rect
                                                                                width="12"
                                                                                height="12"
                                                                                fill="white"
                                                                                transform="translate(0 0.5)"
                                                                            ></rect>
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className={cx('subtotal')}>
                                                            <label className={cx('td-title')}>Toàn bộ:</label>
                                                            <span className={cx('product-subtotal')}>27.990.000₫</span>
                                                        </td>
                                                        <td className={cx('remove-from-cart')}>
                                                            {/* <input type="checkbox" /> */}
                                                            <button type="button"> </button>
                                                        </td>
                                                    </tr>
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
                                                        <label for="termsofservice">
                                                            <span class="rule-web">Tôi đã đọc và đồng ý với</span>
                                                            <a href="/" target="_blank">
                                                                điều khoản và điều kiện
                                                            </a>{' '}
                                                            <span class="rule-web">của website</span>
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
