// @flow

<template lang="pug">

    el-row
        el-col(
            :xs="{span:22, offset: 1}",
            :sm="{span:22, offset: 1}",
            :md="{span:14, offset: 1}",
            :lg="{span:12, offset: 1}",
        )
            h3(v-if="ADMIN_APP_LANGUAGES.RUSSIAN   === language") РЕДАКТИРОВАНИЕ КНОПКИ "ЗАКАЗАТЬ" РАСПОЛОЖЕННОЙ НА СТАРТОВОЙ СТРАНИЦЕ
            h3(v-else="ADMIN_APP_LANGUAGES.SLOVAK  === language") EDIT TLAČIDLO "OBJEDNAŤ", KTORÝ SA NACHÁDZA NA DOMOVSKEJ STRÁNKE

            h6(v-if="ADMIN_APP_LANGUAGES.RUSSIAN   === language") Отредактируйте настройки кнопки и выберите одно из доступных действий: 'Сохранить', 'Удалить'.
            h6(v-else="ADMIN_APP_LANGUAGES.SLOVAK  === language") Tlačidlo Upraviť nastavenia a vyberte jednu z dostupných akcií: "Save", "Delete".

            ru-widget-form
            en-widget-form
            sl-widget-form

</template>
<style lang="sass">

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import LanguageSettings from "../../../mixins/LanguageSettings.vue"
    import TokenGuard       from "../../../mixins/TokenGuard.vue"
    import RuWidgetForm     from "./ru-widget-form.vue"
    import EnWidgetForm     from "./en-widget-form.vue"
    import SlWidgetForm     from "./sl-widget-form.vue"
    import {mapActions}     from "vuex";

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
            RuWidgetForm,
            EnWidgetForm,
            SlWidgetForm,
        }

    };

</script>