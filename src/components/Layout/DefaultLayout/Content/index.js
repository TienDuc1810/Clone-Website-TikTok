import styles from './Content.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Content({ children }) {
    return (
        <div className={cx('wrapper')}>
                { children }
        </div>
    );
}

export default Content;
