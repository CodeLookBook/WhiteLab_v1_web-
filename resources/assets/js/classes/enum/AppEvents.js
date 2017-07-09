// Events counter.
let _counter: number = 0;

function _id(): string{
    return (++_counter).toString();
}

/**
 * Event names and id.
 */
class AppEvents {

    APP = Object.freeze({
        MAIN_CONTENT_SLOT:  Object.freeze({ HEIGHT_CHANGED: _id() }),
        TOP_NAVBAR_SLOT:    Object.freeze({ HEIGHT_CHANGED: _id() }),
        CONTENT_SLOT:       Object.freeze({ HEIGHT_CHANGED: _id() }),
    });
}

const EVENTS = Object.freeze(new AppEvents());

export {EVENTS};