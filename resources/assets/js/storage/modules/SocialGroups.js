// @flow

export default {
    namespaced: true,
    state: {
        facebookGroup : '',
        instagramGroup: '',
    },
    getters: {
        facebookGroupReference(state) {
            return state.facebookGroup;
        },
        instagramGroupReference(state) {
            return state.instagramGroup;
        },
    },
    mutations: {
        setFacebookGroupReference(state, reference: string) {
            state.facebookGroup = reference;
        },
        setInstagramGroupReference(state, reference: string) {
            state.instagramGroup = reference;
        },
    },
    actions: {
        loadFacebookGroupReference   (context) {

            return new Promise((resolve, reject) => {
                window.axios.post('/api/admin/panel/facebook-group').then(
                    (response) => {
                        context.commit('setFacebookGroupReference',
                            response.data.reference
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
        loadInstagramGroupReference  (context) {

            return new Promise((resolve, reject) => {
                window.axios.get('/api/admin/panel/instagram-group').then(
                    (response) => {
                        context.commit('setInstagramGroupReference',
                            response.data.reference
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
        uploadFacebookGroupReference (context, reference) {

            return new Promise((resolve, reject) => {
                window.axios.post('/api/admin/panel/facebook-group', {
                    reference: reference,
                }).then(
                    (response) => {
                        context.commit('setFacebookGroupReference', reference);
                        resolve(response);
                    }
                ).catch(
                    (error) => {
                        reject(error);
                    }
                );
            });
        },
        uploadInstagramGroupReference(context, reference) {

            return new Promise((resolve, reject) => {
                window.axios.post('/api/admin/panel/instagram-group',{
                    reference: reference,
                }).then(
                    (response) => {
                        context.commit('setInstagramGroupReference', reference);
                        resolve(response);
                    }
                ).catch(
                    (error) => {
                        reject(error);
                    }
                );
            });
        },
        deleteFacebookGroupReference (context) {

            return new Promise((resolve, reject) => {
                window.axios.delete('/api/admin/panel/facebook-group').then(
                    (response) => {
                        context.commit('setFacebookGroupReference', '');
                        resolve(response);
                    }
                ).catch(
                    (error) => {
                        reject(error);
                    }
                );
            });
        },
        deleteInstagramGroupReference(context) {

            return new Promise((resolve, reject) => {
                window.axios.delete('/api/admin/panel/instagram-group').then(
                    (response) => {
                        context.commit('setInstagramGroupReference', '');
                        resolve(response);
                    }
                ).catch(
                    (error) => {
                        reject(error);
                    }
                );
            });
        },
    },
}