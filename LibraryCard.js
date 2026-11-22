export class LibraryCard {
    _cardNumber;  
    _ownerName;   
    _isActive;   

    constructor(cardNumber, ownerName, isActive) {
        this._cardNumber = cardNumber;
        this._ownerName = ownerName;
        this._isActive = isActive;
    }

    get cardNumber() {
        return this._cardNumber;
    }
    set cardNumber(value) {
        this._cardNumber = value;
    }

    get ownerName() {
        return this._ownerName;
    }
    set ownerName(value) {
        this._ownerName = value;
    }

    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }

    show() {
        console.log(`Номер: ${this._cardNumber}`);
        console.log(`Владелец: ${this._ownerName}`);
        console.log(`Активен: ${this._isActive}`);
    }

    delete() {
        for (const key of Object.keys(this)) {
            delete this[key];
        }
    }

    copy() {
        return this;
    }

    #block() {
        this._isActive = false;
    }

    blockCard() {
        this.#block();
    }

    static clone(card) {
        return new LibraryCard(card._cardNumber, card._ownerName, card._isActive);
    }
}