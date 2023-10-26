import { useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { logo, messenger, mailbox, avatar, laptop_mobile, menu } from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faKeyboard,
    faCircleXmark,
    faEarthAmericas,
    faPlus,
    // faToggleOn,
    faToggleOff,
    faLaptop,
} from '@fortawesome/free-solid-svg-icons';
import { faMoon, faCircleQuestion, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Download from '~/components/Popper/Download';

const cx = classNames.bind(styles);

const DOWNLOAD = [
    {
        icon: <FontAwesomeIcon icon={faLaptop} />,
        title: 'Ứng dụng TikTok cho máy tính',
        href: '/download',
        title_href: 'Tải về',
    },
];

const MENU_ITEMS = [
    {
        iconL: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'Trung tâm Nhà sáng tạo LIVE',
    },
    {
        iconL: <FontAwesomeIcon icon={faEarthAmericas} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        iconL: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        iconL: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        iconL: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ tối',
        // icon: <FontAwesomeIcon icon={faToggleOn} />,
        iconR: <FontAwesomeIcon icon={faToggleOff} />,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([1]);
    const User = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-info')}>
                <div className={cx('header-info-left')}>
                    <a href="/" className={cx('header-link')}>
                        <img src={logo.logo} alt="TikTok" />
                    </a>
                </div>

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper padding>
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
                        <span className={cx('test')}>Tải lên</span>
                    </Button>
                    {User ? (
                        <span></span>
                    ) : (
                        <Button primary to="/hello">
                            Đăng nhập
                        </Button>
                    )}
                    <Download items={DOWNLOAD}>
                        <span className={cx('outner-laptop-mobile')}>
                            <img src={laptop_mobile.laptop_mobile} alt="laptop_mobile" />
                        </span>
                    </Download>
                    {User ? (
                        <>
                            <div className={cx('outner-messenger')}>
                                <a href="/messenger" className={cx('header-link')}>
                                    <img src={messenger.messenger} alt="messenger" className={cx('messenger')} />
                                </a>
                            </div>
                            <div className={cx('outner-mailbox')}>
                                <a href="/mailbox" className={cx('header-link')}>
                                    <img src={mailbox.mailbox} alt="mailbox" className={cx('mailbox')} />
                                </a>
                            </div>
                            <div className={cx('outner-avatar')}>
                                <img src={avatar.avatar} alt="avatar" className={cx('avatar')} width={32} height={32} />
                            </div>
                        </>
                    ) : (
                        <Menu items={MENU_ITEMS}>
                            <div className={cx('outner-menu')}>
                                <img src={menu.menu} alt="menu" className={cx('menu')} />
                            </div>
                        </Menu>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
