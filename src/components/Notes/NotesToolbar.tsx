import { FC } from 'react';
import { Button, FilterIcon, Heading, Input, SearchIcon, Select } from 'paw-ui';
import styles from './NotesToolbar.module.scss';
import { useNotesFiltering } from './NotesContext';
import { getFormValues } from '../../utils';
import { NoteType } from '../../constants';

interface NotesToolbarProps {
    title?: string;
}

export const NotesToolbar: FC<NotesToolbarProps> = () => {
    const { searchNotes, filterByType } = useNotesFiltering();

    const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        const values = getFormValues(event.currentTarget);

        searchNotes(values.search ?? '');
    };

    const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        filterByType(event.currentTarget.value === 'all' ? '' : event.currentTarget.value);
    };

    const renderSearchSubmit = (
        <Button variant="icon" type="submit" scale="s">
            <SearchIcon />
        </Button>
    );

    const renderFilterIcon = (
        <span className={styles.filterIcon}>
            <FilterIcon />
        </span>
    );

    return (
        <div className={styles.toolbar}>
            <Heading variant="h2">Your notes</Heading>
            <div className={styles.actions}>
                <form className={styles.searchForm} onSubmit={handleSearch}>
                    <Input name="search" placeholder="Search" elementRight={renderSearchSubmit} wide />
                </form>
                <Select elementLeft={renderFilterIcon} onChange={handleFilter} wide>
                    <option value="all">All</option>
                    {Object.values(NoteType).map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </Select>
            </div>
        </div>
    );
};
