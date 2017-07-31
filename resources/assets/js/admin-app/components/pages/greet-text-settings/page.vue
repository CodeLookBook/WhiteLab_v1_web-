// @flow

<template lang="pug">

    //.GREET-TEXT-SETTINGS.TABLE
        .ROW
            .CELL
    el-row
        el-col(
            :xs="{span:22, offset: 1}",
            :sm="{span:22, offset: 1}",
            :md="{span:14, offset: 1}",
            :lg="{span:12, offset: 1}"
        )
            // RUSSIAN VERSION
            template(v-if="LANGUAGES.RUSSIAN === language")
                h3    РЕДАКТИРОВАНИЕ ТЕКСТА ПРИВЕТСТВИЯ НА ДОМАШНЕЙ СТРАНИЦЕ
                h6    Отредактируйте текст и нажмите кнопку "Сохранить". Сделанные вами изменениями будут отправлены и сохарнены на сервере.

            // SLOVAK VERSION
            template(v-else-if="LANGUAGES.SLOVAK === language")
                h3    ÚPRAVA TEXTU VITAJTE NA DOMOVSKEJ STRÁNKE
                h6    Upravte text a kliknite na tlačidlo "Uložiť". Zmeny, ktoré ste vykonali, budú odoslané na server a soharneny.

            GreetForm



</template>
<style lang="sass" scoped>

    @import "../../../../../sass/shared/mixins"

    .GREET-TEXT-SETTINGS
        position: relative
        +size(100%, 100%)
        +border(#ff58b9)

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import LanguageSettings from "../../../mixins/LanguageSettings.vue"
    import GreetForm        from "./greet-form.vue"
    import {LANGUAGES}      from "../../../classes/enums/LANGUAGES";
    import ElRow            from "element-ui/packages/row/src/row";
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

        mixins: [
            LanguageSettings,
            TokenGuard,
        ],

        // --------------------------------------------------------------------
        // DATA FIELDS
        // --------------------------------------------------------------------

        data(){
            const data: {
                LANGUAGES   : Object,
            } = {
                LANGUAGES   : LANGUAGES
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


        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------

        components: {
            ElRow,
            GreetForm,
        }

    };

</script>