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
    SCROLLING       : string,
    SCROLLING_UP    : string,
    SCROLLED_UP     : string,
    SCROLLING_DOWN  : string,
    SCROLLED_DOWN   : string,
    SCROLL_STARTED  : string,
    SCROLL_STOPPED  : string,
    SCROLL_TO       : string,

} = Object.freeze({

    //BROWSER
    HEIGHT_CHANGED  : _id(),

    //SCROLL
    SCROLLING       : _id(),
    SCROLLING_UP    : _id(),
    SCROLLED_UP     : _id(),
    SCROLLING_DOWN  : _id(),
    SCROLLED_DOWN   : _id(),
    SCROLL_STARTED  : _id(),
    SCROLL_STOPPED  : _id(),
    SCROLL_TO       : _id(),
});

export {EVENTS};


