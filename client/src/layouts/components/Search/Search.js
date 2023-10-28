import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { Link } from 'react-router-dom';
import { useDebounce } from '~/hooks';
import { useEffect, useRef, useState } from 'react';
import * as httpRequest from '~/utils/httpRequest';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounceValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        httpRequest
            .get(`/products/search`, {
                params: {
                    name: debounceValue,
                },
            })
            .then((res) => {
                setSearchResult(res.data.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounceValue]);

    return (
        <div className={cx('wrapper')}>
            <form>
                <input
                    type="search"
                    placeholder="Tìm kiếm"
                    value={searchValue}
                    ref={inputRef}
                    spellCheck={false}
                    autoFocus
                    onFocus={() => setShowResult(true)}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </form>
            {showResult && searchResult.length > 0 && (
                <ul className={cx('results')}>
                    {searchResult.map((result) => (
                        <li className={cx('item')}>
                            <Link to={`/${result._id}`}>
                                <img
                                    src={`http://localhost:8000/img/products/${result.imageCover}`}
                                    alt="item-result"
                                />
                                <span>{result.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Search;
