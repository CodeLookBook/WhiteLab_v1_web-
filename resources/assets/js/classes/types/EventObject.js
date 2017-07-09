// @flow

class EventObject <T>{

    _value:  T;
    _target: window.Vue;

    constructor(value: T, target: window.Vue){
        this._value  = value;
        this._target = target;
    }

    get value() : T{
        return this._value;
    }
    get target() : window.Vue{
        return this._target;
    }
}

export {EventObject};
