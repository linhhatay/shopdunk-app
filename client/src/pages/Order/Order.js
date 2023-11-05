import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartPrice } from '~/store/actions/cartAction';
import * as httpRequest from '~/utils/httpRequest';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatCurrency } from '~/utils/helpers';

const cx = classNames.bind(styles);

function Order() {
    const totalCartPrice = useSelector(getTotalCartPrice);
    const cart = useSelector(getCart);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { state } = useLocation();

    const handlePayment = async (e) => {
        e.preventDefault();
        try {
            // Tạo một đối tượng yêu cầu thanh toán
            const paymentData = {
                amount: Math.round(totalCartPrice),
                bankCode: '',
                language: 'vn',
                ...state,
                paymentMethod: 'VNPay',
                products: [
                    ...cart.map((product) => {
                        return {
                            productItem: product._id,
                            color: product.color.name,
                            quantity: product.quantity,
                            unitPrice: product.color.price,
                        };
                    }),
                ],
            };

            // Gửi yêu cầu POST đến API tạo thanh toán
            const response = await httpRequest.post('/orders/create_payment_url', paymentData);
            dispatch(clearCart());
            // Xử lý phản hồi từ API, ví dụ: chuyển hướng đến URL thanh toán
            if (response && response.paymentUrl) {
                window.location.href = response.paymentUrl;
            }
        } catch (error) {
            console.error('Lỗi khi gửi yêu cầu thanh toán:', error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div>
                <div className={cx('inner')}>
                    <div className={cx('content')}>
                        <div className={cx('summary')}>
                            <div className={cx('title')}>
                                <h1>Chi tiết đơn hàng</h1>
                            </div>
                            <div className={cx('body')}>
                                <div className={cx('overview')}>
                                    <ul>
                                        <li className={cx('number')}>
                                            <label>Mã đơn hàng:</label>
                                            <span>#17968</span>
                                        </li>
                                        <li className={cx('date')}>
                                            <label>Ngày đặt hàng:</label>
                                            <span>01/11/2023</span>
                                        </li>
                                        <li className={cx('status')}>
                                            <label>Tình trạng:</label>
                                            <span>Đang xử lý</span>
                                        </li>
                                        <li>
                                            <label>Tên khách hàng:</label>
                                            <span>Huyền Nguyễn </span>
                                        </li>
                                        <li>
                                            <label>Số điện thoại:</label>
                                            <span>0484086382</span>
                                        </li>
                                        <li>
                                            <label>Email:</label>
                                            <span>huyennn@gmail.com</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className={cx('box')}>
                                    <div className={cx('box-inner')}>
                                        <div className={cx('payment-method')}>
                                            <ul>
                                                <li>
                                                    <span className={cx('label')}> Phương thức thanh toán: </span>{' '}
                                                    <span className={cx('value')}> Thanh toán VNPay </span>
                                                </li>
                                                <li>
                                                    <span className={cx('label')}> Tình trạng thanh toán: </span>
                                                    <span className={cx(['value', 'payment-method-status'])}>
                                                        Đang chờ xử lý
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx('products')}>
                                            <div className={cx('products-title')}>
                                                <span>Sản phẩm</span>
                                            </div>
                                            {cart.map((item) => (
                                                <div className={cx('products-item')} key={item._id}>
                                                    <div className={cx('item-box')}>
                                                        <a>{item.name} - ₫</a>
                                                        <div className={cx('attributes')}>
                                                            <p>
                                                                Khu vực: Khu vực miền Bắc
                                                                <br />
                                                                Hình thức: Mua thẳng
                                                                <br />
                                                                Màu sắc: {item.color.name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={cx('quantity')}>
                                                        <label>SL:</label>
                                                        <span>{item.quantity}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className={cx('total')}>
                                            <div>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td className={cx('cart-total-left')}>
                                                                <label>Tổng số tiền đã đặt hàng:</label>
                                                            </td>
                                                            <td className={cx('cart-total-right')}>
                                                                <span>
                                                                    <strong>{formatCurrency(totalCartPrice)}</strong>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('checkout')}>
                            <div className={cx('checkout-inner')}>
                                <div className={cx('details')}>
                                    <div>
                                        <a>Nhấp vào đây để biết chi tiết đơn hàng.</a>
                                    </div>
                                </div>
                                <div className={cx('buttons')}>
                                    <button onClick={() => navigate('/')}> Tiếp tục mua hàng </button>
                                    <button onClick={handlePayment}> Thanh toán </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
