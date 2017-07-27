// @flow

<template lang="pug">

    el-form(:model="inputs", :rules="rules", label-position="left", ref="form")

        el-form-item(v-if="LANGUAGES.RUSSIAN === language && pHasUrl", label="Ссылка на страницу которой необходимо поделиться:", prop="url")
            el-input(v-model="inputs.url", v-cloak)
        el-form-item(v-if="LANGUAGES.SLOVAK  === language && pHasUrl", label="Odkaz na stránku, budete musieť zdieľať:", prop="url")
            el-input(v-model="inputs.url", v-cloak)

        el-form-item(v-if="LANGUAGES.RUSSIAN === language && pHasTitle", label="Заголовок поста:", prop="title")
            el-input(v-model="inputs.title", v-cloak)
        el-form-item(v-if="LANGUAGES.SLOVAK  === language && pHasTitle", label="Názov príspevok:", prop="title")
            el-input(v-model="inputs.title", v-cloak)

        el-form-item(v-if="LANGUAGES.RUSSIAN === language && pHasDescription", label="Текст поста:", prop="description")
            el-input(v-model="inputs.description", type="textarea", v-cloak)
        el-form-item(v-if="LANGUAGES.SLOVAK  === language && pHasDescription", label="Text príspevku:", prop="description")
            el-input(v-model="inputs.description", type="textarea", v-cloak)

        el-form-item(v-if="LANGUAGES.RUSSIAN === language && pHasQuote", label="Текст цитаты поста:", prop="quote")
            el-input(v-model="inputs.quote", type="textarea", v-cloak)
        el-form-item(v-if="LANGUAGES.SLOVAK  === language && pHasQuote", label="Text rozmiestniť citácie:", prop="quote")
            el-input(v-model="inputs.quote", type="textarea", v-cloak)

        el-form-item(v-if="LANGUAGES.RUSSIAN === language && pHasHashtags", label="Хэштеги поста:")
            el-input(v-model="inputs.hashtags", v-cloak)
        el-form-item(v-if="LANGUAGES.SLOVAK  === language && pHasHashtags", label="Hashtag príspevok:")
            el-input(v-model="inputs.hashtags", v-cloak)

        el-form-item(v-if="LANGUAGES.RUSSIAN === language && pHasTwitter", label="Имя пользователя Twitter-a:")
            el-input(v-model="inputs.twitter", v-cloak)
        el-form-item(v-if="LANGUAGES.SLOVAK  === language && pHasTwitter", label="Užívateľské meno Twitter:")
            el-input(v-model="inputs.twitter", v-cloak)

        el-form-item(v-if="LANGUAGES.RUSSIAN === language && pHasMedia", label="Имя пользователя Twitter-a:")
            el-input(v-model="inputs.media", v-cloak)
        el-form-item(v-if="LANGUAGES.SLOVAK  === language && pHasMedia", label="Užívateľské meno Twitter:")
            el-input(v-model="inputs.media", v-cloak)

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

    import FbForm           from "./fb-form.vue"
    import LanguageSettings from "../../../mixins/LanguageSettings.vue"
    import UserMessage      from "../../../mixins/UserMessage.vue"
    import {Token}          from "../../../../shared-classes/facades/Token";
    import {mapActions, mapGetters} from "vuex";
    import {ShareButtonSettings} from "../../../../shared-classes/entities/ShareButtonSettings";

    // ------------------------------------------------------------------------
    // COMPONENT
    // ------------------------------------------------------------------------

    export default {

        // --------------------------------------------------------------------
        // PROPERTIES
        // --------------------------------------------------------------------

        props: {
            pLocation       : {type: String , required: true},

            pHasUrl         : {type: Boolean, default: true },
            pHasTitle       : {type: Boolean, default: true },
            pHasDescription : {type: Boolean, default: true },
            pHasQuote       : {type: Boolean, default: false},
            pHasHashtags    : {type: Boolean, default: true },
            pHasTwitter     : {type: Boolean, default: false},
            pHasMedia       : {type: Boolean, default: false},
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
                token  : Token,
                inputs : {
                    location    : Object | string,
                    url         : string,
                    title       : string,
                    description : string,
                    quote       : string,
                    hashtags    : string,
                    twitter     : string,
                    media       : string,
                },
                buttons: Object,
                rules  : Object,
            } = {
                token  : Token.getInstance(),
                inputs : {
                    location    : this.pLocation,
                    url         : '',
                    title       : '',
                    description : '',
                    quote       : '',
                    hashtags    : '',
                    twitter     : '',
                    media       : '',
                },
                buttons: {
                    save: {
                        type: "primary",
                    },
                    del: {
                        type: "primary"
                    },
                },
                rules: {
                    url: [
                        {
                            required: true,
                            trigger : 'blur, change',
                            message : ''
                        },
                    ],
                    title: [
                        {
                            required: true,
                            trigger : 'blur, change',
                            message : ''
                        },
                    ],
                    description:[
                        {
                            required: true,
                            trigger : 'blur, change',
                            message : ''
                        }
                    ]
                }
            };

            return data;
        },

        // --------------------------------------------------------------------
        // COMPUTED FIELDS
        // --------------------------------------------------------------------

        computed: {
            ...mapGetters('FacebookShareButtonSettings', [
                'facebookShareButtonSettings',
            ]),
        },

        // --------------------------------------------------------------------
        // WATCHED FIELDS
        // --------------------------------------------------------------------

        watch: {
            facebookShareButtonSettings:{
                handler: function (newSettings, oldSettings) {
                    this.inputs = {
                        location    : newSettings.location,
                        url         : newSettings.url,
                        title       : newSettings.title,
                        description : newSettings.description,
                        quote       : newSettings.quote,
                        hashtags    : newSettings.hashtags,
                        twitter     : newSettings.twitter,
                        media       : newSettings.media,
                    }

                },
                immediate: true,
            },
            language:{
                handler: function (newLanguage, oldLanguage) {

                    switch (newLanguage) {

                        case this.ADMIN_APP_LANGUAGES.RUSSIAN:

                            // FORM russian errors MESSAGES.
                        {
                            this.rules.url[0].message         = "Обязательное поле.";
                            this.rules.title[0].message       = "Обязательное поле.";
                            this.rules.description[0].message = "Обязательное поле.";
                        }
                            break;

                        case this.ADMIN_APP_LANGUAGES.SLOVAK:

                            // FORM russian errors MESSAGES.
                        {
                            this.rules.url[0].message         = "Povinné pole.";
                            this.rules.title[0].message       = "Povinné pole.";
                            this.rules.description[0].message = "Povinné pole.";
                        }
                            break;

                        default:
                            // FORM russian errors MESSAGES.
                        {
                            this.rules.url[0].message         = "Обязательное поле.";
                            this.rules.title[0].message       = "Обязательное поле.";
                            this.rules.description[0].message = "Обязательное поле.";
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

            ...mapActions('FacebookShareButtonSettings',[
                'loadFacebookShareButtonSettings',
                'updateFacebookShareButtonSettings',
                'deleteFacebookShareButtonSettings',
            ]),

            onSaveButtonClick(){
                this.$refs['form'].validate((valid) => {

                    // IF inputs are VALID
                    if (valid) {

                        this.updateFacebookShareButtonSettings(new ShareButtonSettings(
                            this.inputs.location    ,
                            this.inputs.url         ,
                            this.inputs.title       ,
                            this.inputs.description ,
                            this.inputs.quote       ,
                            this.inputs.hashtags    ,
                            this.inputs.twitter     ,
                            this.inputs.media       ,
                        )).then(
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

                this.deleteFacebookShareButtonSettings(
                    this.inputs.location,
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
            },
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted(){


            this.loadFacebookShareButtonSettings('Home-page').then(
                (success) => {
                    //...
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

        components: {
            FbForm,
        },

    };

</script>