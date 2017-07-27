// @flow

import {ShareButtonSettings} from "../../shared-classes/entities/ShareButtonSettings";

export default {
    namespaced  : true,
    state       : {
        settings: {
            location    : '',
            url         : '',
            title       : '',
            description : '',
            quote       : '',
            hashtags    : '',
            twitter     : '',
            media       : '',
        },
    },
    getters: {
        facebookShareButtonSettings(state) {

            //CLONE STATE
            const settings = {
                location    : state.settings.location,
                url         : state.settings.url        ,
                title       : state.settings.title      ,
                description : state.settings.description,
                quote       : state.settings.quote      ,
                hashtags    : state.settings.hashtags   ,
                twitter     : state.settings.twitter    ,
                media       : state.settings.media      ,
            };

            // RETURN
            return settings;
        }
    },
    mutations: {
        setFacebookShareButtonSettings    (state, settings: ShareButtonSettings){

            // CLONE INPUT & UPDATE STATE

            state.settings.location     = settings.location;
            state.settings.url          = settings.url;
            state.settings.title        = settings.title;
            state.settings.description  = settings.description;
            state.settings.quote        = settings.quote;
            state.settings.hashtags     = settings.hashtags;
            state.settings.twitter      = settings.twitter;
            state.settings.media        = settings.media;
        },
    },
    actions: {
        loadFacebookShareButtonSettings(context, location: string){

            return new Promise((resolve, reject)=>{

                // SEND REQUEST
                window.axios.post('/api/admin/panel/share-button', {
                    location: location,
                }).then(
                    (response) => {

                        console.log('response =>')
                        console.log(response)

                        // SAVE LOADED STATE
                        context.commit(
                            'setFacebookShareButtonSettings',
                            new ShareButtonSettings(
                                response.data.settings.location,
                                response.data.settings.url,
                                response.data.settings.title,
                                response.data.settings.description,
                                response.data.settings.quote,
                                response.data.settings.hashtags,
                                response.data.settings.twitter,
                                response.data.settings.media,
                            )
                        );
                        resolve(response);
                    }
                ).catch(
                    (error)   => {

                        reject(error);
                    }
                );
            });
        },
        updateFacebookShareButtonSettings(context, settings: ShareButtonSettings) {

            return new Promise((resolve, reject) => {

                // CLONE INPUT
                const settingsClone = new ShareButtonSettings(
                    settings.location,
                    settings.url,
                    settings.title,
                    settings.description,
                    settings.quote,
                    settings.hashtags,
                    settings.twitter,
                    settings.media,
                );

                // SEND REQUEST
                window.axios.patch('/api/admin/panel/share-button', {
                        location    : settingsClone.location,
                        url         : settingsClone.url,
                        title       : settingsClone.title,
                        description : settingsClone.description,
                        quote       : settingsClone.quote,
                        hashtags    : settingsClone.hashtags,
                        twitter     : settingsClone.twitter,
                        media       : settingsClone.media,
                    }
                ).then(
                    (response) => {

                        // UPDATE STATE
                        context.commit(
                            'setFacebookShareButtonSettings',
                            settingsClone
                        );
                        resolve(response);
                    }
                ).catch(
                    (error) => {
                        reject(error);
                    }
                );
            });
        },
        deleteFacebookShareButtonSettings(context, location: string){
            return new Promise((resolve, reject)=>{

                // SEND REQUEST
                window.axios.delete('/api/admin/panel/share-button/' + location).then(
                    (response) => {

                        // UPDATE STATE
                        context.commit(
                            'setFacebookShareButtonSettings',
                            new ShareButtonSettings('Home-page', '', '', '', '', '', '', ''),
                        );
                        resolve(response);
                    }
                ).catch(
                    (error) => {

                        reject(error);
                    }
                );
            });
        }
    }
}