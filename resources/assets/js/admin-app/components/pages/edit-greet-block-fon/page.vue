<template lang="pug">

    el-row
        el-col(
        :xs="{span:22, offset: 1}",
        :sm="{span:22, offset: 1}",
        :md="{span:14, offset: 1}",
        :lg="{span:12, offset: 1}"
        )
            el-row
                el-col(
                :xs="24",
                :sm="24",
                :md="24",
                :lg="24"
                )
                    h3(v-if="ADMIN_APP_LANGUAGES.RUSSIAN === language") РЕДАКТИРОВАНИЕ ИЗОБРАЖЕНИЯ ФОНА В БЛОКЕ "ПРИВЕТСТВИЕ" НА ДОМАШНЕЙ СТРАНИЦЕ
                    h3(v-if="ADMIN_APP_LANGUAGES.SLOVAK  === language") ÚPRAVY SNÍMOK POZADIA V "VITAJTE!" NA DOMOVSKEJ STRÁNKE

                    H6(v-if="ADMIN_APP_LANGUAGES.RUSSIAN === language") Нажмите кнопку "Выбрать файл" и укажите путь к новому файлу с изображением фона. После того как путь к файлу будет указан новый фон будет отправлен и сохранен на сервере автоматически.
                    H6(v-if="ADMIN_APP_LANGUAGES.SLOVAK  === language") Kliknite na tlačidlo "Vybrať súbor" tlačidlo a zadajte cestu do nového súboru s obrázkom pozadia. Po ceste k novej pozadí bude uvedená bude odoslaný automaticky uložené na serveri.

            el-upload(
            :multiple       ="false",
            :file-list      ="fileList",
            :show-file-list ="true",

            :headers        ="headers",

            :on-change      ="handleChange",
            :before-upload  ="beforeFileUpload",
            :on-success     ="onFileUploadedSuccessfully",
            :on-error       ="onFileUploadedError"

            accept          ="image/jpeg",
            name            ="home-page_greet-block-fon",
            ref             ="upload",
            action          = "/api/admin/panel/home-page_greet-block-fon",
            )

                el-button(v-if="ADMIN_APP_LANGUAGES.RUSSIAN === language", slot="trigger", size="small", type="primary") Выбрать файл
                el-button(v-if="ADMIN_APP_LANGUAGES.SLOVAK  === language", slot="trigger", size="small", type="primary") Select file

                div(v-if="ADMIN_APP_LANGUAGES.RUSSIAN === language", class="el-upload__tip", slot="tip") JPG файлы с размером не более 2MB
                div(v-if="ADMIN_APP_LANGUAGES.SLOVAK  === language", class="el-upload__tip", slot="tip") JPG súborov s maximálnou veľkosťou 2MB


</template>
<style lang="sass">

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import LanguageSettings from "../../../mixins/LanguageSettings.vue"
    import UserMessage      from "../../../mixins/UserMessage.vue"
    import TokenGuard       from "../../../mixins/TokenGuard.vue"
    import {Token} from "../../../../shared-classes/facades/Token";
    // ------------------------------------------------------------------------
    // COMPONENT
    // ------------------------------------------------------------------------

    export default {

        // --------------------------------------------------------------------
        // PROPERTIES
        // --------------------------------------------------------------------

        // --------------------------------------------------------------------
        // MIXINS
        // --------------------------------------------------------------------

        mixins:[
            LanguageSettings,
            UserMessage,
            TokenGuard,
        ],

        // --------------------------------------------------------------------
        // DATA FIELDS
        // --------------------------------------------------------------------

        data(){
            return {
                fileList: [],
                headers: {
                    'Authorization': 'Bearer ' + Token.getInstance().token,
                }
            };
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

            handleChange(file, fileList) {

                /**
                 *  Deletes old selected file from selected file list and
                 *  input new one.
                 * @type {Blob|ArrayBuffer|Array.<T>|string|T[]|Int8Array|any}
                 */
                this.fileList = fileList.slice(-1);
            },

            beforeFileUpload(file) {

                const isJPG  =  file.type === 'image/jpeg';
                const isLt2M = (file.size / 1024 / 1024) < 2;

                if (!isJPG) {
                    this.showJPGFileTypeErrorAlert();
                    this.fileList = [];
                }
                if (!isLt2M) {
                    this.showFileSizeErrorAlert();
                    this.fileList = [];
                }

                return isJPG && isLt2M;
            },

            onFileUploadedSuccessfully(response, file, fileList) {
                this.showDataUploadSuccessMessage();
                this.fileList = [];
            },

            onFileUploadedError(error, file, fileList){
                if(this.token.isLoaded){
                    if(this.token.isExpired()){
                        this.token.del();
                        this.showTokenErrorAlert();
                    } else {
                        this.showDataUploadErrorAlert();
                    }
                } else {
                    this.showTokenErrorAlert();
                }
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