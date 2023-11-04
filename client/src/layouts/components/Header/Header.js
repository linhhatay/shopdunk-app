import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalCartQuantity } from '~/store/actions/cartAction';
import config from '~/configs';
import { logout } from '~/store/actions/authAction';

const cx = classNames.bind(styles);

function Header({ onSearchForm }) {
    const totalCartQuantity = useSelector(getTotalCartQuantity);
    const auth = useSelector((store) => store.auth);
    const { isAuthenticated } = auth;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();
        const res = await dispatch(logout());
        if (res) navigate('/');
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')} onClick={scrollToTop}>
                    <Link to="/">
                        <h1>
                            <img alt="logo" src="https://shopdunk.com/images/thumbs/0012445_Logo_ShopDunk.png" />
                        </h1>
                    </Link>
                </div>
                {/* <Search /> */}
                <Navigation />
                <div className={cx('actions')}>
                    <div className={cx('search-icon')} onClick={() => onSearchForm((c) => !c)}></div>
                    <div className={cx('cart-icon')}>
                        <Link to={config.routes.cart}>
                            <span>{totalCartQuantity}</span>
                        </Link>
                    </div>
                    <div className={cx('auth-icon')}>
                        <Link to={config.routes.login}>
                            <img src="https://shopdunk.com/images/uploaded-source/icon/login.png" alt="" />
                        </Link>
                    </div>
                    <div className={cx('account-desktop')}>
                        <div>
                            <ul>
                                {!isAuthenticated ? (
                                    <>
                                        <li className={cx('register')}>
                                            <Link to="/register">Tạo tài khoản ngay</Link>
                                        </li>
                                        <li className={cx('login')}>
                                            <Link to="/login">Đăng nhập</Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className={cx('register')}>
                                            <Link to={config.routes.customerInfo}>Tài khoản của tôi</Link>
                                        </li>
                                        <li className={cx('login')}>
                                            <Link to="/" onClick={handleLogout}>
                                                Đăng xuất
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className={cx('languages')}>
                        <div className={cx('languages-list')}>
                            <div>
                                <Link to="/">
                                    <img src="https://shopdunk.com/images/flags/vn.png" alt="" />
                                </Link>
                            </div>
                            <div>
                                <Link to="/">
                                    <img src="https://shopdunk.com/images/flags/us.png" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
