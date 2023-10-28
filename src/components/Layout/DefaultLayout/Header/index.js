import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { logo, avatar } from '~/assets/icon';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faKeyboard,
    faEarthAmericas,
    faPlus,
    // faToggleOn,
    faToggleOff,
    faLaptop,
} from '@fortawesome/free-solid-svg-icons';
import { faMoon, faCircleQuestion, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Download from '~/components/Popper/Download';
import { LaptopMobile, MailBox, MenuHeader, Messenger } from '~/components/Icons';
import Search from '~/components/Search';

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

const USER_MENU = [
    {
        iconL: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Xem hồ sơ',
        to: '/',
    },
    {
        iconL: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Yêu thích',
        to: '/',
    },
    {
        iconL: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Nhận xu',
        to: '/',
    },
    ...MENU_ITEMS.slice(0, 1),
    {
        iconL: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Cài đặt',
        to: '/',
    },
    ...MENU_ITEMS.slice(1, 5),
    {
        iconL: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Đăng xuất',
        to: '/feedback',
    },
];

function Header() {
    const User = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-info')}>
                <div className={cx('header-info-left')}>
                    <a href="/" className={cx('header-link')}>
                        <img src={logo.logo} alt="TikTok" />
                    </a>
                </div>
                <Search/>
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
                            <LaptopMobile/>
                        </span>
                    </Download>
                    {User ? (
                        <>
                            <Tippy delay={[0, 100]} content="Tin nhắn" placement="bottom">
                                <div className={cx('outner-messenger')}>
                                    <a href="/" className={cx('header-link')}>
                                        <Messenger className={cx('mess')}/>
                                    </a>
                                </div>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Hộp thư" placement="bottom">
                                <div className={cx('outner-mailbox')} data-count="2" >
                                    <a href="/mailbox" className={cx('header-link')}>
                                        <MailBox />
                                    </a>
                                </div>
                            </Tippy>
                        </>
                    ) : (
                        <span></span>
                    )}

                    <Menu items={User ? USER_MENU : MENU_ITEMS}>
                        {User ? (
                            <div className={cx('outner-avatar')}>
                                <img src={avatar.avatar} alt="avatar" className={cx('avatar')} width={32} height={32} />
                            </div>
                        ) : (
                            <div className={cx('outner-menu')}>
                                <MenuHeader/>
                            </div>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
