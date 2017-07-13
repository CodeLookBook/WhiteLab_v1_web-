// @flow

class Cookie {

    /**
     * Returns singleton instance.
     * @return {Cookie|null}
     */
    static getInstance(): Cookie {
        if(_instance === null) {
            _instance = _init();
        }

        return _instance;
    }

    /**
     * Finds cookie by name and returns it's value. If cookie wasn't
     * fined returns undefined.
     * @param name
     * @return {string|undefined}
     * @constructor
     */
    get(name: string): string  {

        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
            "=([^;]*)"
        ));

        return matches ? decodeURIComponent(matches[1]) : '';
    }

    /**
     * SET NEW COOKIE value. If cookie doesn't exists, then creates new.
     * If it is exists than updates value.
     * @param {string} name    - Cookie name.
     * @param {any   } value   - Cookie value.
     * @param {Date  } expires - Date, when cookie have to be deleted.
     * @param {string} path
     * @param {string} domain
     * @param {string} secure
     */
    set(name    : string,
        value   : string,
        expires : Date = new Date (Date.now() + (7*24*60*60*1000)), //def-t: 7days
        path   ?: string,
        domain ?: string,
        secure ?: boolean): void {

        document.cookie = name + "=" + encodeURIComponent(value) +
            ((expires) ? "; expires=" + expires.toUTCString() : "") +
            ((path   ) ? "; path=" + path                     : "") +
            ((domain ) ? "; domain=" + domain                 : "") +
            ((secure ) ? "; secure"                           : "");
    }

    /**
     *  Deletes saved cookie.
     * @param {string} name - Cookie name.
     */
    delete(name: string): void{
        this.set(name, "", new Date(Date.now() - 24*60*60*1000));
    }
}

/**
 * Singleton instance.
 * @type {Cookie|null}
 * @private
 */
let _instance: Cookie | null = null;

/**
 * Initialize singleton instance.
 * @return {Cookie}
 * @private
 */
const _init = function(): Cookie {
    return new Cookie();
};

export {Cookie};
