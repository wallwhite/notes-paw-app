import { BuffaloIcon, CatIcon, ChickenIcon, DuckIcon, HorseIcon, PeacockIcon, PigIcon } from 'paw-ui';
import { Note } from '../types';

export enum NoteType {
    Buffalo = 'Buffalo',
    Cat = 'Cat',
    Chicken = 'Chicken',
    Duck = 'Duck',
    Horse = 'Horse',
    Peacock = 'Peacock',
    Pig = 'Pig',
}

export enum NoteStatus {
    Active = 'Active',
    Completed = 'Completed',
}

export enum CreateNoteFormFields {
    Title = 'title',
    Description = 'description',
    Type = 'type',
}

export const NOTE_TYPE_ICONS = {
    [NoteType.Buffalo]: <BuffaloIcon />,
    [NoteType.Peacock]: <PeacockIcon />,
    [NoteType.Pig]: <PigIcon />,
    [NoteType.Cat]: <CatIcon />,
    [NoteType.Chicken]: <ChickenIcon />,
    [NoteType.Duck]: <DuckIcon />,
    [NoteType.Horse]: <HorseIcon />,
};

export const NOTE_PREFILLED: Note[] = [
    {
        id: '1',
        title: 'Feed the chickens',
        description: 'Give the chickens their daily ration of feed and water.',
        type: NoteType.Buffalo,
        status: NoteStatus.Active,
    },
    {
        id: '2',
        title: 'Brush the cat',
        description: 'Spend some time brushing your cat to help remove any tangles or loose hair.',
        type: NoteType.Buffalo,
        status: NoteStatus.Active,
    },
    {
        id: '3',
        title: 'Groom the buffalo',
        description: "Use a brush or comb to remove any dirt or debris from the buffalo's fur.",
        type: NoteType.Buffalo,
        status: NoteStatus.Active,
    },
    {
        id: '4',
        title: 'Give the duck a bath',
        description: 'Fill a basin with warm water and give your duck a gentle bath to help keep its feathers clean.',
        type: NoteType.Duck,
        status: NoteStatus.Active,
    },
    {
        id: '5',
        title: 'Exercise the horse',
        description: 'Take your horse out for a ride or a walk to give it some exercise and fresh air.',
        type: NoteType.Horse,
        status: NoteStatus.Active,
    },
    {
        id: '6',
        title: 'Give the pig a treat',
        description:
            'Offer your pig a healthy treat, such as a piece of fruit or a vegetable, to keep it happy and healthy.',
        type: NoteType.Pig,
        status: NoteStatus.Active,
    },
];
