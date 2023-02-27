import { FC } from 'react';
import { Heading } from 'paw-ui';
import styles from './NotesListEmptyState.module.scss';

const NotesListEmptyState: FC = () => (
    <div className={styles.empty}>
        <Heading variant="h3" visualVariant="h2">
            No notes were found
        </Heading>
    </div>
);

export default NotesListEmptyState;
