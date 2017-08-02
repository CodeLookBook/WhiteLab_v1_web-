class Vacancy {

    _id             : number;
    _nameRu         : string;
    _nameEn         : string;
    _nameSl         : string;
    _contacts       : string;
    _descriptionRu  : string;
    _descriptionEn  : string;
    _descriptionSl  : string;
    _openedAt       : Date  ;

    constructor(
        id             : number,
        nameRu         : string,
        nameEn         : string,
        nameSl         : string,
        contacts       : string,
        descriptionRu  : string,
        descriptionEn  : string,
        descriptionSl  : string,
        openedAt        : Date  ,
    ) {
        this._id            = id;
        this._nameRu        = nameRu;
        this._nameEn        = nameEn;
        this._nameSl        = nameSl;
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
    get nameRu (): string {
        return this._nameRu;
    }
    set nameRu(value: string) {
        this._nameRu = value;
    }
    get nameEn (): string {
        return this._nameEn;
    }
    set nameEn(value: string) {
        this._nameEn = value;
    }
    get nameSl (): string {
        return this._nameSl;
    }
    set nameSl(value: string) {
        this._nameSl = value;
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
            this.nameRu,
            this.nameEn,
            this.nameSl,
            this.contacts,
            this.descriptionRu,
            this.descriptionEn,
            this.descriptionSl,
            this.openedAt,
        )
    }
}

export {Vacancy};