// @flow

class Size {

    _value  : number;
    _measure: string;

    constructor(value: number, measure: string) {
        this._value   = value;
        this._measure = measure;
    }

    get value  (): number {
        return this._value;
    }
    get measure(): string {
        return this._measure;
    }
}

export {Size}