import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Button, Heading, Input, Modal, ModalActions, ModalBody, Select, Text, TextArea } from 'paw-ui';
import { CreateNoteFormFields, NoteType } from '../../constants';
import styles from './NotesCreateModal.module.scss';
import { getFormValues } from '../../utils';
import { useNotes } from './NotesContext';
import { Note } from '../../types';

interface NotesCreateModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const NotesCreateModal: FC<NotesCreateModalProps> = ({ isOpen, onClose }) => {
    const [validationError, setValidationError] = useState<Maybe<string>>(null);
    const { addNote } = useNotes();

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { value } = event.currentTarget;
        if (value) {
            setValidationError(null);
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const values = getFormValues<Note>(event.currentTarget);

        const isNotValid = Object.values(values).some((value) => !value);

        if (isNotValid) {
            setValidationError('Please fill all fields');
            return;
        }

        addNote(values as Note);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form className={styles.modalBody} onSubmit={handleSubmit}>
                <ModalBody flexDirection="column">
                    <div className={styles.header}>
                        <Heading variant="h3">Create note</Heading>
                        <Text type="body" scale="m" className={styles.modalDescription}>
                            Add New Tasks on the Fly with Notes Paw
                        </Text>
                        {validationError && (
                            <div className={styles.validationError}>
                                <Text type="body" scale="s">
                                    {validationError}
                                </Text>
                            </div>
                        )}
                    </div>
                    <div className={styles.formFields}>
                        <div className={styles.formSplitRow}>
                            <Input
                                label="Title"
                                placeholder="Note title"
                                name={CreateNoteFormFields.Title}
                                onChange={handleChange}
                                wide
                            />
                            <Select label="Type" name={CreateNoteFormFields.Type} wide>
                                <option>Select type</option>
                                {Object.values(NoteType).map((type) => (
                                    <option key={type}>{type}</option>
                                ))}
                            </Select>
                        </div>
                        <TextArea
                            label="Description"
                            placeholder="Type your description..."
                            name={CreateNoteFormFields.Description}
                            onChange={handleChange}
                            wide
                        />
                    </div>
                </ModalBody>
                <ModalActions>
                    <Button onClick={onClose} color="secondary">
                        Cancel
                    </Button>
                    <Button type="submit">Submit</Button>
                </ModalActions>
            </form>
        </Modal>
    );
};
