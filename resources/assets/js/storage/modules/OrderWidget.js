// @flow


import {Widget} from "../../shared-classes/entities/Widget";

export default {

    namespaced: true,

    state: {
        russianOrderWidget: {
            src: '',
        },
        englishOrderWidget: {
            src: '',
        },
        slovakOrderWidget: {
            src: '',
        },
    },

    getters: {
        russianOrderWidget(state) {
            return new Widget('', '', state.russianOrderWidget.src );
        },
        englishOrderWidget(state) {
            return new Widget('', '', state.englishOrderWidget.src);
        },
        slovakOrderWidget(state) {
            return new Widget('', '', state.slovakOrderWidget.src );
        },
    },

    mutations: {
        setRussianOrderWidget(state, widget: Widget) {
            state.russianOrderWidget.src = widget.src;
        },
        setEnglishOrderWidget(state, widget: Widget) {
            state.englishOrderWidget.src = widget.src;
        },
        setSlovakOrderWidget (state, widget: Widget) {
            state.slovakOrderWidget.src  = widget.src;
        },
    },

    actions: {
        loadRussianOrderWidget   (context) {

            return new Promise((resolve, reject)=>{
                window.axios.post('/api/admin/panel/order-widget', {
                    name    : 'Yclients',
                    language: 'Russian',
                }).then((response) => {

                    console.log('response => LOAD_RUSSIA_WIDGET()');
                    console.log(response.data.widget.src);

                    context.commit('setRussianOrderWidget', new Widget(
                        'Yclients',
                        'Russian',
                        response.data.widget.src,
                    ));
                    resolve(response);
                }).catch((error) => {

                    console.log('error => loadRussianOrderWidget()');
                    console.log(error);
                    reject(error);
                });
            });
        },
        loadEnglishOrderWidget   (context) {

            return new Promise((resolve, reject)=>{
                window.axios.post('/api/admin/panel/order-widget', {
                    name    : 'Yclients',
                    language: 'English',
                }).then((response) => {

                    console.log('response => LOAD_ENGLISH_WIDGET()');
                    console.log(response.data.widget.src);

                    context.commit('setEnglishOrderWidget', new Widget(
                        'Yclients',
                        'English',
                        response.data.widget.src,
                    ));
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
            });
        },
        loadSlovakOrderWidget    (context) {

            return new Promise((resolve, reject)=>{
                window.axios.post('/api/admin/panel/order-widget', {
                    name    : 'Yclients',
                    language: 'Slovak',
                }).then((response) => {

                    console.log('response => LOAD_SLOVAK_WIDGET()');
                    console.log(response.data.widget.src);

                    context.commit(
                        'setSlovakOrderWidget',
                        new Widget(
                            'Yclients',
                            'Slovak',
                            response.data.widget.src,
                        )
                    );
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
            });
        },

        updateRussianOrderWidget (context, src: string) {

            return new Promise((resolve, reject)=>{
                window.axios.patch('/api/admin/panel/order-widget', {
                    name    : 'Yclients',
                    language: 'Russian',
                    src     : src,
                }).then((response) => {
                    context.commit('setRussianOrderWidget', new Widget('','',src));
                    resolve(response);
                }).catch((error  ) => {
                    reject(error);
                });
            });
        },
        updateEnglishOrderWidget (context, src: string) {

            return new Promise((resolve, reject)=>{
                window.axios.patch('/api/admin/panel/order-widget', {
                    name    : 'Yclients',
                    language: 'English' ,
                    src     : src       ,
                }).then((response)=>{
                    context.commit('setEnglishOrderWidget', new Widget('','',src));
                    resolve(response);
                }).catch((error  )=>{
                    reject(error);
                });
            });
        },
        updateSlovakOrderWidget  (context, src: string) {

            return new Promise((resolve, reject)=>{
                window.axios.patch('/api/admin/panel/order-widget', {
                    name    : 'Yclients',
                    language: 'Slovak'  ,
                    src     : src       ,
                }).then((response)=>{
                    context.commit('setSlovakOrderWidget', new Widget('','',src));
                    resolve(response);
                }).catch((error  )=>{
                    reject(error);
                });
            });
        },

        deleteRussianOrderWidget (context) {

            return new Promise((resolve, reject)=>{
                window.axios.delete(
                    '/api/admin/panel/order-widget/Yclients/Russian'
                ).then((response) => {
                    context.commit('setRussianOrderWidget', new Widget('','',''));
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
            });
        },
        deleteEnglishOrderWidget (context) {

            return new Promise((resolve, reject)=>{
                window.axios.delete(
                    '/api/admin/panel/order-widget/Yclients/English'
                ).then((response) => {
                    context.commit('setEnglishOrderWidget', new Widget('','',''));
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
            });
        },
        deleteSlovakOrderWidget  (context) {

            return new Promise((resolve, reject)=>{
                window.axios.delete(
                    '/api/admin/panel/order-widget/Yclients/Slovak'
                ).then((response) => {
                    context.commit('setSlovakOrderWidget', new Widget('','',''));
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
            });
        },
    },
}