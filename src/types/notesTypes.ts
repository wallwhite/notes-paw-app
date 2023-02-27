import { NoteStatus, NoteType } from '../constants';

export interface Note {
    id: string;
    title: string;
    description: string;
    type: NoteType;
    status: NoteStatus;
}
