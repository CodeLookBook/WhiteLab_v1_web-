// @flow

class Height {

    _value  : Number | number;
    _measure: String | string;

    constructor(height: Number | number, measure: String | string) {
        this._value   = height;
        this._measure = measure;
    }

    get value  (): Number | number {
        return this._value;
    }
    get measure(): String | string {
        return this._measure;
    }
}

export {Height}

