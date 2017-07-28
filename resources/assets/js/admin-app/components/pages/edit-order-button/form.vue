// @flow

<template lang="pug">

    el-form(:model="inputs", :rules="rules", label-position="left", ref="form")

        el-form-item(v-if="LANGUAGES.RUSSIAN === language", label="Ссылка на русскоязычный виджет для он-лайн заказ:", prop="url")
            el-input(v-model="inputs.url", v-cloak)
        el-form-item(v-if="LANGUAGES.SLOVAK  === language", label="Odkaz na rusky hovoriace widget pre on-line objednávky:", prop="url")
            el-input(v-model="inputs.url", v-cloak)


        el-form-item(v-if="LANGUAGES.RUSSIAN === language", label="Ссылка на англоязычный виджет для он-лайн заказ:", prop="url")
            el-input(v-model="inputs.url", v-cloak)
        el-form-item(v-if="LANGUAGES.SLOVAK  === language", label="Odkaz na anglickej jazykovej widget pre on-line objednávky:", prop="url")
            el-input(v-model="inputs.url", v-cloak)

        el-form-item(v-if="LANGUAGES.RUSSIAN === language", label="Ссылка на словакоязычный виджет для он-лайн заказ:", prop="url")
            el-input(v-model="inputs.url", v-cloak)
        el-form-item(v-if="LANGUAGES.SLOVAK  === language", label="Odkaz na slovakoyazychny widget pre on-line objednávky:", prop="url")
            el-input(v-model="inputs.url", v-cloak)
</template>
<style lang="sass">

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------


    // ------------------------------------------------------------------------
    // COMPONENT
    // ------------------------------------------------------------------------

    export default {

        // --------------------------------------------------------------------
        // PROPERTIES
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // DATA FIELDS
        // --------------------------------------------------------------------

        data(){
            const data: {
                inputs: {
                    srcToRussianLanguageWidget  : string,
                    srcToEnglishLanguageWidget  : string,
                    srcToSlovakLanguageWidget   : string,
                }
            } = {
                inputs: {
                    srcToRussianLanguageWidget  : '',
                    srcToEnglishLanguageWidget  : '',
                    srcToSlovakLanguageWidget   : '',
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