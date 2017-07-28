<template lang="pug">


    el-form(:model="inputs", :rules="rules", label-position="left", ref="form")

        el-form-item(v-if="LANGUAGES.RUSSIAN === language", label="Ссылка на русскоязычный виджет для он-лайн заказ:", prop="url")
            el-input(v-model="inputs.url", v-cloak)
        el-form-item(v-if="LANGUAGES.SLOVAK  === language", label="Odkaz na rusky hovoriace widget pre on-line objednávky:", prop="url")
            el-input(v-model="inputs.url", v-cloak)

        el-form-item(v-if="LANGUAGES.RUSSIAN === language", :xs="24", :sm="24", :md="2", :lg="2")
            el-button(:type="buttons.save.type", @click="onSaveButtonClick") Сохранить
            el-button(:type="buttons.save.type", @click="onDeleteButtonClick") Удалить
        el-form-item(v-if="LANGUAGES.SLOVAK  === language")
            el-button(:type="buttons.save.type", @click="onSaveButtonClick") Udržať
            el-button(:type="buttons.save.type", @click="onDeleteButtonClick") Vymazať

</template>
<style lang="sass">

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import LanguageSettings from "../../../mixins/LanguageSettings.vue"
    import UserMessage      from "../../../mixins/UserMessage.vue"

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
        ],

        // --------------------------------------------------------------------
        // DATA FIELDS
        // --------------------------------------------------------------------

        data(){
            const data: {
                inputs: {
                    srcToRussianLanguageWidget  : string,
                }
            } = {
                inputs: {
                    srcToRussianLanguageWidget  : '',
                },
                rules: {

                }
            }
        }

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