import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { check_green } from '~/assets/images';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('outner-avatar')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/tiktok-obj/bde0d542ad0c559ff67015e13369e03c~c5_300x300.webp?x-expires=1698512400&x-signature=BlqiQvNCWOlfO5SD6CROXLRKAt4%3D"
                    alt="Avatar"
                />
            </span>
            <div className={cx('info')}>
                <h4 className={cx('top-name')}>
                    dangthuhaf
                    <span className={cx('outner-check-green')}>
                        <img src={check_green.check_green} alt="check_green" className={cx('check-green')} />
                    </span>
                </h4>
                <p className={cx('username')}>Đặng Thu Hà</p>
            </div>
        </div>
    );
}

export default AccountItem;
