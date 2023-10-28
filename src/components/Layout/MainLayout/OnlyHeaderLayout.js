import Header from '../DefaultLayout/Header';
import styles from './UserLayout.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function OnlyHeaderLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default OnlyHeaderLayout;
