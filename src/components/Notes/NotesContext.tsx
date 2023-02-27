import { createContext, FC, ReactNode, useContext, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NoteStatus, NOTE_PREFILLED } from '../../constants';
import { Note } from '../../types';

interface NotesContextValue {
    todo: Note[];
    completed: Note[];
    isOpenModal: boolean;
    openModal: () => void;
    closeModal: () => void;
    addNote: (note: Note) => void;
    prefillNotes: () => void;
    clearNotes: () => void;
    setNoteCompletion: (id: string, isCompleted: boolean) => void;
    searchNotes: (search: string) => void;
    filterByType: (type: string) => void;
}

const initialValues: NotesContextValue = {
    todo: [],
    completed: [],
    isOpenModal: false,
    openModal: () => {},
    closeModal: () => {},
    addNote: () => {},
    prefillNotes: () => {},
    clearNotes: () => {},
    setNoteCompletion: () => {},
    searchNotes: () => {},
    filterByType: () => {},
};

const NotesContext = createContext<NotesContextValue>(initialValues);

interface NotesProviderProps {
    children: (todo: Note[], completed: Note[]) => ReactNode;
}

export const NotesProvider: FC<NotesProviderProps> = ({ children }) => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [search, setSearch] = useState('');
    const [type, setType] = useState('');

    const filterNotes = (notesList: Note[]): Note[] => {
        if (!search && !type) return notesList;

        return notesList
            .filter((note) => {
                if (!search) return true;
                const title = note.title.toLowerCase();
                const description = note.description.toLowerCase();
                const searchValue = search.toLowerCase();

                return (
                    (type === '' || note.type === type) &&
                    (search === '' || title.includes(searchValue) || description.includes(searchValue))
                );
            })
            .filter((note) => {
                if (!type) return true;
                return note.type === type;
            });
    };

    const todo = useMemo(
        () => filterNotes(notes.filter((note) => note.status === NoteStatus.Active)),
        [notes, search, type],
    );

    const completed = useMemo(
        () => filterNotes(notes.filter((note) => note.status === NoteStatus.Completed)),
        [notes, search, type],
    );

    const prefillNotes = (): void => setNotes(NOTE_PREFILLED);

    const clearNotes = (): void => setNotes([]);

    const searchNotes = (nextSearch: string): void => setSearch(nextSearch);

    const filterByType = (filterType: string): void => setType(filterType);

    const openModal = (): void => setIsOpenModal(true);

    const closeModal = (): void => setIsOpenModal(false);

    const addNote = (note: Omit<Note, 'status' | 'id'>): void => {
        setNotes((prevNotes) => [
            ...prevNotes,
            {
                id: uuidv4(),
                status: NoteStatus.Active,
                ...note,
            },
        ]);
    };

    const setNoteCompletion = (id: string, isCompleted: boolean): void => {
        setNotes((prevNotes) =>
            prevNotes.map((note) => {
                if (note.id === id) {
                    return {
                        ...note,
                        status: isCompleted ? NoteStatus.Completed : NoteStatus.Active,
                    };
                }
                return note;
            }),
        );
    };

    return (
        <NotesContext.Provider
            value={{
                todo,
                completed,
                isOpenModal,
                openModal,
                closeModal,
                addNote,
                prefillNotes,
                clearNotes,
                setNoteCompletion,
                searchNotes,
                filterByType,
            }}
        >
            {children(todo, completed)}
        </NotesContext.Provider>
    );
};

interface UseNotesModal {
    isOpenModal: boolean;
    openModal: () => void;
    closeModal: () => void;
}

export const useNotesModal = (): UseNotesModal => {
    const { isOpenModal, openModal, closeModal } = useContext(NotesContext);
    return { isOpenModal, openModal, closeModal };
};

interface UseNotes {
    todo: Note[];
    completed: Note[];
    addNote: (note: Note) => void;
    prefillNotes: () => void;
    clearNotes: () => void;
    setNoteCompletion: (id: string, isCompleted: boolean) => void;
}

export const useNotes = (): UseNotes => {
    const { todo, completed, addNote, setNoteCompletion, prefillNotes, clearNotes } = useContext(NotesContext);
    return { todo, completed, addNote, prefillNotes, clearNotes, setNoteCompletion };
};

interface UseNotesFiltering {
    searchNotes: (search: string) => void;
    filterByType: (type: string) => void;
}

export const useNotesFiltering = (): UseNotesFiltering => {
    const { searchNotes, filterByType } = useContext(NotesContext);
    return { searchNotes, filterByType };
};
