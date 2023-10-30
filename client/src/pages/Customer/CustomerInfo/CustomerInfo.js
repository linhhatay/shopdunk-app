import classNames from 'classnames/bind';
import styles from './CustomerInfo.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CustomerInfo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('sidebar')}>
                    <div className={cx('sidebar-menu')}>
                        <div className={cx('listbox')}>
                            <ul>
                                <li className={cx('customer-info')}>
                                    <Link to="/">Thông tin tài khoản</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div>
                        <div className={cx('content-inner')}>
                            <form className={cx('form')}>
                                <div className={cx('fieldset')}>
                                    <label className={cx('note')}>
                                        {' '}
                                        Lưu ý: Mật khẩu phải có tối thiểu 8 ký tự bao gồm chữ, số và các ký tự đặc biệt
                                    </label>
                                    <div className={cx('form-fields')}>
                                        <div className={cx('inputs')}>
                                            <label>Mật khẩu cũ:</label>
                                            <input type="password" />
                                        </div>
                                        <div className={cx('inputs')}>
                                            <label>Mật khẩu mới:</label>
                                            <input type="password" />
                                        </div>
                                        <div className={cx('inputs')}>
                                            <label>Xác nhận mật khẩu:</label>
                                            <input type="password" />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('button')}>
                                    <button type="submit">Đổi mật khẩu</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerInfo;
