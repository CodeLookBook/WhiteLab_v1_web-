class Vacancy {

    _id             : number;
    _name           : string;
    _contacts       : string;
    _descriptionRu  : string;
    _descriptionEn  : string;
    _descriptionSl  : string;
    _openedAt       : Date  ;

    constructor(
        id              : number,
        name            : string,
        contacts        : string,
        descriptionRu  : string,
        descriptionEn  : string,
        descriptionSl  : string,
        openedAt        : Date  ,
    ) {
        this._id            = id;
        this._name          = name;
        this._contacts      = contacts;
        this._descriptionRu = descriptionRu;
        this._descriptionEn = descriptionEn;
        this._descriptionSl = descriptionSl;
        this._openedAt      = openedAt;
    }

    get id (): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }
    get name (): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    get contacts (): string {
        return this._contacts;
    }
    set contacts(value: string) {
        this._contacts = value;
    }
    get descriptionRu (): string {
        return this._descriptionRu;
    }
    set descriptionRu (value: string) {
        this._descriptionRu = value;
    }
    get descriptionEn (): string {
        return this._descriptionEn;
    }
    set descriptionEn(value: string) {
        this._descriptionEn = value;
    }
    get descriptionSl(): string {
        return this._descriptionSl;
    }
    set descriptionSl(value: string) {
        this._descriptionSl = value;
    }
    get openedAt (): Date {
        return this._openedAt;
    }
    set openedAt(value: Date) {
        this._openedAt = value;
    }

    clone(){
        return new Vacancy(
            this.id,
            this.name,
            this.contacts,
            this.descriptionRu,
            this.descriptionEn,
            this.descriptionSl,
            this.openedAt,
        )
    }
}

export {Vacancy};