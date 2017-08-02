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
                el-form-item(v-if="LANGUAGES.RUSSIAN === language", label="Должность на русском:", prop="nameRu" )
                    el-input(v-model="inputs.nameRu", v-cloak)
                el-form-item(v-if="LANGUAGES.SLOVAK  === language", label="Pozícia v ruštine:", prop="nameRu" )
                    el-input(v-model="inputs.nameRu", v-cloak)

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
                el-form-item(v-if="LANGUAGES.RUSSIAN === language", label="Должность на английском:", prop="nameEn" )
                    el-input(v-model="inputs.nameEn", v-cloak)
                el-form-item(v-if="LANGUAGES.SLOVAK  === language", label="Pozícia v angličtine:", prop="nameEn" )
                    el-input(v-model="inputs.nameEn", v-cloak)

            el-col(
            :xs="{span:24}",
            :sm="{span:11}",
            :md="{span:11}",
            :lg="{span:11}",
            )
                el-form-item(v-if="LANGUAGES.RUSSIAN === language", label="Должность на словацком:", prop="nameSl" )
                    el-input(v-model="inputs.nameSl", v-cloak)
                el-form-item(v-if="LANGUAGES.SLOVAK  === language", label="Pozícia v slovenskom:", prop="nameSl" )
                    el-input(v-model="inputs.nameSl", v-cloak)
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
                el-form-item(v-if="LANGUAGES.SLOVAK  === language", label="Kontakty:", v-model="inputs.contacts", prop="contacts" )
                    el-input(v-model="inputs.contacts", v-cloak)

        el-form-item(v-if="LANGUAGES.RUSSIAN === language", label="Требования/описание для русскоязычной версии сайта:", prop="descriptionRu" )
            el-input(v-model="inputs.descriptionRu", type="textarea", :autosize="{ minRows: 4, maxRows: 8}", v-cloak)
        el-form-item(v-if="LANGUAGES.SLOVAK  === language", label="Požiadavky / popis pre ruské jazykovej verzii webu:", prop="descriptionRu" )
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
            el-button(:type="buttons.save.type", @click="onUpdateButtonClick") Сохранить
            el-button(:type="buttons.save.type", @click="onDeleteButtonClick") Удалить

        el-form-item(v-if="LANGUAGES.SLOVAK  === language")
            el-button(:type="buttons.save.type", @click="onUpdateButtonClick") Udržať
            el-button(:type="buttons.save.type", @click="onDeleteButtonClick",) Vymazať

        hr.RULER

</template>
<style lang="sass" scoped>

    .RULER
        background-color: #f3f3f3

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import {Vacancy}        from "../../../../shared-classes/entities/Vacancy";
    import LanguageSettings from "../../../mixins/LanguageSettings.vue"
    import UserMessage      from "../../../mixins/UserMessage.vue"
    import {Token}          from "../../../../shared-classes/facades/Token";
    import {mapActions}     from "vuex";


    // ------------------------------------------------------------------------
    // COMPONENT
    // ------------------------------------------------------------------------


    export default {

        // --------------------------------------------------------------------
        // PROPERTIES
        // --------------------------------------------------------------------

        props:{
            pId:{
                type: Number,
                required: true,
            },
            pNameRu:{
                type: String,
                required: true,
            },
            pNameEn:{
                type: String,
                required: true,
            },
            pNameSl:{
                type: String,
                required: true,
            },
            pContacts:{
                type: String,
                required: true,
            },
            pDescriptionRu:{
                type: String,
                required: true,
            },
            pDescriptionEn:{
                type: String,
                required: true,
            },
            pDescriptionSl:{
                type: String,
                required: true,
            },
            pOpenedAt: {
                type: Date,
                required: true,
            }
        },


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
                    id            : number,
                    nameRu        : string,
                    nameEn        : string,
                    nameSl        : string,
                    contacts      : string,
                    descriptionRu : string,
                    descriptionEn : string,
                    descriptionSl : string,
                    openedAt      : Date,
                },
                buttons : Object,
                rules   : Object,
            } = {
                token : Token.getInstance(),
                inputs: {
                    id            : this.pId,
                    nameRu        : this.pNameRu,
                    nameEn        : this.pNameEn,
                    nameSl        : this.pNameSl,
                    contacts      : this.pContacts,
                    descriptionRu : this.pDescriptionRu,
                    descriptionEn : this.pDescriptionEn,
                    descriptionSl : this.pDescriptionSl,
                    openedAt      : this.pOpenedAt,
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
                    nameRu:[
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
                    nameEn:[
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
                    nameSl:[
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
                            this.rules.nameRu[0].message        = "Обязательное поле.";
                            this.rules.nameRu[1].message        = "Максимальное количество символов - 255.";
                            this.rules.nameEn[0].message        = "Обязательное поле.";
                            this.rules.nameEn[1].message        = "Максимальное количество символов - 255.";
                            this.rules.nameSl[0].message        = "Обязательное поле.";
                            this.rules.nameSl[1].message        = "Максимальное количество символов - 255.";

                            this.rules.contacts[0].message      = "Обязательное поле.";
                            this.rules.contacts[1].message      = "Максимальное количество символов - 255.";
                            this.rules.descriptionRu[0].message = "Максимальное количество символов - 65535.";
                            this.rules.descriptionEn[0].message = "Максимальное количество символов - 65535.";
                            this.rules.descriptionSl[0].message = "Максимальное количество символов - 65535.";
                        }
                            break;

                        case this.ADMIN_APP_LANGUAGES.SLOVAK:

                            // FORM russian errors MESSAGES.
                        {
                            this.rules.nameRu[0].message        = "Povinné pole.";
                            this.rules.nameRu[1].message        = "Maximálny počet znakov - 255.";
                            this.rules.nameEn[0].message        = "Povinné pole.";
                            this.rules.nameEn[1].message        = "Maximálny počet znakov - 255.";
                            this.rules.nameSl[0].message        = "Povinné pole.";
                            this.rules.nameSl[1].message        = "Maximálny počet znakov - 255.";

                            this.rules.contacts[0].message      = "Povinné pole.";
                            this.rules.contacts[1].message      = "Maximálny počet znakov - 255";
                            this.rules.descriptionRu[0].message = "Maximálny počet znakov - 65535.";
                            this.rules.descriptionEn[0].message = "Maximálny počet znakov - 65535.";
                            this.rules.descriptionSl[0].message = "Maximálny počet znakov - 65535.";
                        }
                            break;

                        default:
                            // FORM russian errors MESSAGES.
                        {
                            this.rules.nameRu[0].message        = "Обязательное поле.";
                            this.rules.nameRu[1].message        = "Максимальное количество символов - 255.";
                            this.rules.nameEn[0].message        = "Обязательное поле.";
                            this.rules.nameEn[1].message        = "Максимальное количество символов - 255.";
                            this.rules.nameSl[0].message        = "Обязательное поле.";
                            this.rules.nameSl[1].message        = "Максимальное количество символов - 255.";

                            this.rules.contacts[0].message      = "Обязательное поле.";
                            this.rules.contacts[1].message      = "Максимальное количество символов - 255.";
                            this.rules.descriptionRu[0].message = "Максимальное количество символов - 65535.";
                            this.rules.descriptionEn[0].message = "Максимальное количество символов - 65535.";
                            this.rules.descriptionSl[0].message = "Максимальное количество символов - 65535.";
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
                'updateVacancy',
                'deleteVacancy',
            ]),

            onUpdateButtonClick(){
                this.$refs['form'].validate((valid) => {

                    // IF inputs are VALID
                    if (valid) {

                        this.updateVacancy(
                            new Vacancy(
                                this.inputs.id,
                                this.inputs.nameRu,
                                this.inputs.nameEn,
                                this.inputs.nameSl,
                                this.inputs.contacts,
                                this.inputs.descriptionRu,
                                this.inputs.descriptionEn,
                                this.inputs.descriptionSl,
                                this.inputs.openedAt,
                            )
                        ).then(
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
                this.deleteVacancy(
                    new Vacancy(
                        this.inputs.id,
                        this.inputs.nameRu,
                        this.inputs.nameEn,
                        this.inputs.nameSl,
                        this.inputs.contacts,
                        this.inputs.descriptionRu,
                        this.inputs.descriptionEn,
                        this.inputs.descriptionSl,
                        this.inputs.openedAt,
                    )
                ).then(
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