// @flow

import {Vacancy} from "../../shared-classes/entities/Vacancy";

export default {
    namespaced: true,

    state: {
        vacancies: [],
    },

    getters:{
        vacancies(state){
            return state.vacancies.map(vacancy => vacancy.clone());
        }
    },

    mutations:{
        updateVacancies (state, vacancies: Vacancy[]){
             state.vacancies = vacancies.map(vacancy => vacancy.clone());
        },
        createVacancy   (state, vacancy  : Vacancy  ){
            state.vacancies.push(vacancy.clone());
        },
        updateVacancy   (state, data     : Vacancy  ){

            const vacancy: Vacancy | undefined = state.vacancies.find(i => {
                return parseInt(i.id) === data.id;
            });

            if (typeof vacancy !== 'undefined') {

                vacancy.id              = data.id;
                vacancy.nameRu          = data.nameRu;
                vacancy.nameEn          = data.nameEn;
                vacancy.nameSl          = data.nameSl;
                vacancy.contacts        = data.contacts;
                vacancy.descriptionRu   = data.descriptionRu;
                vacancy.descriptionEn   = data.descriptionEn;
                vacancy.descriptionSl   = data.descriptionSl;
                vacancy.openedAt        = data.openedAt;

            } else {
                throw new Error("Vacancy can't be update at the " +
                    "'vuex' storage list. It has wrong id.");
            }
        },
        deleteVacancy   (state, vacancy  : Vacancy  ){

            if (state.vacancies.length !== 0) {

                let updatedVacancies = state.vacancies.filter((i, id) => {
                    return parseInt(i.id) !== vacancy.id;
                });

                state.vacancies = updatedVacancies;
                updatedVacancies = null;
            } else {
                throw new Error("Length of the storage vacancies list is " +
                    "equal to 0. Vacancy can't be delete from the 'vuex' storage " +
                    "list, because the list is empty.");
            }
        }
    },

    actions:{
        loadVacancies(context){

            return new Promise((resolve, reject) => {
                window.axios.get(
                    "/api/admin/panel/vacancies"
                ).then(
                    (response) => {

                        let vacancies: Vacancy[] = response.data.vacancies.map(i=>{
                            return new Vacancy(
                                parseInt(i.id),
                                i.name_ru,
                                i.name_en,
                                i.name_sl,
                                i.contacts,
                                i.description_ru,
                                i.description_en,
                                i.description_sl,
                                new Date(Date.parse(i.opened_at)), //UTC Date string format to Date
                            )
                        });

                        context.commit('updateVacancies', vacancies);
                        resolve(response);
                    }
                ).catch(
                    (error) => {
                        reject(error);
                    }
                );
            });
        },
        createVacancy(context, vacancy: Vacancy) {

            return new Promise((resolve, reject) => {
                window.axios.post(
                    '/api/admin/panel/vacancy', {
                        nameRu        : vacancy.nameRu,
                        nameEn        : vacancy.nameEn,
                        nameSl        : vacancy.nameSl,
                        contacts      : vacancy.contacts,
                        descriptionRu : vacancy.descriptionRu,
                        descriptionEn : vacancy.descriptionEn,
                        descriptionSl : vacancy.descriptionSl,
                        openedAt      : vacancy.openedAt.toUTCString(),
                    }
                ).then(
                    response => {
                        // Get from response new ID of the vacancy record
                        vacancy.id = response.data.id;
                        context.commit('createVacancy', vacancy);
                        resolve(response);
                    }
                ).catch(
                    error    => {
                        reject(error);
                    }
                );
            });
        },
        updateVacancy(context, vacancy: Vacancy) {

            return new Promise((resolve, reject) => {
                window.axios.patch(
                    '/api/admin/panel/vacancy/' + vacancy.id, {
                        nameRu        : vacancy.nameRu,
                        nameEn        : vacancy.nameEn,
                        nameSl        : vacancy.nameSl,
                        contacts      : vacancy.contacts,
                        descriptionRu : vacancy.descriptionRu,
                        descriptionEn : vacancy.descriptionEn,
                        descriptionSl : vacancy.descriptionSl,
                    }
                ).then(
                    (response) => {
                        context.commit('updateVacancy', vacancy);
                        resolve(response);
                    }
                ).catch(
                    (error)    => {
                        reject(error);
                    }
                );
            });
        },
        deleteVacancy(context, vacancy: Vacancy) {

            return new Promise((resolve, reject) => {
                window.axios.delete(
                    '/api/admin/panel/vacancy/' + vacancy.id
                ).then(
                    response => {
                        context.commit('deleteVacancy', vacancy);
                        resolve(response);
                    }
                ).catch(
                    error => {
                        reject(error);
                    }
                );
            });
        },
    }
}