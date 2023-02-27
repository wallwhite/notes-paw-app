import { FC } from 'react';
import { LogoIcon } from 'paw-ui';
import styles from './Header.module.scss';

export const Header: FC = () => (
    <div className={styles.header}>
        <a href="/">
            <LogoIcon />
        </a>
    </div>
);
