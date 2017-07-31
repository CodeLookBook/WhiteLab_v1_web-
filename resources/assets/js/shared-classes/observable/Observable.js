// @flow

import {CallBack} from "../types/CallBack";

/**
 * Abstract class
 */
class Observable {

    _observers: CallBack[] = [];

    /**
     * Add new subscriber
     * @param callback
     */
    on(callback: CallBack): void{
        this._observers.push(callback);
    }

    /**
     * Delete subscriber.
     * @param callback
     */
    off(callback: CallBack): void {

        const index: number = this._observers.indexOf(callback);

        if(index !== -1){
            this._observers.splice(index, 1);
        }
    }

    /**
     * Notifies all subscribers about event and send event information
     * to them.
     */
    notify(event?: Object | null){

        // set default value to 'event' argument
        if(typeof event === "undefined"){
            event = null;
        }

        this._observers.forEach((callback, number, array) => {
            callback(event);
        });
    }
}

export {Observable};
