// @flow

import {TokenLoaded} from "../observable/TokenLoaded";
import {TokenUnloaded} from "../observable/TokenUnloaded";
import {Cookie} from "./Cookie";
import {CallBack} from "../types/CallBack";
import {TokenDeleted} from "../observable/TokenDeleted";
import {TOKEN_EVENTS} from "../../admin-app/classes/enums/events-names/TOKEN_EVENTS";
import {TokenLoadError401} from "../observable/TokenLoadError401";
import {TokenLoadError500} from "../observable/TokenLoadError500";

class Token {

    _EVENTS                     : Object;            // Enum with events names
    _axios                      : any;               // 'axios' object the makes requests to the server.
    _url                        : string;            // URL where we can create new token.
    _tokenLoadedObservable      : TokenLoaded;       // Publisher/observable
    _tokenUnloadedObservable    : TokenUnloaded;     // Publisher/observable
    _tokenDeletedObservable     : TokenDeleted;      // Publisher/observable
    _tokenLoadError401Observable: TokenLoadError401; // Publisher/observable
    _tokenLoadError500Observable: TokenLoadError500; // Publisher/observable
    _cookie                     : Cookie;            // Cookie manager (gets, sets, deletes...)
    _userRole                   : string;            // User role name

    constructor() {

        // Class props INIT.
        {
            this._EVENTS                      = TOKEN_EVENTS           ;
            this._tokenLoadedObservable       = new TokenLoaded      ();
            this._tokenUnloadedObservable     = new TokenUnloaded    ();
            this._tokenDeletedObservable      = new TokenDeleted     ();
            this._tokenLoadError401Observable = new TokenLoadError401();
            this._tokenLoadError500Observable = new TokenLoadError500();
            this._cookie                      = Cookie.getInstance   ();
        }
    }

    /**
     * Setup global default request headers..
     * @private
     */
    _setAxiosGlobalHeaders(): void {

        // IF TOKEN EXISTS
        if (this.isLoaded === true) {

            // IF AXIOS EXISTS
            if (typeof this._axios !== 'undefined') {

                if (this._axios !== null) {

                    // SETUP default global HEADERS
                    {
                        this._axios.defaults.headers.common['Authorization'] =
                            'Bearer ' + this.token;
                        this._axios.defaults.headers.post['Content-Type'] =
                            'application/json';
                        this._axios.defaults.headers.post['X-Requested-With'] =
                            'XMLHttpRequest';
                    }
                }
            }
        }
    }

    /**
     * Returns singleton instance.
     * @static
     * @return {Token}
     */
    static getInstance(): Token {

        if (_instance === null) {
            _instance = _init();
        }

        return _instance;
    }

    /**
     * Name of the actor, that should receive token.
     * @return {string|undefined}
     */
    get userRole(): string {
        return this._cookie.get('userRole');
    }
    set userRole(value: string): void {

        if (typeof this._expirationTime !== 'undefined') {

            if (this._expirationTime !== null) {

                // SET COOKIE WITH EXPIRATION DATE
                this._cookie.set('userRole', value, new Date(this._expirationTime));
            } else {

                // SET COOKIE WITHOUT EXPIRATION DATE
                this._cookie.set('userRole', value);
            }
        } else {

            // SET COOKIE WITHOUT EXPIRATION DATE
            this._cookie.set('userRole', value);
        }
    }

    get axios(): any {
        return this._axios;
    }
    set axios(value: any): void {
        this._axios = value;
        this._setAxiosGlobalHeaders();
    }

    /**
     * URL where we can get new token.
     * @return {string}
     */
    get url(): string {
        return this._url
    }
    set url(value: string): void {
        this._url = value;
    }

    /**
     * Token.
     * @return {string|undefined}
     * @private
     */
    get token(): string {
        return this._cookie.get('token');
    }
    set token(value: string): void {

        if (typeof this._expirationTime !== 'undefined') {

            if (this._expirationTime !== null) {

                //STORE COOKIE WITH EXPIRE DATE
                this._cookie.set('token', value, new Date(this._expirationTime));
            } else {

                //STORE COOKIE WITHOUT EXPIRE DATE
                this._cookie.set('token', value);
            }
        } else {

            //STORE COOKIE WITHOUT EXPIRE DATE
            this._cookie.set('token', value);
        }

        this._axios.defaults.headers.common['Authorization'] = 'Bearer ' + value;
    }

    /**
     * Token expiration time.
     * @return {string|null}
     * @private
     */
    get _expirationTime(): Date | null {

        const milliseconds: string = this._cookie.get('token.expirationTime');
        let   date: Date | null    = null;

        if (typeof milliseconds !== 'undefined') {

            if (milliseconds !== null) {

                if (milliseconds.trim() !== '') {
                    date = new Date(milliseconds);
                }
            }
        }

        return date;
    }
    set _expirationTime(value: Date): void {

        // The expirationTime stored as a Unix timestamp;
        this._cookie.set('token.expirationTime', value.toUTCString(), value);

        // Reset other values that were saved as cookies,
        // with new expiration time.
        {
            if (this.userRole) this.userRole = this.userRole ;
            if (this.token  ) this.token   = this.token   ;
            if (this.isLoaded) this.isLoaded = this.isLoaded ;
        }
    }

    /**
     * Checks whether the token is expired.
     * @return {boolean}
     */
    isExpired(): boolean {

        const currentTime   : Date        = new Date();
        const expirationTime: Date | null = this._expirationTime;
        let isExpired       : boolean     = true;

        if (typeof expirationTime !== 'undefined') {
            if (expirationTime !== null) {

                const difference: number /*ms*/ = expirationTime - currentTime;

                // If 'difference' var is less then 120000 millisecond, then
                // 'isExpired' = true.
                isExpired = difference/*ms*/ < 120000/*ms, (=120s)*/;
            } else {
                isExpired = true;
            }
        } else {
            isExpired = true;
        }

        return isExpired;
    }

    /**
     * Flag, shows, was Token already loaded or not.
     * @return {boolean}
     * @private
     */
    get isLoaded(): boolean {
        return ('true' === this._cookie.get('token.isLoaded'));
    }
    set isLoaded(value: boolean): void {

        if (typeof this._expirationTime !== 'undefined') {

            if (this._expirationTime !== null) {

                // SET COOKIE WITH EXPIRATION DATE
                const date: Date =  new Date(this._expirationTime)
                this._cookie.set('token.isLoaded', value.toString(), date);

            } else {

                // SET COOKIE WITHOUT EXPIRATION DATE
                this._cookie.set('token.isLoaded', value.toString());
            }
        } else {

            // SET COOKIE WITHOUT EXPIRATION DATE
            this._cookie.set('token.isLoaded', value.toString());
        }
    }

    /**
     * Loads token from server using 'login' and password
     * arguments as credentials.
     *
     * @param login
     * @param password
     * @return {boolean} true - If token was loaded successfully.
     *
     * @throws {Error} - If data object that was send from server,
     *                   doesn't have one of the next properties:
     *                   token, userRole or expirationTime.
     */
    load(login: string, password: string): void {

        //Send 'LOGIN' REQUEST
        this._axios.post(this._url, {login, password}).then(
            (function (response) {

                //SAVE token EXPIRATION TIME.
                if (response.data.hasOwnProperty('expirationTime')) {

                    //This setter should be invoked before:
                    // - this._token;
                    // - this.userRole;
                    // - this.isLoaded;
                    this._expirationTime = new Date(response.data.expirationTime);
                    response.data.expirationTime.toString();
                } else {

                    // DELETE TOKEN INFO saved in cookies.
                    this.del();

                    //Server DATA DOESN'T HAVE 'expirationTime' property.
                    throw new Error("'expirationTime' couldn't be load from server. " +
                        "Server response 'data' object doesn't have " +
                        "'expirationTime' property. Check data that were " +
                        "sent from server. It should contain " +
                        "'expirationTime' property.");
                }

                //SAVE token.
                if (response.data.hasOwnProperty('token')) {
                    this.token = response.data.token;
                } else {

                    // DELETE TOKEN INFO saved in cookies.
                    this.del();

                    //Server DATA DOESN'T HAVE 'TOKEN' property.
                    throw new Error("Token couldn't be load from server. " +
                        "Server response 'data' object doesn't have 'token' " +
                        "property. Check data that were sent from server. It " +
                        "should contain 'token' property.");
                }

                //SAVE USER ROLE.
                if (response.data.hasOwnProperty('userRole')) {
                    this.userRole = response.data.userRole;
                } else {

                    // DELETE TOKEN INFO saved in cookies.
                    this.del();

                    // Server DATA DOESN'T HAVE 'userRole' property.
                    throw new Error("'userRole' couldn't be load from " +
                        "server. Server response 'userRole' object doesn't " +
                        "have 'userRole' property. Check data that " +
                        "were sent from server. It should contain " +
                        "'userRole' property.");
                }

                // SETUP axios global HEADERS.
                this._setAxiosGlobalHeaders();

                // NOTIFY subscribers that TOKEN was LOADED SUCCESSFULLY.
                this._tokenLoadedObservable.notify(response);

                // MARK AS 'LOADED'
                this.isLoaded = true;
            }).bind(this)
        ).catch(
            (function (error) {

                if (error.response) {

                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx

                    // DELETE TOKEN INFO saved in cookies.
                    this.del();

                    // NOTIFY subscribers that TOKEN WASN'T LOADED.
                    switch (error.response.status) {
                        case 401:
                            this._tokenLoadError401Observable.notify(error);
                            break;
                        case 500:
                            this._tokenLoadError500Observable.notify(error);
                            break;
                        default:
                            this._tokenUnloadedObservable.notify(error);
                    }
                } else if (error.request) {

                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser
                    // and an instance of http.ClientRequest in node.js

                    // TODO: extend number of possible observers
                    this._tokenUnloadedObservable.notify(error);
                } else {

                    // TODO: extend number of possible observers
                    // Something happened in setting up the request that triggered an Error
                    this._tokenUnloadedObservable.notify(error);
                }
            }).bind(this)
        );
    }

    /*update(){
     //TODO:
     }*/

    /**
     * Subscribe on token events.
     * @param eventId
     * @param callback
     */
    on(eventId: string, callback: CallBack): void {

        switch (eventId) {
            case this._EVENTS.LOADED:
                this._tokenLoadedObservable.on(callback);
                break;
            case this._EVENTS.UNLOADED:
                this._tokenUnloadedObservable.on(callback);
                break;
            case this._EVENTS.DELETED:
                this._tokenDeletedObservable.on(callback);
                break;
            case this._EVENTS.LOAD_ERROR_401:
                this._tokenLoadError401Observable.on(callback);
                break;
            case this._EVENTS.LOAD_ERROR_500:
                this._tokenLoadError500Observable.on(callback);
                break;
            default:
                throw new Error("Invalid 'token' event name.");
        }
    }

    /**
     * Unsubscribe.
     * @param eventId
     * @param callback
     */
    off(eventId: string, callback: CallBack): void {

        switch (eventId) {
            case this._EVENTS.LOADED:
                this._tokenLoadedObservable.off(callback);
                break;
            case this._EVENTS.UNLOADED:
                this._tokenUnloadedObservable.off(callback);
                break;
            case this._EVENTS.DELETED:
                this._tokenDeletedObservable.off(callback);
                break;
            case this._EVENTS.LOAD_ERROR_401:
                this._tokenLoadError401Observable.off(callback);
                break;
            case this._EVENTS.LOAD_ERROR_500:
                this._tokenLoadError500Observable.off(callback);
                break;
            default:
                throw new Error("Invalid 'token' event name.");
        }
    }

    /**
     * Delete Token info that were saved in cookies.
     */
    del(): void {
        this._axios.defaults.headers.common['Authorization'] = null;

        this._cookie.delete('userRole');
        this._cookie.delete('token');
        this._cookie.delete('token.expirationTime');
        this._cookie.delete('token.isLoaded');

        this._tokenDeletedObservable.notify(null);
    }
}


/**
 * Singleton instance.
 */
let _instance: Token | null = null;

/**
 * Initialize singleton instance.
 * @return {Token}
 * @private
 */
const _init = () => {
    return new Token();
};

export {Token};