// Events counter.
let _counter: number = 0;

function _id(): string{
    return (++_counter).toString();
}

/**
 * Events categories names.
 * Uses with 'EventsFactory' class instance.
 */
let EVENTS: {

    //BROWSER
    HEIGHT_CHANGED  : string,

    //SCROLL
    SCROLLED        : string,
    SCROLLED_UP     : string,
    SCROLLED_DOWN   : string,
    SCROLL_STARTED  : string,
    SCROLL_STOPPED  : string,

} = Object.freeze({

    //BROWSER
    HEIGHT_CHANGED  : _id(),

    //SCROLL
    SCROLLED        : _id(),
    SCROLLED_UP     : _id(),
    SCROLLED_DOWN   : _id(),
    SCROLL_STARTED  : _id(),
    SCROLL_STOPPED  : _id(),
});

export {EVENTS};


