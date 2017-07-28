import {Id} from "../../helpers/Id";

const id: Id = Id.getInstance();


const SIDE_NAVBAR_EVENTS = Object.freeze({
    TOGGLE_MENU_ITEM_CLICKED                    : id.generate(),

    // Buttons that manages some elements on VACANCIES PAGE
    EDIT_VACANCIES_LIST_ITEM_CLICKED            : id.generate(),

    // Button that helps to download new price on server
    EDIT_PRICE_LIST_ITEM_CLICKED                : id.generate(),

    // Button that helps to download new image with map on server
    EDIT_ADDRESS_ITEM_CLICKED                   : id.generate(),

    // Button that helps to download new image with map on server
    EDIT_SOCIAL_GROUPS_REFS_ITEM_CLICKED        : id.generate(),

    // Buttons that manages some elements on HOME PAGE
    HOME_PAGE_SETTINGS_ITEM_CLICKED             : id.generate(),
    CHANGE_GREET_BLOCK_FON_ITEM_CLICKED         : id.generate(),
    CHANG_GREET_TEXT_ITEM_CLICKED               : id.generate(),
    CHANG_FB_SHARE_BUTTON_SETTINGS_ITEM_CLICKED : id.generate(),
    ORDER_BUTTON_SETTINGS_ITEM_CLICKED          : id.generate(),


    //Languges buttons
    LANGUAGE_SUBMENU_ITEM_CLICKED               : id.generate(),
    RUSSIAN_LANGUAGE_MENU_ITEM_CLICKED          : id.generate(),
    SLOVAK_LANGUAGE_MENU_ITEM_CLICKED           : id.generate(),

});

export {SIDE_NAVBAR_EVENTS};
