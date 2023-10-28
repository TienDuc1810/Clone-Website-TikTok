import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom'
import { CheckGreen } from '../Icons';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <span className={cx('outner-avatar')}>
                <img className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            </span>
            <div className={cx('info')}>
                <h4 className={cx('top-name')}>
                    {data.nickname}
                    {data.tick && (
                        <span className={cx('outner-check-green')}>
                            <CheckGreen />
                        </span>
                    )}
                </h4>
                <p className={cx('username')}>{data.full_name}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
