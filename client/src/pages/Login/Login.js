import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '~/components/Breadcrumb';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '~/store/actions/authAction';
import config from '~/configs';

const cx = classNames.bind(styles);

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const success = await dispatch(login({ username: email, password }));

        if (success) {
            navigate('/');
        } else {
            setError(true);
        }
    }

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
                                {error && (
                                    <div className={cx('message-error')}>
                                        Thông tin đăng nhập không đúng. Vui lòng thử lại.
                                        <ul>
                                            <li>Đăng nhập không thành công</li>
                                        </ul>
                                    </div>
                                )}
                                <div className={cx('form-title')}>
                                    <h1>Đăng nhập</h1>
                                </div>
                                <div className={cx('form-fields')}>
                                    <div className={cx('form-group')}>
                                        <label>Tên đăng nhập:</label>
                                        <input
                                            className="username"
                                            autoFocus=""
                                            type="text"
                                            name="username"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label>Mật khẩu:</label>
                                        <input
                                            className="password"
                                            autoFocus=""
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className={cx(['form-group', 'reversed'])}>
                                        <input type="checkbox" name="Username" />
                                        <label>Nhớ mật khẩu</label>
                                        <span className={cx('forgot-password')}>
                                            <Link to={config.routes.forgotPassword}>Quên mật khẩu?</Link>
                                        </span>
                                    </div>
                                </div>
                                <div className={cx('btn')}>
                                    <button type="submit">Đăng nhập</button>
                                </div>
                                <div className={cx('btn-register')}>
                                    <label> Bạn chưa có tài khoản? </label>
                                    <button>Tạo tài khoản ngay</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
