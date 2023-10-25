import Header from '../DefaultLayout/Header';
import Sidebar from '../DefaultLayout/Sidebar';
import Content from '../DefaultLayout/Content';
import styles from './GuestLayout.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function GuestLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    <Content children={children}/>
                </div>
            </div>
        </div>
    );
}

export default GuestLayout;
