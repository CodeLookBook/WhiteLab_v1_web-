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

                    H6(v-if="ADMIN_APP_LANGUAGES.RUSSIAN === language") Нажмите кнопку "Выбрать файл" и укажите путь к новому файлу с прайсом. После, нажмите кнопку "Сохранить". Новый прайс будет отправлен и сохранен на сервере.
                    H6(v-if="ADMIN_APP_LANGUAGES.SLOVAK  === language") Kliknite na tlačidlo "Select file" tlačidlo a zadajte cestu do nového súboru s cenníkom. Po tom, kliknite na tlačidlo "Udržať". Bude nová cena bude odoslaná a uložené na serveri.

            el-upload(
                class="upload-demo",
                ref="upload",
                action="https://jsonplaceholder.typicode.com/posts/",
                :auto-upload="false"
            )
                el-button(v-if="ADMIN_APP_LANGUAGES.RUSSIAN === language", slot="trigger", size="small", type="primary") Выбрать файл
                el-button(v-if="ADMIN_APP_LANGUAGES.SLOVAK  === language", slot="trigger", size="small", type="primary") Select file

                el-button(v-if="ADMIN_APP_LANGUAGES.RUSSIAN === language", style="margin-left: 10px;", size="small", type="success", @click="submitUpload") Сохранить
                el-button(v-if="ADMIN_APP_LANGUAGES.SLOVAK  === language", style="margin-left: 10px;", size="small", type="success", @click="submitUpload") Udržať

                div(class="el-upload__tip" slot="tip") jpg/png files with a size less than 1500kb
                div(class="el-upload__tip" slot="tip") jpg/png files with a size less than 1500kb
    </el-upload>

</template>
<style lang="sass">

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import LanguageSettings from "../../../mixins/LanguageSettings.vue"

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
        ]

        // --------------------------------------------------------------------
        // DATA FIELDS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // COMPUTED FIELDS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // WATCHED FIELDS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // METHODS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------


    };

</script>