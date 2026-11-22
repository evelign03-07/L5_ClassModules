import { LibraryCard } from './LibraryCard.js';

export class StudentLibraryCard extends LibraryCard {
    _hasDiscount;

    constructor(cardNumber, ownerName, isActive, hasDiscount) {
        super(cardNumber, ownerName, isActive);
        this._hasDiscount = hasDiscount;
    }

    get hasDiscount() {
        return this._hasDiscount;
    }
    set hasDiscount(value) {
        this._hasDiscount = value;
    }

    show() {
        super.show();
        console.log(`Студ скидка: ${this._hasDiscount}`);
    }

    delete() {
        super.delete();
    }

    copy() {
        return super.copy();
    }

    static clone(card) {
        return new StudentLibraryCard(
            card._cardNumber,
            card._ownerName,
            card._isActive,
            card._hasDiscount
        );
    }
}