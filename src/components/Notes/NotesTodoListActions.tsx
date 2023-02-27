import { FC } from 'react';
import { Button } from 'paw-ui';
import { useNotes, useNotesModal } from './NotesContext';
import { NotesCreateModal } from './NotesCreateModal';
import styles from './NotesTodoListActions.module.scss';

export const NotesTodoListActions: FC = () => {
    const { isOpenModal, openModal, closeModal } = useNotesModal();
    const { prefillNotes, clearNotes } = useNotes();

    return (
        <div className={styles.actions}>
            <Button onClick={openModal}>Add Note</Button>
            <Button onClick={prefillNotes}>Prefill</Button>
            <Button onClick={clearNotes}>Clear</Button>
            <NotesCreateModal isOpen={isOpenModal} onClose={closeModal} />
        </div>
    );
};
