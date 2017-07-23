// @flow

import {Id} from "../helpers/Id";

const id: Id = Id.getInstance();

const SIDE_NAVBAR_TOGGLE_EVENTS = Object.freeze({
    OPENED         : id.generate(),
    CLOSED         : id.generate(),
});

export {SIDE_NAVBAR_TOGGLE_EVENTS};
