import classNames from 'classnames/bind';
import styles from './PageNotFound.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function PageNotFound() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src="https://shopdunk.com/images/uploaded-source/bn_404.png" alt="page-not-found" />
                <div className={cx('title')}>
                    <h1>Oops! Trang bạn tìm kiếm không tồn tại.</h1>
                </div>
                <div className={cx('content')}>
                    <div>
                        <p>
                            Website Shopdunk mới nâng cấp, do đó có một số link có thể được thay đổi.
                            <br />
                            Bạn vui lòng trở lại trang chủ, thử tìm kiếm với từ khóa khác hoặc tiếp tục mua sắm!
                        </p>
                    </div>
                </div>
                <Link to="/" className={cx('comeback')}>
                    Trở về trang chủ
                </Link>
            </div>
        </div>
    );
}

export default PageNotFound;
