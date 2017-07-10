// @flow

class EventObject{

    _value:  Object;
    _target: Object;

    constructor(value: Object, target: Object){
        this._value  = value;
        this._target = target;
    }

    get value() : Object {
        return this._value;
    }
    get target() : Object{
        return this._target;
    }
}

export {EventObject};
