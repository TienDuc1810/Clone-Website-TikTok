import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1ea8b20f1444d0d25ef9b0711f3b8324~c5_100x100.jpeg?x-expires=1698253200&x-signature=r49Z47vaSA%2FuObfH8tLKW%2Bznb3I%3D"
                alt="Avatar"
            />
            <div className={cx('info')}>
                <div className={cx('top-info')}>
                    <span className={cx('name')}>Naruto</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </div>
                <span className={cx('username')}>Đặng Thu Hà</span>
            </div>
        </div>
    );
}

export default AccountItem;
