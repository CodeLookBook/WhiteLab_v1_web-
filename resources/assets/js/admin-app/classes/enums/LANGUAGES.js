// @flow

// Events counter.
let _counter: number = 0;

function _id(): string{
    return (++_counter).toString();
}

const LANGUAGES = Object.freeze({

    DEFAULT: 'ru',
    RUSSIAN: 'ru',
    SLOVAK : 'sl',
});

export {LANGUAGES};