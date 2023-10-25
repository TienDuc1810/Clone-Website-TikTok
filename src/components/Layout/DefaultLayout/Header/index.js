import { useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faKeyboard,
    faCircleXmark,
    faEarthAmericas,
    faPlus,
    faToggleOn,
    faToggleOff,
    faLaptop,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import {faMoon, faCircleQuestion, faLightbulb} from '@fortawesome/free-regular-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        iconL: <FontAwesomeIcon icon={faLightbulb} />,
        title: "Trung tâm Nhà sáng tạo LIVE"
    },
    {
        iconL: <FontAwesomeIcon icon={faEarthAmericas} />,
        title: "Tiếng Việt"
    },
    {
        iconL: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Phản hồi và trợ giúp",
        to:'/feedback'
    },
    {
        iconL: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Phím tắt trên bàn phím"
    },
    {
        iconL: <FontAwesomeIcon icon={faMoon} />,
        title: "Chế độ tối",
        // icon: <FontAwesomeIcon icon={faToggleOn} />,
        iconR: <FontAwesomeIcon icon={faToggleOff} />
    }
];

function Header() {
    const [searchResult, setSearchResult] = useState([1]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-info')}>
                <div className={cx('header-info-left')}>
                    <a href="/" className={cx('header-link')}>
                        <img src={images.logo} alt="TikTok" />
                    </a>
                </div>

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Tài khoản</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('header-search')}>
                        <input type="text" placeholder="Tìm kiếm" className={cx('header-input')} />
                        <button className={cx('btn-close')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* <button className={cx('btn-loading')}><FontAwesomeIcon icon={faSpinner} /></button> */}
                        <button className={cx('header-search-btn')}>
                            <FontAwesomeIcon className={cx('header-search-icon')} icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('header-info-right')}>
                    <Button upload LeftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Tải lên
                    </Button>
                    <Button primary to="/hello" >Đăng nhập</Button>
                    <span className={cx('outner-icon-lap')}>
                        <FontAwesomeIcon className={cx('icon-laptop')} icon={faLaptop} />
                    </span>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('outner-icon-menu')}>
                            <FontAwesomeIcon className={cx('icon-menu')} icon={faEllipsisVertical} />
                        </button>
                        {/* <Button outline>Follow</Button> */}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
