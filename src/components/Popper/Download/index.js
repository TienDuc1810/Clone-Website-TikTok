import styles from './Download.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { Laptop } from '~/components/Icons';

const cx = classNames.bind(styles);

function Download({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => (
            <div key={index} className={cx('container')}>
                <Laptop/>
                <div className={cx('title')}>{item.title}</div>
                <a href={item.href} className={cx('title-href')}>
                    {item.title_href}
                </a>
            </div>
        ));
    };

    return (
        <div>
            <Tippy
                interactive
                delay={[0, 600]}
                render={(attrs) => (
                    <div className={cx('content', styles['tippy-content'])} tabIndex="-1" {...attrs}>
                        <PopperWrapper>{renderItems()}</PopperWrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Download;
