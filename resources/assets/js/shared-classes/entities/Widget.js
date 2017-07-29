class Widget {

    _name: string;
    _language: string;
    _src: string;

    constructor(name: string, language: string, src?: string) {
        this._name = name;
        this._language = language;
        this.src = src;
    }

    get name    (             ): string {
        return this._name;
    }
    set name    (value: string): void   {
        this._name = value;
    }
    get language(             ): string {
        return this._language;
    }
    set language(value: string): void   {
        this._language = value;
    }
    get src     (             ): string {
        return this._src;
    }
    set src     (value: string): void   {
        this._src = value;
    }
}

export {Widget};