// @flow

class Size {

    _value  : number;
    _measure: string;

    constructor(height: number, measure: string) {
        this._value   = height;
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