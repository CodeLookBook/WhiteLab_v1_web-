// @flow

class ShareButtonSettings {

    _location    : string;
    _url         : string;
    _title       : string;
    _description : string;
    _quote       : string;
    _hashtags    : string;
    _twitter     : string;
    _media       : string;

    constructor(
        location    : string,
        url         : string,
        title       : string,
        description : string,
        quote?      : string,
        hashtags?   : string,
        twitter?    : string,
        media?      : string,
    ) {
        this._location      = location;
        this._url           = url;
        this._title         = title;
        this._description   = description;
        this._quote         = (typeof quote    !== 'undefined') ?  quote   : '';
        this._hashtags      = (typeof hashtags !== 'undefined') ?  hashtags: '';
        this._twitter       = (typeof twitter  !== 'undefined') ?  twitter : '';
        this._media         = (typeof media    !== 'undefined') ?  media   : '';
    }

    get location   (             ): string {
        return this._location;
    }
    set location   (value: string){
        this._location = value;
    }
    get url        (             ): string {
        return this._url;
    }
    set url        (value: string){
        this._url = value;
    }
    get title      (             ): string {
        return this._title;
    }
    set title      (value: string){
        this._title = value;
    }
    get description(             ): string {
        return this._description;
    }
    set description(value: string){
        this._description = value;
    }
    get quote      (             ): string {
        return this._quote;
    }
    set quote      (value: string){
        this._quote = value;
    }
    get hashtags   (             ): string {
        return this._hashtags;
    }
    set hashtags   (value: string){
        this._hashtags = value;
    }
    get twitter    (             ): string {
        return this._twitter;
    }
    set twitter    (value: string){
        this._twitter = value;
    }
    get media      (             ): string {
        return this._media;
    }
    set media      (value: string){
        this._media = value;
    }

}

export {ShareButtonSettings};