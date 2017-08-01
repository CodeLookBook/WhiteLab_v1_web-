// @flow

<template lang="pug">

    el-form(:model="inputs", :rules="rules", label-position="left", ref="form")
        el-form-item
            el-col(
            :xs="{span:24}",
            :sm="{span:11}",
            :md="{span:11}",
            :lg="{span:11}",
            )
                el-form-item(v-if="LANGUAGES.RUSSIAN === language", label="Должность:", prop="name" )
                    el-input(v-model="inputs.name", v-cloak)
                el-form-item(v-if="LANGUAGES.SLOVAK  === language", label="Kancelária:", prop="name" )
                    el-input(v-model="inputs.name", v-cloak)

            el-col(
            :xs="{span:0}",
            :sm="{span:2}",
            :md="{span:2}",
            :lg="{span:2}",
            ) &nbsp;

            el-col(
            :xs="{span:24}",
            :sm="{span:11}",
            :md="{span:11}",
            :lg="{span:11}",
            )
                el-form-item(v-if="LANGUAGES.RUSSIAN === language", label="Котакты:", prop="contacts" )
                    el-input(v-model="inputs.contacts", v-cloak)
                el-form-item(v-if="LANGUAGES.SLOVAK  === language", label="kontakty:", v-model="inputs.contacts", prop="contacts" )
                    el-input(v-model="inputs.contacts", v-cloak)

        el-form-item(v-if="LANGUAGES.RUSSIAN === language", label="Требования/описание для русскоязычной версии сайта:", prop="descriptionRu" )
            el-input(v-model="inputs.descriptionRu", type="textarea", :autosize="{ minRows: 4, maxRows: 8}", v-cloak)
        el-form-item(v-if="LANGUAGES.SLOVAK  === language", label="Požiadavky / popis pre ruské jazykovej verzii webu:",prop="descriptionRu" )
            el-input(v-model="inputs.descriptionRu", type="textarea", :autosize="{ minRows: 4, maxRows: 8}",  v-cloak)

        el-form-item(v-if="LANGUAGES.RUSSIAN === language", label="Требования/описание для англоязычной версии сайта:", prop="descriptionEn" )
            el-input(v-model="inputs.descriptionEn", type="textarea", :autosize="{ minRows: 4, maxRows: 8}", v-cloak)
        el-form-item(v-if="LANGUAGES.SLOVAK  === language", label="Požiadavky / popis pre anglické jazykové verzie stránok:", prop="descriptionEn" )
            el-input(v-model="inputs.descriptionEn", type="textarea", :autosize="{ minRows: 4, maxRows: 8}",  v-cloak)

        el-form-item(v-if="LANGUAGES.RUSSIAN === language", label="Требования/описание для словакоязычной версии сайта:", prop="descriptionSl" )
            el-input(v-model="inputs.descriptionSl", type="textarea", :autosize="{ minRows: 4, maxRows: 8}", v-cloak)
        el-form-item(v-if="LANGUAGES.SLOVAK  === language", label="Požiadavky / opis slovakoyazychnoy verzie stránok:", prop="descriptionSl" )
            el-input(v-model="inputs.descriptionSl", type="textarea", :autosize="{ minRows: 4, maxRows: 8}",  v-cloak)

        el-form-item(v-if="LANGUAGES.RUSSIAN === language")
            el-button(:type="buttons.save.type", @click="onSaveButtonClick" ) Добавить
            el-button(:type="buttons.save.type", @click="onResetButtonClick") Отчистить

        el-form-item(v-if="LANGUAGES.SLOVAK  === language")
            el-button(:type="buttons.save.type", @click="onSaveButtonClick" ) Pridať
            el-button(:type="buttons.save.type", @click="onResetButtonClick") Jasná

</template>
<style lang="sass">

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import {Vacancy}        from "../../../../shared-classes/entities/Vacancy";
    import LanguageSettings from "../../../mixins/LanguageSettings.vue"
    import UserMessage      from "../../../mixins/UserMessage.vue"
    import {Token}          from "../../../../shared-classes/facades/Token";
    import {mapActions} from "vuex";

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
                token   : Token,
                inputs  : {
                    id              : number,
                    name            : string,
                    contacts        : string,
                    descriptionRu   : string,
                    descriptionEn   : string,
                    descriptionSl   : string,
                },
                buttons : Object,
                rules   : Object,
            } = {
                token : Token.getInstance(),
                inputs: {
                    id              : 0,
                    name            : '',
                    contacts        : '',
                    descriptionRu   : '',
                    descriptionEn   : '',
                    descriptionSl   : '',
                },
                buttons: {
                    save: {
                        type: "primary",
                        disabled: true,
                    },
                    del: {
                        type: "primary",
                        disabled: true,
                    },
                },
                rules: {
                    name:[
                        {
                            required: true,
                            trigger : 'blur, change',
                            message : ''
                        },
                        {
                            max: 255,
                            message: '',
                        }
                    ],
                    contacts:[
                        {
                            required: true,
                            trigger : 'blur, change',
                            message : ''
                        },
                        {
                            max: 255,
                            message: '',
                        }
                    ],
                    descriptionRu:[
                        {
                            max: 65535,
                            message: '',
                        }
                    ],
                    descriptionEn:[
                        {
                            max: 65535,
                            message: '',
                        }
                    ],
                    descriptionSl:[
                        {
                            max: 65535,
                            message: '',
                        }
                    ],
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

        watch:{
            language:{
                handler: function (newLanguage, oldLanguage) {

                    switch (newLanguage) {

                        case this.ADMIN_APP_LANGUAGES.RUSSIAN:

                            // FORM russian errors MESSAGES.
                        {
                            this.rules.name[0].message         = "Обязательное поле.";
                            this.rules.name[1].message         = "Максимальное количество символов - 255.";

                            this.rules.contacts[0].message     = "Обязательное поле.";
                            this.rules.contacts[1].message     = "Максимальное количество символов - 255.";
                            this.rules.descriptionRu[0].message  = "Максимальное количество символов - 65535.";
                            this.rules.descriptionEn[0].message  = "Максимальное количество символов - 65535.";
                            this.rules.descriptionSl[0].message  = "Максимальное количество символов - 65535.";
                        }
                            break;

                        case this.ADMIN_APP_LANGUAGES.SLOVAK:

                            // FORM russian errors MESSAGES.
                        {
                            this.rules.name[0].message         = "Povinné pole.";
                            this.rules.name[1].message         = "Maximálny počet znakov - 255.";

                            this.rules.contacts[0].message     = "Povinné pole.";
                            this.rules.contacts[1].message     = "Maximálny počet znakov - 255";
                            this.rules.descriptionRu[0].message  = "Maximálny počet znakov - 65535.";
                            this.rules.description[0].message  = "Maximálny počet znakov - 65535.";
                            this.rules.description[0].message  = "Maximálny počet znakov - 65535.";
                        }
                            break;

                        default:
                            // FORM russian errors MESSAGES.
                        {
                            this.rules.name[0].message         = "Обязательное поле.";
                            this.rules.name[1].message         = "Максимальное количество символов - 255.";

                            this.rules.contacts[0].message     = "Обязательное поле.";
                            this.rules.contacts[1].message     = "Максимальное количество символов - 255.";
                            this.rules.description[0].message  = "Максимальное количество символов - 65535.";
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

            ...mapActions('Vacancies', [
                'createVacancy',
                'updateVacancy',
                'deleteVacancy',
            ]),

            onSaveButtonClick(){
                this.$refs['form'].validate((valid) => {

                    // IF inputs are VALID
                    if (valid) {

                        this.createVacancy(
                            new Vacancy(
                                this.inputs.id,
                                this.inputs.name,
                                this.inputs.contacts,
                                this.inputs.descriptionRu,
                                this.inputs.descriptionEn,
                                this.inputs.descriptionSl,
                                new Date(),
                            )
                        ).then(
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
                    }
                });
            },
            onResetButtonClick(){
                this.$refs['form'].resetFields();
            } ,
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------


    };

</script>