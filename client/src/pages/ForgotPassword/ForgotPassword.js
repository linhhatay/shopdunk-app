import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import Breadcrumb from '~/components/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { forgotPassword } from '~/store/actions/authAction';

const cx = classNames.bind(styles);

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(forgotPassword({ email }));
        setEmail('');
    };

    return (
        <div className={cx('wrapper')}>
            {auth.forgotPasswordData && (
                <div className={cx('bar-notification')}>
                    <div>
                        <p>Email với hướng dẫn đã được gửi cho bạn.</p>
                        <span></span>
                    </div>
                </div>
            )}
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
                        <form className={cx('form')} onSubmit={handleSubmit}>
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
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
