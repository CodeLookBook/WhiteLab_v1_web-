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

        NAVIGATION: Object.freeze({

            LOGO_ITEM_CLICKED             : _id(),
            FB_MENU_ITEM_CLICKED          : _id(),
            IN_MENU_ITEM_CLICKED          : _id(),
            PRICE_MENU_ITEM_CLICKED       : _id(),
            ADDRESS_MENU_ITEM_CLICKED     : _id(),
            VACANCIES_MENU_ITEM_CLICKED   : _id(),
            LANGUAGE_SUBMENU_ITEM_CLICKED : _id(),
            RUSSIAN_LANGUAGE_ITEM_CLICKED : _id(),
            ENGLISH_LANGUAGE_ITEM_CLICKED : _id(),
            SLOVAK_LANGUAGE_ITEM_CLICKED  : _id(),
            ORDER_ITEM_CLICKED            : _id(),
            ORDER_BUTTOM_CLICKED          : _id(),
            TOGGLE_ITEM_CLICKED           : _id(),

            CLOSE_SIDEBAR_ITEM_CLICKED    : _id(),
        }),

        MAIN_CONTENT_SLOT:  Object.freeze({

            HEIGHT_CHANGED  : _id(),
            SCROLLING       : _id(),
            SCROLLING_UP    : _id(),
            SCROLLED_UP     : _id(),
            SCROLLING_DOWN  : _id(),
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