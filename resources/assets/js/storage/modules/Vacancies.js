// @flow

import {Vacancy} from "../../shared-classes/entities/Vacancy";
/*

export default {
    namespaced: true,
    state: {
        vacancies: [],
    },

    getters:{
        vacancies(state){
            return state.vacancies.map(vacancy => vacancy.clone());;
        }
    },

    mutations:{

        updateVacancies(state, vacancies: Vacancy[] | null){
             state.vacancies = vacancies.map(vacancy => vacancy.clone());
        },
        createVacancy(state, vacancy: Vacancy){
            state.vacancies.push(vacancy.clone());
        },
        updateVacancy(state, data: Vacancy){

            const vacancy: Vacancy | undefined = state.vacancies.find(i => {
                return parseInt(i.id) === data.id;
            });

            if (typeof vacancy !== 'undefined') {

                vacancy.id          = data.id;
                vacancy.name        = data.name;
                vacancy.contacts    = data.contacts;
                vacancy.description = data.description;

                // We mustn't update date. Because we don't give
                // user functionality that will change date. User
                // can't do that.
                // vacancy.date = data.date;

            } else {
                throw new Error("Vacancy can't be update at the " +
                    "'vuex' storage list. It has wrong id.");
            }
        },
        deleteVacancy(state, vacancy: Vacancy){

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
        loadList(context){

            return new Promise((resolve, reject) => {
                window.axios.get(
                    "/api/admin/panel/vacancies"
                ).then(
                    response => {

                        let vacancies = response.data.vacancies.map(i=>{
                            return new Vacancy(
                                parseInt(i.id),
                                i.name,
                                i.contacts,
                                i.description,
                                new Date(i.date),
                            )
                        });

                        context.commit('updateVacancies', vacancies);
                        vacancies = null;
                        resolve(response);
                    }
                ).catch(
                    error => {
                        reject(error);
                    }
                );
            });
        },
        createVacancy(context, vacancy: Vacancy){

            return new Promise((resolve, reject) => {
                window.axios.post(
                    '/api/admin/panel/vacancy', {
                        id          : vacancy.id,
                        name        : vacancy.name,
                        contacts    : vacancy.contacts,
                        description : vacancy.description,
                    }
                ).then(
                    response => {
                        context.commit('createVacancy', vacancy);
                        vacancy = null;
                        resolve(response);
                    }
                ).catch(
                    error    => {
                        reject(error);
                    }
                );
            });
        },
        updateVacancy(context, vacancy: Vacancy){

            return new Promise((resolve, reject) => {
                window.axios.patch(
                    '/api/admin/panel/vacancy/' + vacancy.id, {
                        id          : vacancy.id,
                        name        : vacancy.name,
                        contacts    : vacancy.contacts,
                        description : vacancy.description,
                    }
                ).then(
                    response => {
                        context.commit('updateVacancy', vacancy);
                        vacancy = null;
                        resolve(response);
                    }
                ).catch(
                    error    => {
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
                        vacancy = null;
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
}*/
