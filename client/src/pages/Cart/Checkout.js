import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';

const cx = classNames.bind(styles);

function Checkout({ register }) {
    return (
        <>
            <div className={cx('title')}>Thông tin thanh toán</div>
            <div className={cx('not-login')}>
                <p>
                    Đăng nhập ngay để nhận được “điểm thưởng” hấp dẫn khi mua hàng thành công các sản phẩm tại ShopDunk
                </p>
                <a href="/login">Đăng nhập ngay</a>
            </div>
            <div className={cx('content')}>
                <div className={cx('billing')}>
                    <div className={cx('data')}>
                        <div className={cx('billing-form')}>
                            <div className={cx('enter-address')}>
                                <div className={cx('edit-address')}>
                                    <div className={cx('inputs')}>
                                        <input
                                            type="text"
                                            placeholder="Tên"
                                            name="fullName"
                                            {...register('fullName', { required: 'Trường bắt buộc.' })}
                                        />
                                    </div>
                                    <div className={cx(['inputs', 'two-col', 'left'])}>
                                        <input
                                            type="text"
                                            placeholder="Số điện thoại"
                                            name="phoneNumber"
                                            {...register('phoneNumber', { required: 'Trường bắt buộc.' })}
                                        />
                                    </div>
                                    <div className={cx(['inputs', 'two-col', 'right'])}>
                                        <input
                                            type="text"
                                            placeholder="Email"
                                            name="email"
                                            {...register('email', { required: 'Trường bắt buộc.' })}
                                        />
                                    </div>
                                    <div className={cx('tt_receive_method')}>Hình thức nhận hàng</div>
                                    <div className={cx(['inputs', 'one-col', 'receive-method'])}>
                                        <input
                                            type="radio"
                                            id="receive-store"
                                            name="receive"
                                            value="0"
                                            defaultChecked={true}
                                        />
                                        <label htmlFor="receive_store">Nhận tại cửa hàng</label>
                                        <input
                                            type="radio"
                                            id={cx('receive-home')}
                                            name="receive"
                                            value="1"
                                            defaultChecked={true}
                                        />
                                        <label htmlFor="receive_home">Giao tận nơi</label>
                                    </div>
                                    <div className={cx(['inputs', 'two-col', 'left'])}>
                                        <label>Tỉnh, thành phố:</label>
                                        <select>
                                            <option>Chọn tỉnh, thành phố</option>
                                        </select>
                                    </div>
                                    <div className={cx(['inputs', 'two-col', 'right'])}>
                                        <label>Quận, huyện:</label>
                                        <select></select>
                                    </div>
                                    <div className={cx('all-receive-home')}>
                                        <div className={cx(['inputs', 'one-col'])}>
                                            <label>Địa chỉ cụ thể:</label>
                                            <input
                                                type="text"
                                                name="address"
                                                {...register('address', { required: 'Trường bắt buộc.' })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('bill-company')}>
                        <div className={cx('checkbox-bill-company')}>
                            <input type="checkbox" />
                            <label>Xuất hóa đơn công ty</label>
                        </div>
                    </div>
                </div>
                <div className={cx('payment')}>
                    <div>
                        <div>
                            <div className={cx('tt-address-select')}>Thông tin thanh toán</div>
                            <div className={cx('notice-payment')}>
                                Quý khách vui lòng lựa chọn các hình thức thanh toán dưới đây:
                            </div>
                            <ul className={cx('method-list')}>
                                <li>
                                    <div className={cx('method-name')}>
                                        <div className={cx('payment-details')}>
                                            <div className={cx('payment-radio')}>
                                                <input type="radio" defaultChecked={true} />
                                            </div>
                                            <div className={cx('payment-logo')}>
                                                <label>
                                                    <img
                                                        src="https://shopdunk.com/Plugins/Payments.Kredivo/logo.jpg"
                                                        alt=""
                                                        width={36}
                                                        height={36}
                                                    />
                                                </label>
                                            </div>
                                            <div className={cx('payment-title')}>
                                                <label>Thanh toán Kredivo</label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default Checkout;
