// @flow

<template lang="pug">

</template>
<style lang="sass">

    .CUSTOM-ALERT-WINDOW-CLASS
        @media(max-width: 420px)
            width: 100% !important
            /*height: 100% !important*/

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import LanguageSettings from "./LanguageSettings.vue";

    // ------------------------------------------------------------------------
    // COMPONENT
    // ------------------------------------------------------------------------

    import {LANGUAGES} from "../classes/enums/LANGUAGES";

    export default {

        // --------------------------------------------------------------------
        // PROPERTIES
        // --------------------------------------------------------------------

        // --------------------------------------------------------------------
        // MIXINS
        // --------------------------------------------------------------------

        mixins: [
            'LanguageSettings'
        ],

        // --------------------------------------------------------------------
        // DATA FIELDS
        // --------------------------------------------------------------------

        data(){
            const data: {
                LANGUAGES: Object,
            } = {
                LANGUAGES: LANGUAGES,
            };

            return data;
        },

        // --------------------------------------------------------------------
        // COMPUTED FIELDS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // WATCHED FIELDS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // METHODS
        // --------------------------------------------------------------------

        methods: {
            showTokenErrorAlert      () {

                let title       : string = ''
                let errorMessage: string = '';

                switch (this.language){
                    case this.LANGUAGES.RUSSIAN:
                        title        = 'Уведомление';
                        errorMessage = 'Выполните повторный вход в систему ' +
                            'введя пароль и логин пользователя.';
                        break;
                    case this.LANGUAGES.SLOVAK:
                        title        = 'Oznámenie';
                        errorMessage = "Sledujte opätovný vstup do systému" +
                        ", zadajte heslo a užívateľské meno.";
                        break;
                    default:
                        title        = 'Уведомление'
                        errorMessage = 'Выполните повторный вход в систему ' +
                            'введя пароль и логин пользователя.';
                }

                this.$alert(errorMessage, title, {
                    confirmButtonText: 'OK',
                    callback: action => {
                        this.$router.push({name: 'login'});
                    },
                    customClass: "CUSTOM-ALERT-WINDOW-CLASS",
                });
            },
            showDataLoadErrorAlert   () {

                let title       : string = ''
                let errorMessage: string = '';

                switch (this.language){
                    case this.LANGUAGES.RUSSIAN:
                        title        = 'Уведомление';
                        errorMessage = 'Ошибка загрузки данных. Попробуйте ' +
                            'повторить попытку через некоторое время.';
                        break;
                    case this.LANGUAGES.SLOVAK:
                        title        = 'Oznámenie';
                        errorMessage = "Chyba pri načítaní dát. Skúste to " +
                            "znova po nejakej dobe.";
                        break;
                    default:
                        title        = 'Уведомление';
                        errorMessage = 'Ошибка загрузки данных. Попробуйте ' +
                            'повторить попытку через некоторое время.';
                }

                this.$alert(errorMessage, title, {
                    confirmButtonText: 'OK',
                    callback: action => {
                    },
                    customClass: "CUSTOM-ALERT-WINDOW-CLASS",
                });
            },
            showDataUploadErrorAlert () {
                let title       : string = ''
                let errorMessage: string = '';

                switch (this.language){
                    case this.LANGUAGES.RUSSIAN:
                        title        = 'Уведомление';
                        errorMessage = 'Ошибка отправки данных. ' +
                            'Изменения не сохранены. Попробуйте ' +
                            'повторить попытку через некоторое время.';
                        break;
                    case this.LANGUAGES.SLOVAK:
                        title        = 'Oznámenie';
                        errorMessage = "Chyba pri odosielaní dát. " +
                            "Zmeny nie sú uložené. Skúste to znova " +
                            "po nejakej dobe.";
                        break;
                    default:
                        title        = 'Уведомление';
                        errorMessage = 'Ошибка отправки данных. ' +
                            'Изменения не сохранены. Попробуйте ' +
                            'повторить попытку через некоторое время.';
                }

                this.$alert(errorMessage, title, {
                    confirmButtonText: 'OK',
                    callback: action => {
                    },
                    customClass: "CUSTOM-ALERT-WINDOW-CLASS",
                });
            },
            showDataUploadSuccessMessage(){
                this.$message({
                    message: (function(component){

                        let msg = '';

                        switch (component.language){
                            case component.LANGUAGES.RUSSIAN:
                                msg = 'Данные сохранены.';
                                break;
                            case component.LANGUAGES.SLOVAK:
                                msg = 'Dáta sú uložené.';
                                break;
                            default:
                                msg = 'Данные сохранены.';
                        }

                        return msg;
                    }(this)),
                    showClose: true,
                    type: 'success',
                });
            },
            showPDFFileTypeErrorAlert() {

                let title       : string = ''
                let errorMessage: string = '';

                switch (this.language){
                    case this.LANGUAGES.RUSSIAN:
                        title        = 'Уведомление';
                        errorMessage = 'Файл должен иметь PDF формат.';
                        break;
                    case this.LANGUAGES.SLOVAK:
                        title        = 'Oznámenie';
                        errorMessage = "Súbor musí byť vo formáte PDF.";
                        break;
                    default:
                        title        = 'Уведомление';
                        errorMessage = 'Файл должен иметь PDF формат.';
                }

                this.$alert(errorMessage, title, {
                    confirmButtonText: 'OK',
                    callback: action => {
                    },
                    customClass: "CUSTOM-ALERT-WINDOW-CLASS",
                });
            },
            showFileSizeErrorAlert   () {

                let title       : string = '';
                let errorMessage: string = '';

                switch (this.language){
                    case this.LANGUAGES.RUSSIAN:
                        title        = 'Уведомление';
                        errorMessage = 'Превышен установленный лимит размера файла.' +
                                       'Выберите файл меньшего размера.';
                        break;
                    case this.LANGUAGES.SLOVAK:
                        title        = 'Oznámenie';
                        errorMessage = "Prekročí limit veľkosti súboru." +
                                       "Vyberte menšiu veľkosť súboru.";
                        break;
                    default:
                        title        = 'Уведомление';
                        errorMessage = 'Превышен установленный лимит размера файла.' +
                                       'Выберите файл меньшего размера.';
                }

                this.$alert(errorMessage, title, {
                    confirmButtonText: 'OK',
                    callback: action => {
                    },
                    customClass: "CUSTOM-ALERT-WINDOW-CLASS",
                });
            },
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------


    };

</script>