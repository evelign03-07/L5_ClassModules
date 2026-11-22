import { StudentLibraryCard } from './StudentLibraryCard.js';

const cards = [
    new StudentLibraryCard(1001, 'Иванов Иван', true, true),
    new StudentLibraryCard(1002, 'Петров Петр', false, false),
];

cards[0].show();
cards[1].show();