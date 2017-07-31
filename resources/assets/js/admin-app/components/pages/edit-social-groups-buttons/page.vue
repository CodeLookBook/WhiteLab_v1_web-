<template lang="pug">

    el-row
        el-col(
            :xs="{span:22, offset: 1}",
            :sm="{span:22, offset: 1}",
            :md="{span:14, offset: 1}",
            :lg="{span:12, offset: 1}",
        )
            h3(v-if="ADMIN_APP_LANGUAGES.RUSSIAN   === language") РЕДАКТИРОВАНИЕ ССЫЛОК НА ГРУППЫ В СОЦИАЛЬНЫХ СЕТЯХ
            h3(v-else="ADMIN_APP_LANGUAGES.SLOVAK  === language") ÚPRAVY ODKAZ NA STRANE V SOCIÁLNYCH SIEŤACH

            h6(v-if="ADMIN_APP_LANGUAGES.RUSSIAN   === language") Отредактируйте ссылку на необходимую группу и выберите одно из доступных действий: 'Cохранить', 'Удалить'.
            h6(v-else="ADMIN_APP_LANGUAGES.SLOVAK  === language") Upraviť odkaz na požadovanú skupinu a zvoľte jednu z dostupných akcií: "Save", "Delete".

            h6(v-if="ADMIN_APP_LANGUAGES.RUSSIAN   === language") ВНИМАНИЕ: При создании ссылки на группу обязательно указывать полный адресс домена. Пример правильной записи домена: https://www.facebook.com/group/YourGroupName. Пример неправильной записи домена: a) https: facebook.com/group/YourGroupName, b) facebook.com/group/YourGroupName. Другими словами: "https://www" обязательная часть.
            h6(v-else="ADMIN_APP_LANGUAGES.SLOVAK  === language") POZNÁMKA: Pri vytváraní skupiny odkazov je nutné zadať úplnú adresu domény. Príklad domény správny záznam: https://www.facebook.com/group/YourGroupName. Príklad domény nesprávne záznamu: a) https:facebook.com/group/YourGroupName, b) facebook.com/group/YourGroupName. Inými slovami: "https://www" povinnou súčasťou.

            fb-form
            in-form


</template>
<style lang="sass">

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import LanguageSettings from "../../../mixins/LanguageSettings.vue"
    import UserMessage      from "../../../mixins/UserMessage.vue"
    import FbForm           from "./fb-form.vue"
    import InForm           from "./in-form.vue"
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
            UserMessage,
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
            FbForm,
            InForm,
        }

    };

</script>