import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <>
            <div className={cx('newletter')}>
                <div className={cx('newletter-heading')}>Đăng ký nhận tin từ ShopDunk</div>
                <p>Thông tin sản phẩm mới nhất và chương trình khuyến mãi</p>
                <div className={cx('newletter-inner')}>
                    <div className={cx('newletter-subcribe')}>
                        <div className={cx('newletter-email')}>
                            <input type="email" placeholder="Email của bạn" />
                            <button>Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('main')}>
                <div className={cx('main-top')}>
                    <div className={cx(['main-box', 'follow-us'])}>
                        <div className={cx('logo')}>
                            <Link to="/">
                                <img src="https://shopdunk.com/images/thumbs/0012445_Logo_ShopDunk.png" alt="logo" />
                            </Link>
                        </div>
                        <div className={cx('text')}>
                            <div>
                                <p>
                                    Năm 2020, ShopDunk trở thành đại lý ủy quyền của Apple. Chúng tôi phát triển chuỗi
                                    cửa hàng tiêu chuẩn và Apple Mono Store nhằm mang đến trải nghiệm tốt nhất về sản
                                    phẩm và dịch vụ của Apple cho người dùng Việt Nam.
                                </p>
                            </div>
                        </div>
                        <div className={cx('social')}>
                            <ul>
                                <li>
                                    <a href="#">
                                        <img
                                            src="https://shopdunk.com/Themes/SD/Content/images/Face.png"
                                            alt="facebook"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src="https://shopdunk.com/Themes/SD/Content/images/Face.png"
                                            alt="facebook"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src="https://shopdunk.com/Themes/SD/Content/images/Face.png"
                                            alt="facebook"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx(['main-box', 'information'])}>
                        <div className={cx('title')}>
                            <strong>Thông tin</strong>
                        </div>
                        <ul className={cx('list')}>
                            <li>
                                <a href="#">Tin Tức</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx(['main-box', 'customer-service'])}>
                        <div className={cx('title')}>
                            <strong>Chính sách</strong>
                        </div>
                        <ul className={cx('list')}>
                            <li>
                                <a href="#">Thu cũ đổi mới</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx(['main-box', 'my-account'])}>
                        <div className={cx('title')}>
                            <strong>Địa chỉ & Liên hệ</strong>
                        </div>
                        <ul className={cx('list')}>
                            <li>
                                <a href="#">Tài khoản của tôi</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('main-bottom')}>
                    <div>
                        <span>
                            © 2016 Công ty Cổ Phần HESMAN Việt Nam GPDKKD: 0107465657 do Sở KH &amp; ĐT TP. Hà Nội cấp
                            ngày 08/06/2016.
                            <br /> Địa chỉ: Số 76 Thái Hà, phường Trung Liệt, quận Đống Đa, thành phố Hà Nội, Việt Nam
                            <br />
                            Đại diện pháp luật: PHẠM MẠNH HÒA | ĐT: 0247.305.9999 | Email: lienhe@shopdunk.com
                        </span>
                        <a>
                            <img
                                src="https://shopdunk.com/images/uploaded-source/Trang%20ch%E1%BB%A7/Bocongthuong.png"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
