import { FC, ReactNode } from 'react';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NotesList, NotesTodoListActions, NotesToolbar, NotesProvider } from './components/Notes';

const AppRoot: FC = () => (
    <Container>
        <Header />
        <Hero />
        <NotesProvider>
            {(todo, completed): ReactNode => (
                <>
                    <NotesToolbar />
                    <NotesList title="Todo list" notes={todo} actions={<NotesTodoListActions />} />
                    {!!completed.length && <NotesList title="Already done" notes={completed} />}
                </>
            )}
        </NotesProvider>
    </Container>
);

export default AppRoot;
