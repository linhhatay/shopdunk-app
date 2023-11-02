import classNames from 'classnames/bind';
import styles from './ResetPassword.module.scss';
import { useLocation } from 'react-router-dom';
import Breadcrumb from '~/components/Breadcrumb';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetPassword } from '~/store/actions/authAction';

const cx = classNames.bind(styles);

function ResetPassword() {
    const location = useLocation();
    const resetToken = location.search.split('=')[1];

    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(resetPassword({ password, passwordConfirm, resetToken }));
    };

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
                                        src="https://shopdunk.com/images/uploaded/banner/VNU_M492_08%201.jpeg"
                                        alt="login-banner"
                                    />
                                </p>
                            </div>
                        </div>
                        <div className={cx('fieldset')}>
                            <form className={cx('form')} onSubmit={handleSubmit}>
                                <div className={cx('form-fields')}>
                                    <div className={cx('form-group')}>
                                        <label>Mật khẩu:</label>
                                        <input
                                            className="username"
                                            autoFocus=""
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label>Nhập lại mật khẩu:</label>
                                        <input
                                            className="password"
                                            autoFocus=""
                                            type="password"
                                            name="passwordConfirm"
                                            value={passwordConfirm}
                                            onChange={(e) => setPasswordConfirm(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className={cx('btn')}>
                                    <button type="submit">Lưu</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
