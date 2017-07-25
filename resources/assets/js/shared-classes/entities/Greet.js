// @flow

class Greet {

    _russian: string;
    _english: string;
    _slovak : string;

    constructor(textRu: string, textEn: string, textSl: string){
        this._russian = textRu;
        this._english = textEn;
        this._slovak  = textSl;
    }

    get russian(): string{
        return this._russian;
    }
    get english(): string {
        return this._english;
    }
    get slovak(): string {
        return this._slovak;
    }
}

export {Greet};
