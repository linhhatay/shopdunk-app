import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <h1>
                            <img alt="logo" src="https://shopdunk.com/images/thumbs/0012445_Logo_ShopDunk.png" />
                        </h1>
                    </Link>
                </div>
                {/* <Search /> */}
                <Navigation />
                <div className={cx('actions')}>
                    <div className={cx('search-icon')}></div>
                    <div className={cx('cart-icon')}>
                        <Link to="/">
                            <span>0</span>
                        </Link>
                    </div>
                    <div className={cx('auth-icon')}>
                        <Link to="/">
                            <img src="https://shopdunk.com/images/uploaded-source/icon/login.png" alt="" />
                        </Link>
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
