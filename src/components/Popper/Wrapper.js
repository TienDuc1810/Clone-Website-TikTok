import styles from './Popper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Wrapper({ children,padding = false }) {
    const classes = cx('wrapper',{
        padding
    });

    return <div className={classes}>
        { children }
    </div>;
}

export default Wrapper;