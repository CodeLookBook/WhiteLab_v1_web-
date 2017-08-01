// @flow

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
                    h3(v-if="ADMIN_APP_LANGUAGES.RUSSIAN === language") РЕДАКТИРОВАНИЕ ПРАЙСА УСЛУГ
                    h3(v-if="ADMIN_APP_LANGUAGES.SLOVAK  === language") CENA EDITORSKÉ SLUŽBY

                    H6(v-if="ADMIN_APP_LANGUAGES.RUSSIAN === language") Нажмите кнопку "Выбрать файл" и укажите путь к новому файлу с прайсом. После того как путь к файлу будет указан новый прайс будет отправлен и сохранен на сервере автоматически.
                    H6(v-if="ADMIN_APP_LANGUAGES.SLOVAK  === language") Kliknite na tlačidlo "Vybrať súbor" tlačidlo a zadajte cestu do nového súboru s cenníkom. Akonáhle sa zobrazí cesta k súboru nová cena bude automaticky odoslaná a uložené na serveri.

            el-upload(
                :multiple       ="false",
                :file-list      ="fileList",
                :show-file-list ="true",

                :headers        ="headers",

                :on-change      ="handleChange",
                :before-upload  ="beforeFileUpload",
                :on-success     ="onFileUploadedSuccessfully",
                :on-error       ="onFileUploadedError"

                accept          ="application/pdf",
                name            ="price",
                ref             ="upload",
                action          = "/api/admin/panel/price",
            )

                el-button(v-if="ADMIN_APP_LANGUAGES.RUSSIAN === language", slot="trigger", size="small", type="primary") Выбрать файл
                el-button(v-if="ADMIN_APP_LANGUAGES.SLOVAK  === language", slot="trigger", size="small", type="primary") Select file

                //el-button(v-if="ADMIN_APP_LANGUAGES.RUSSIAN === language", style="margin-left: 10px;", size="small", type="success", @click="submitFileUpload") Сохранить
                //el-button(v-if="ADMIN_APP_LANGUAGES.SLOVAK  === language", style="margin-left: 10px;", size="small", type="success", @click="submitFileUpload") Udržať

                div(v-if="ADMIN_APP_LANGUAGES.RUSSIAN === language", class="el-upload__tip", slot="tip") .pdf файлы с размером не более 2MB
                div(v-if="ADMIN_APP_LANGUAGES.SLOVAK  === language", class="el-upload__tip", slot="tip") .pdf súborov s maximálnou veľkosťou 2MB

    </el-upload>

</template>
<style lang="sass">

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import LanguageSettings from "../../../mixins/LanguageSettings.vue"
    import UserMessage      from "../../../mixins/UserMessage.vue"
    import {Token}          from "../../../../shared-classes/facades/Token";
    import TokenGuard       from "../../../mixins/TokenGuard.vue"

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

                const isPDF  =  file.type === 'application/pdf';
                const isLt2M = (file.size / 1024 / 1024) < 2;

                if (!isPDF) {
                    this.showPDFFileTypeErrorAlert();
                    this.fileList = [];
                }
                if (!isLt2M) {
                    this.showFileSizeErrorAlert();
                    this.fileList = [];
                }

                return isPDF && isLt2M;
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