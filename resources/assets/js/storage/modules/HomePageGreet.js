// @flow

import {Token} from "../../shared-classes/facades/Token";
import {Greet} from "../../shared-classes/entities/Greet";
import {reject, resolve} from "es6-promise";

export default {

    namespaced: true,

    state: {
        russian: '',
        english: '',
        slovak:  '',
    },

    getters: {
        greetTextRu(state): string {
            return state.russian;
        },
        greetTextEn(state): string {
            return state.english;
        },
        greetTextSl(state): string {
            return state.slovak;
        },
    },

    mutations: {
        setGreet (state, greet: Greet) {
            state.russian = greet.russian;
            state.english = greet.english;
            state.slovak  = greet.slovak;
        },
    },

    actions: {
        downloadGreet(context) {

            return new Promise((resolve, reject) => {
                window.axios.post("/api/admin/panel/greet").then(function (response) {

                    const greet = new Greet(
                        response.data.greet.russian,
                        response.data.greet.english,
                        response.data.greet.slovak ,
                    );

                    // Save data to Vuex storage
                    context.commit('setGreet', greet);
                    resolve(response);
                }).catch(function (error) {
                    reject(error);
                });
            });
        },

        uploadGreet(context, greet: Greet){

            return new Promise((resolve, reject) => {
                window.axios.patch("/api/admin/panel/greet/", {
                    russian: greet.russian,
                    english: greet.english,
                    slovak : greet.slovak,
                }).then(function (response) {

                    // Save data to Vuex storage
                    context.commit('setGreet', greet);
                    resolve(response);
                }).catch(function (error) {
                    reject(error);
                });
            });
        },

        deleteGreet(context) {

            return new Promise((resolve, reject) => {

                //We don't have to send any data to server.
                window.axios.delete("/api/admin/panel/greet/").then(
                    function (response) {
                        const greet = new Greet('','','');

                        // Save data to Vuex storage
                        context.commit('setGreet', greet);
                        resolve(response);
                    }).catch(
                    function (error) {
                        reject(error);
                    });
                }
            );
        }
    }
}
