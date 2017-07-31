// @flow

import {Id} from "../../helpers/Id";

const id: Id = Id.getInstance();

const TOKEN_EVENTS = Object.freeze({
    DELETED         : id.generate(),
    LOADED          : id.generate(),
    UNLOADED        : id.generate(),
    LOAD_ERROR_401  : id.generate(),
    LOAD_ERROR_500  : id.generate(),
});

export {TOKEN_EVENTS};