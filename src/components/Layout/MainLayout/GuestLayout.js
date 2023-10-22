import Header from '../DefaultLayout/Header';
import Sidebar from '../DefaultLayout/Sidebar';
import styles from './GuestLayout.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function GuestLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default GuestLayout;
