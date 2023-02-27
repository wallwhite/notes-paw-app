import { ChangeEvent, FC } from 'react';
import { Card, Checkbox, Text } from 'paw-ui';
import cx from 'clsx';
import styles from './NoteItem.module.scss';
import { Note } from '../../types';
import { NoteStatus, NOTE_TYPE_ICONS } from '../../constants';
import { useNotes } from './NotesContext';

interface NoteItemProps {
    note: Note;
}

export const NoteItem: FC<NoteItemProps> = ({ note: { id, title, type, description, status } }) => {
    const { setNoteCompletion } = useNotes();
    const isCompleted = status === NoteStatus.Completed;
    const noteIcon = NOTE_TYPE_ICONS?.[type];

    const cardClassNames = cx(styles.card, {
        [styles.completed]: isCompleted,
    });

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setNoteCompletion?.(id, event.target.checked);
    };

    return (
        <Card wide className={cardClassNames}>
            <div className={styles.info}>
                <div className={styles.titleWrapper}>
                    {noteIcon && <div className={styles.iconType}>{noteIcon}</div>}
                    <Text type="body" scale="l" weight="bold">
                        {title}
                    </Text>
                </div>
                <Text type="body" scale="s" className={styles.description}>
                    {description}
                </Text>
            </div>
            <Checkbox onChange={handleCheckboxChange} checked={isCompleted} />
        </Card>
    );
};
