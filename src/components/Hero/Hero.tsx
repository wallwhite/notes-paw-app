import { FC } from 'react';
import { Heading, Text } from 'paw-ui';
import styles from './Hero.module.scss';

export const Hero: FC = () => (
    <div className={styles.hero}>
        <Heading>Notes Paw</Heading>
        <Text type="body" scale="l" className={styles.description}>
            The Perfect Companion for Pet Owners Looking to Stay Organized
        </Text>
    </div>
);
