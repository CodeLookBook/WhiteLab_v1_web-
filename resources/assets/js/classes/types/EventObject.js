// @flow

import Vue from 'vue';

class EventObject <T>{

    _value:  T;
    _target: Vue;

    constructor(value: T, target: Vue){
        this._value  = value;
        this._target = target;
    }

    get value() : T {
        return this._value;
    }
    get target() : Vue{
        return this._target;
    }
}

export {EventObject};
