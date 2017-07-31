// @flow

// Events counter.
let _counter: number = 0;

function _id(): string{
    return (++_counter).toString();
}

const APP_LANGUAGES = Object.freeze({

    DEFAULT: 'en',

    RUSSIAN: 'ru',
    ENGLISH: 'en',
    SLOVAK : 'sl',
});

export {APP_LANGUAGES};