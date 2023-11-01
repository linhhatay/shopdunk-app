import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import Breadcrumb from '~/components/Breadcrumb';

const cx = classNames.bind(styles);

function ForgotPassword() {
    return (
        <div className={cx('wrapper')}>
            <Breadcrumb />
            <div className={cx('content')}>
                <div>
                    <div className={cx('content-inner')}>
                        <div className={cx('banner')}>
                            <div>
                                <p>
                                    <img
                                        src="https://shopdunk.com/images/uploaded/banner/TND_M402_02%201.jpeg"
                                        width={793}
                                        height={484}
                                        alt="forgot-password-banner"
                                    />
                                </p>
                            </div>
                        </div>
                        <form className={cx('form')}>
                            <div className={cx('form-title')}>
                                <h1>Khôi phục mật khẩu</h1>
                            </div>
                            <label>
                                {' '}
                                Vui lòng nhập email bạn đã đăng ký với <b>ShopDunk</b>
                            </label>
                            <div className={cx('fieldset')}>
                                <div className={cx('form-fields')}>
                                    <div className={cx('form-group')}>
                                        <label>Email:</label>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('btn')}>
                                <button type="submit">Khôi phục</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
