import styles from './ListItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ListItem({ to, href, data, onClick, ...passProps }) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    
    return (
        <Comp className={cx('list-item')} {...props}>
            {data.iconL && <span className={cx('iconL')}>{data.iconL}</span>}
                <span className={cx('title')}>{data.title}</span>
            {data.iconR && <button className={cx('iconR')}>{data.iconR}</button>}
        </Comp>
    );
}

export default ListItem;
