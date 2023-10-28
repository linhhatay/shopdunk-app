import Header from '../components/Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { useState } from 'react';
import Search from '../components/Search';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [showSearchForm, setShowSearchForm] = useState(false);

    return (
        <div className={cx('wrapper')}>
            {showSearchForm && <Search />}
            <Header onSearchForm={setShowSearchForm} />
            {showSearchForm && <div className={cx('overlay')} onClick={() => setShowSearchForm((s) => !s)}></div>}
            <div className={cx('container')}>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
