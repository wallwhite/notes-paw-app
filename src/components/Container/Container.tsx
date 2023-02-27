import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import cx from 'clsx';
import styles from './Container.module.scss';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({ children, className, ...restProps }) => {
    const classNames = cx(styles.container, className);

    return (
        <div className={classNames} {...restProps}>
            {children}
        </div>
    );
};
