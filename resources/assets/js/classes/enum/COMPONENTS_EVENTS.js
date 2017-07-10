// @flow

// Events counter.
let _counter: number = 0;

function _id(): string{
    return (++_counter).toString();
}

/**
 * Event names and id.
 */
const COMPONENTS_EVENTS: {} = Object.freeze({

    APP: Object.freeze({

        MAIN_CONTENT_SLOT:  Object.freeze({

            HEIGHT_CHANGED  : _id(),
            SCROLLED        : _id(),
            SCROLLED_UP     : _id(),
            SCROLLED_DOWN   : _id(),
            SCROLL_STARTED  : _id(),
            SCROLL_STOPPED  : _id(),
        }),

        TOP_NAVBAR_SLOT:    Object.freeze({
            HEIGHT_CHANGED: _id()
        }),

        CONTENT_SLOT:       Object.freeze({
            HEIGHT_CHANGED: _id()
        }),
    }),
});

export {COMPONENTS_EVENTS};