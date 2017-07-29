// @flow

<template lang="pug">

    el-form(:model="inputs", :rules="rules", label-position="left", ref="form")

        el-form-item(v-if="ADMIN_APP_LANGUAGES.RUSSIAN === language", label="Ссылка на англоязычный виджет для он-лайн заказа:", prop="src")
            el-input(v-model="inputs.src",  placeholder="src", v-cloak)
        el-form-item(v-if="ADMIN_APP_LANGUAGES.SLOVAK  === language", label="Odkaz na anglickej jazykovej widget pre on-line objednávky:", prop="src")
            el-input(v-model="inputs.src", placeholder="src", v-cloak)

        el-form-item(v-if="ADMIN_APP_LANGUAGES.RUSSIAN === language", :xs="24", :sm="24", :md="2", :lg="2")
            el-button(:type="buttons.save.type", @click="onSaveButtonClick") Сохранить
            el-button(:type="buttons.save.type", @click="onDeleteButtonClick") Удалить
        el-form-item(v-if="ADMIN_APP_LANGUAGES.SLOVAK  === language")
            el-button(:type="buttons.del.type", @click="onSaveButtonClick") Udržať
            el-button(:type="buttons.del.type", @click="onDeleteButtonClick") Vymazať

</template>
<style lang="sass">

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import LanguageSettings from "../../../mixins/LanguageSettings.vue"
    import UserMessage      from "../../../mixins/UserMessage.vue"
    import {mapActions, mapGetters} from "vuex";
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

        mixins: [
            LanguageSettings,
            UserMessage,
        ],

        // --------------------------------------------------------------------
        // DATA FIELDS
        // --------------------------------------------------------------------

        data(){
            const data: {
                token  : Token,
                inputs : Object,
                rules  : Object,
            } = {
                token  : Token.getInstance(),
                inputs: {
                    src  : '',
                },
                buttons: {
                    save: {
                        type: "primary",
                    },
                    del: {
                        type: "primary"
                    },
                },
                rules : {
                    src  : [
                        {
                            required: true,
                            trigger : 'blur, change',
                            message : ''
                        },
                    ]
                }
            };

            return data;
        },

        // --------------------------------------------------------------------
        // COMPUTED FIELDS
        // --------------------------------------------------------------------

        computed: {
            ...mapGetters('OrderWidget', [
               'englishOrderWidget',
            ]),
        },

        // --------------------------------------------------------------------
        // WATCHED FIELDS
        // --------------------------------------------------------------------

        watch: {
            englishOrderWidget: {
                handler: function (newWidget, oldWidget) {
                    this.inputs.src = newWidget.src;
                },
                immediate: true,
            },
            language: {
                handler: function (newLanguage, oldLanguage) {

                    switch (newLanguage) {

                        case this.ADMIN_APP_LANGUAGES.RUSSIAN:

                            // FORM english errors MESSAGES.
                            {
                                this.rules.src[0].message = "Обязательное поле.";
                            }
                            break;

                        case this.ADMIN_APP_LANGUAGES.SLOVAK:

                            // FORM english errors MESSAGES.
                            {
                                this.rules.src[0].message = "Povinné pole.";
                            }
                            break;

                        default:

                            // FORM english errors MESSAGES.
                            {
                                this.rules.src[0].message = "Обязательное поле.";
                            }
                    }
                },
                immediate: true,
            }
        },

        // --------------------------------------------------------------------
        // METHODS
        // --------------------------------------------------------------------

        methods: {

            ...mapActions('OrderWidget', [
                'loadEnglishOrderWidget',
                'updateEnglishOrderWidget',
                'deleteEnglishOrderWidget',
            ]),

            onSaveButtonClick(){
                this.$refs['form'].validate((valid) => {

                    // IF inputs are VALID
                    if (valid) {

                        this.updateEnglishOrderWidget(this.inputs.src,).then(
                            (success) => {
                                this.showDataUploadSuccessMessage();
                            },
                            (error) => {

                                if (this.token.isLoaded) {

                                    if (this.token.isExpired()) {
                                        this.token.del();
                                        this.showTokenErrorAlert();
                                    } else {
                                        this.showDataUploadErrorAlert();
                                    }
                                } else {
                                    this.showTokenErrorAlert();
                                }
                            }
                        );
                    }
                });
            },
            onDeleteButtonClick(){

                this.deleteEnglishOrderWidget().then(
                    (success) => {
                        this.showDataUploadSuccessMessage();
                        this.$refs['form'].resetFields();
                    },
                    (error) => {

                        if (this.token.isLoaded) {

                            if (this.token.isExpired()) {
                                this.token.del();
                                this.showTokenErrorAlert();
                            } else {
                                this.showDataUploadErrorAlert();
                            }
                        } else {
                            this.showTokenErrorAlert();
                        }
                    }
                );
            },
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted() {

            this.loadEnglishOrderWidget().then(
                (success) => {
                }, (error) => {

                    if (this.token.isLoaded) {

                        if (this.token.isExpired()) {
                            this.token.del();
                            this.showTokenErrorAlert();
                        } else {
                            this.showDataLoadErrorAlert();
                        }
                    } else {
                        this.showTokenErrorAlert();
                    }
                }
            );
        },

        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------


    };

</script>