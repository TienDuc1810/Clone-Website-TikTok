import styles from './ListItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ListItem({ to, href, data, onClick, listItemLanguage = false, ...passProps }) {
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

    const classes = cx('list-item', {
        listItemLanguage
    });
    
    return (
        <Comp className={classes} {...props}>
            {data.iconL && <span className={cx('iconL')}>{data.iconL}</span>}
                <span className={cx('title')}>{data.title}</span>
            {data.iconR && <span className={cx('iconR')}>{data.iconR}</span>}
        </Comp>
    );
}

export default ListItem;
