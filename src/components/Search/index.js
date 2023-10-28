import { useState, useRef, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { faMagnifyingGlass, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '../Hooks';
import axios from 'axios'
import styles from './Search.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const InputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        InputRef.current.focus();
        setSearchResult([]);
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleShowResult = () => {
        setShowResult(true);
    };

    const Debounce = useDebounce(searchValue, 500)

    useEffect(() => {
        if (!Debounce.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        axios.get(`https://tiktok.fullstack.edu.vn/api/users/search`,{
            params:{
                q: Debounce,
                type: 'less'
            },
        })
            .then((res) => {
                setSearchResult(res.data.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [Debounce]);
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper padding>
                        <h4 className={cx('search-title')}>Tài khoản</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('header-search')}>
                <input
                    onFocus={handleShowResult}
                    ref={InputRef}
                    value={searchValue}
                    spellCheck={false}
                    type="text"
                    placeholder="Tìm kiếm"
                    className={cx('header-input')}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                {searchValue && !loading && (
                    <button className={cx('btn-close')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && (
                    <button className={cx('btn-loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}
                <button className={cx('header-search-btn')}>
                    <FontAwesomeIcon className={cx('header-search-icon')} icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
