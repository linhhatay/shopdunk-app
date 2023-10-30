import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Navigation() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    <Link to={`/categories/iPhone`}>iPhone</Link>
                </li>
                <li className={cx('item')}>
                    <Link to={`/categories/iPad`}>iPad</Link>
                </li>
                <li className={cx('item')}>
                    <Link to={`/`}>Mac</Link>
                </li>
                <li className={cx('item')}>
                    <Link to={`/`}>Watch</Link>
                </li>
                <li className={cx('item')}>
                    <Link to={`/`}>Âm thanh</Link>
                </li>
                <li className={cx('item')}>
                    <Link to={`/`}>Phụ kiện</Link>
                </li>
                <li className={cx('item')}>
                    <Link to={`/`}>
                        Dịch vụ{' '}
                        <svg width="12" height="4" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.2253 1.00096C16.4386 1.00096 16.6239 1.06736 16.7811 1.20017C16.927 1.33297 17 1.50154 17 1.70585C17 1.89996 16.9214 2.06852 16.7642 2.21154L9.97684 8.60158C9.70737 8.86719 9.38737 9 9.01684 9C8.63509 9 8.30386 8.86719 8.02316 8.60158L1.23579 2.21154C1.0786 2.0583 1 1.88974 1 1.70586C1 1.52197 1.07298 1.35851 1.21895 1.21549C1.36491 1.07247 1.55018 1.00096 1.77474 1.00096C1.98807 0.990742 2.16772 1.06225 2.31368 1.21549L9 7.51359L15.6863 1.21549C15.8323 1.07247 16.0119 1.00096 16.2253 1.00096Z"
                                fill="white"
                                stroke="white"
                            ></path>
                        </svg>
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link to={`/`}>
                        Tin Tức{' '}
                        <svg width="12" height="4" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.2253 1.00096C16.4386 1.00096 16.6239 1.06736 16.7811 1.20017C16.927 1.33297 17 1.50154 17 1.70585C17 1.89996 16.9214 2.06852 16.7642 2.21154L9.97684 8.60158C9.70737 8.86719 9.38737 9 9.01684 9C8.63509 9 8.30386 8.86719 8.02316 8.60158L1.23579 2.21154C1.0786 2.0583 1 1.88974 1 1.70586C1 1.52197 1.07298 1.35851 1.21895 1.21549C1.36491 1.07247 1.55018 1.00096 1.77474 1.00096C1.98807 0.990742 2.16772 1.06225 2.31368 1.21549L9 7.51359L15.6863 1.21549C15.8323 1.07247 16.0119 1.00096 16.2253 1.00096Z"
                                fill="white"
                                stroke="white"
                            ></path>
                        </svg>
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link to={`/`}>
                        <span>Khuyến mại</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
