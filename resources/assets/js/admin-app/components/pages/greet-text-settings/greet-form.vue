// @flow

<template lang="pug">

    el-form(:model="inputs", :rules="rules", label-position="left", ref="greetForm")

        el-form-item(v-if="LANGUAGES.RUSSIAN === language", label="Введите текст для русскоязычной версии сайта", prop="greetTextRu")
            el-input(type="textarea", v-model="inputs.greetTextRu")
        el-form-item(v-if="LANGUAGES.SLOVAK  === language" , label="Zadajte text pre ruských jazykovej verzii webu", prop="greetTextRu")
            el-input(type="textarea", v-model="inputs.greetTextRu")

        el-form-item(v-if="LANGUAGES.RUSSIAN === language", label="Введите текст для англоязычной версии сайта", prop="greetTextEn")
            el-input(type="textarea", v-model="inputs.greetTextEn")
        el-form-item(v-if="LANGUAGES.SLOVAK  === language" , label="Zadávanie text pre anglickú verziu webu", prop="greetTextEn")
            el-input(type="textarea", v-model="inputs.greetTextEn")

        el-form-item(v-if="LANGUAGES.RUSSIAN === language", label="Введите текст для словакоязычной версии сайта", prop="greetTextSl")
            el-input(type="textarea", v-model="inputs.greetTextSl")
        el-form-item(v-if="LANGUAGES.SLOVAK  === language" , label="Zadajte text, pre slovakoyazychnoy verziu webu", prop="greetTextSl")
            el-input(type="textarea", v-model="inputs.greetTextSl")

        el-form-item(v-if="LANGUAGES.RUSSIAN === language", :xs="24", :sm="24", :md="2", :lg="2")
            el-button(type="primary", @click="onFormSubmit") Сохранить
        el-form-item(v-if="LANGUAGES.SLOVAK  === language")
            el-button(type="primary",  @click="onFormSubmit") Udržať

</template>
<style lang="sass">

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import {Cookie} from "../../../../shared-classes/facades/Cookie";
    import LanguageSettings from "../../../mixins/LanguageSettings.vue"
    import ElForm from "../../../../../../../node_modules/element-ui/packages/form/src/form";
    import {LANGUAGES} from "../../../classes/enums/LANGUAGES";
    import ElFormItem from "../../../../../../../node_modules/element-ui/packages/form/src/form-item";

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
            LanguageSettings
        ],

        // --------------------------------------------------------------------
        // DATA FIELDS
        // --------------------------------------------------------------------

        data(){
            const data: {
                LANGUAGES   : Object,
                cookie      : Object,
                inputs      : Object,
            } = {
                LANGUAGES   : LANGUAGES,
                cookie      : Cookie.getInstance(),
                inputs      : {
                    greetTextRu: Cookie.getInstance().get('admin-panel.greet_ru') ?
                                 Cookie.getInstance().get('admin-panel.greet_ru'):'',
                    greetTextEn: Cookie.getInstance().get('admin-panel.greet_en') ?
                                 Cookie.getInstance().get('admin-panel.greet_en'):'',
                    greetTextSl: Cookie.getInstance().get('admin-panel.greet_sl') ?
                                 Cookie.getInstance().get('admin-panel.greet_sl'):'',
                },
                rules       : {
                    greetTextRu: [
                        {
                            required: true,
                            trigger : 'blur, change',
                            message : ''
                        }
                    ],
                    greetTextEn: [
                        {
                            required: true,
                            trigger : 'blur, change'
                        }
                    ],
                    greetTextSl: [
                        {
                            required: true,
                            trigger : 'blur, change'
                        }
                    ]
                },
            };

            return data;
        },

        // --------------------------------------------------------------------
        // COMPUTED FIELDS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // WATCHED FIELDS
        // --------------------------------------------------------------------

        watch: {
            language: {
                handler: function (newLang, oldLang) {

                    // Change language of error messages.
                    if (newLang === LANGUAGES.RUSSIAN) {
                        this.rules.greetTextRu[0].message = "Обязательное поле.";
                        this.rules.greetTextEn[0].message = "Обязательное поле.";
                        this.rules.greetTextSl[0].message = "Обязательное поле.";
                    } else if (newLang === LANGUAGES.SLOVAK) {
                        this.rules.greetTextRu[0].message = "Povinné pole.";
                        this.rules.greetTextEn[0].message = "Povinné pole.";
                        this.rules.greetTextSl[0].message = "Povinné pole.";
                    }
                },
                immediate: true
            },

            /**
             * Save textarea text to cookies.
             */
            'inputs.greetTextRu': {
                handler: function (newText: string, oldText: string) {
                    this.cookie.set('admin-panel.greet_ru', newText);
                }
            },

            /**
             * Save textarea text to cookies.
             */
            'inputs.greetTextEn': {
                handler: function (newText: string, oldText: string) {
                    this.cookie.set('admin-panel.greet_en', newText);
                }
            },

            /**
             * Save textarea text to cookies.
             */
            'inputs.greetTextSl': {
                handler: function (newText: string, oldText: string) {
                    this.cookie.set('admin-panel.greet_sl', newText);
                }
            }
        },

        // --------------------------------------------------------------------
        // METHODS
        // --------------------------------------------------------------------

        methods: {

            // EVENT HANDLERS

            onFormSubmit() {
                this.$refs['greetForm'].validate((valid) => {

                    // IF inputs are VALID
                    if (valid) {

                        // RESET COOKIES
                        {
                            this.cookie.del('admin-panel.greet_ru');
                            this.cookie.del('admin-panel.greet_en');
                            this.cookie.del('admin-panel.greet_sl');
                        }
                    }
                });
            },
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted(){

        },

        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------

        components: {
            ElFormItem,
            ElForm
        },

    };

</script>