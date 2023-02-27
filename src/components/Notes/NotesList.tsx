import { FC } from 'react';
import { Heading } from 'paw-ui';
import styles from './NotesList.module.scss';
import { NoteItem } from './NoteItem';
import { Note } from '../../types';
import NotesListEmptyState from './NotesListEmptyState';

interface NotesListProps {
    title?: string;
    actions?: React.ReactNode;
    notes: Array<Note>;
}

export const NotesList: FC<NotesListProps> = ({ title, actions, notes }) => (
    <div className={styles.wrapper}>
        <div className={styles.header}>
            <Heading variant="h3">{title}</Heading>
            {actions && <div className={styles.actions}>{actions}</div>}
        </div>
        <div className={styles.list}>
            {!notes.length && <NotesListEmptyState />}
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} />
            ))}
        </div>
    </div>
);
