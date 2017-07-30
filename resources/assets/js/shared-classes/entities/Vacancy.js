class Vacancy {

    _id          : number;
    _name        : string;
    _contacts    : string;
    _description : string;
    _createdAt   : Date  ;

    constructor(
        id          : number,
        name        : string,
        contacts    : string,
        description : string,
        createdAt   : Date  ,
    ) {
        this._id          = id;
        this._name        = name;
        this._contacts    = contacts;
        this._description = string;
        this._createdAt   = createdAt;
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
    get description (): string {
        return this._description;
    }
    set description(value: string) {
        this._description = value;
    }
    get createdAt (): Date {
        return this._createdAt;
    }
    set createdAt(value: Date) {
        this._createdAt = value;
    }

    clone(){
        return new Vacancy(
            this.id,
            this.name,
            this.contacts,
            this.description,
            this.createdAt,
        )
    }
}

export {Vacancy};