// @flow

/**
 * Generates events end menu items ID-s;
 */
class Id {

    static getInstance(): Id{

        if(_instance === null){
            _instance = _init();
        }

        return _instance;
    }

    /**
     * Generate new id number in string format.
     * @return {string}
     */
    generate(): string {
        return (++_counter).toString();
    };
}

/**
 * Singleton instance.
 * @type {Id | null}
 * @private
 */
let _instance: Id | null = null;

/**
 * Creates Id instance.
 * @return {Id}
 * @private
 */
const _init = (): Id =>{
    return new Id();
};

/**
 * Id generator.
 * @type {number}
 * @private
 */
let _counter: number = 0;

export {Id};
