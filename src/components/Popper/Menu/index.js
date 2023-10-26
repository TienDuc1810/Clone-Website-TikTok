import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import ListItem from '~/components/ListItem';
import HeaderListItem from '~/components/ListItem/HeaderListItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);
    const page = history.length;
    const current = history[page - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <ListItem
                    key={index}
                    data={item}
                    listItemLanguage={history.length > 1 ? true : false}
                    to={item.to}
                    href={item.href}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };

    return (
        <div>
            <Tippy
                interactive
                delay={[0, 600]}
                render={(attrs) => (
                    <div className={cx(page > 1 ? 'header' : 'content', 'tippy-content')} tabIndex="-1" {...attrs}>
                        <PopperWrapper padding={history.length > 1 ? false : true}>
                            {history.length > 1 && (
                                <HeaderListItem
                                    title="Ngôn ngữ"
                                    onBack={() => {
                                        setHistory((prev) => prev.slice(0, prev.length - 1));
                                    }}
                                />
                            )}
                            {renderItems()}
                        </PopperWrapper>
                    </div>
                )}
                onHide={()=>{setHistory((prev) => prev.slice(0, 1))}}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
