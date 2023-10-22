import classNames from 'classnames/bind';
import styles from './Breadcrumb.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Breadcrumb({ className }) {
    return (
        <div className={cx(['wrapper', className])}>
            <ul>
                <li>
                    <Link to="/">Trang chủ</Link>
                </li>
                <li>
                    <span>›</span>
                    <Link to="/">Đăng nhập</Link>
                </li>
            </ul>
        </div>
    );
}

export default Breadcrumb;
