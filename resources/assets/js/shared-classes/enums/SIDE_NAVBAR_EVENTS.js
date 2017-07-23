import {Id} from "../helpers/Id";

const id: Id = Id.getInstance();


const SIDE_NAVBAR_EVENTS = Object.freeze({
    TOGGLE_MENU_ITEM_CLICKED: id.generate(),
});

export {SIDE_NAVBAR_EVENTS};
