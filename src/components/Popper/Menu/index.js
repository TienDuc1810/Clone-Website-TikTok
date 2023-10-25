import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import ListItem from '~/components/ListItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => (
            <ListItem key={index} data={item} to={item.to}/>
        ));
    };

    return (
        <div>
            <Tippy
                interactive
                visible
                
                render={(attrs) => (
                    <div className={cx('content', styles['tippy-content'])} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {renderItems()}
                        </PopperWrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
