import Header from '../components/Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { useState } from 'react';
import Search from '../components/Search';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [showSearchForm, setShowSearchForm] = useState(false);

    return (
        <div className={cx('wrapper')}>
            {showSearchForm && <Search />}
            <Header onSearchForm={setShowSearchForm} />
            {showSearchForm && <div className={cx('overlay')} onClick={() => setShowSearchForm((s) => !s)}></div>}
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
