// @flow

<template lang="pug">

    el-form(:model="inputs", :rules="rules", label-position="left", ref="greetForm")

        el-form-item(v-if="LANGUAGES.RUSSIAN === language", label="Введите текст для русскоязычной версии сайта", prop="greetRu")
            el-input(type="textarea", v-model="inputs.greetRu")
        el-form-item(v-if="LANGUAGES.SLOVAK  === language" , label="Zadajte text pre ruských jazykovej verzii webu", prop="greetRu")
            el-input(type="textarea", v-model="inputs.greetRu")

        el-form-item(v-if="LANGUAGES.RUSSIAN === language", label="Введите текст для англоязычной версии сайта", prop="greetEn")
            el-input(type="textarea", v-model="inputs.greetEn")
        el-form-item(v-if="LANGUAGES.SLOVAK  === language" , label="Zadávanie text pre anglickú verziu webu", prop="greetEn")
            el-input(type="textarea", v-model="inputs.greetEn")

        el-form-item(v-if="LANGUAGES.RUSSIAN === language", label="Введите текст для словакоязычной версии сайта", prop="greetSl")
            el-input(type="textarea", v-model="inputs.greetSl")
        el-form-item(v-if="LANGUAGES.SLOVAK  === language" , label="Zadajte text, pre slovakoyazychnoy verziu webu", prop="greetSl")
            el-input(type="textarea", v-model="inputs.greetSl")

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

    import {Cookie} from "../../../../shared-classes/facades/Cookie";
    import LanguageSettings  from "../../../mixins/LanguageSettings.vue"
    import UserMessage from "../../../mixins/UserMessage.vue"
    import ElForm from "../../../../../../../node_modules/element-ui/packages/form/src/form";
    import {LANGUAGES} from "../../../classes/enums/LANGUAGES";
    import ElFormItem from "../../../../../../../node_modules/element-ui/packages/form/src/form-item";
    import {mapActions, mapGetters, mapMutations} from "vuex";
    import {Greet} from "../../../../shared-classes/entities/Greet";
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
                LANGUAGES   : Object,
                cookie      : Object,
                token       : Token,
                buttons     : Object,
                inputs      : Object,
            } = {
                LANGUAGES   : LANGUAGES,
                cookie      : Cookie.getInstance(),
                token       : Token.getInstance(),
                buttons     : {
                    save: {
                        type: "primary",
                    },
                    del:  {
                        type: "primary"
                    }
                },
                inputs      : {
                    greetRu: '',
                    greetEn: '',
                    greetSl: '',
                },
                rules       : {
                    greetRu: [
                        {
                            required: true,
                            trigger : 'blur, change',
                            message : ''
                        },
                        {
                            min     : 1,
                            max     : 1800,
                            message : '',
                            trigger : 'blur, change'
                        }
                    ],
                    greetEn: [
                        {
                            required: true,
                            trigger : 'blur, change'
                        },
                        {
                            min     : 1,
                            max     : 1800,
                            message : '',
                            trigger : 'blur, change'
                        }
                    ],
                    greetSl: [
                        {
                            required: true,
                            trigger : 'blur, change'
                        },
                        {
                            min     : 1,
                            max     : 1800,
                            message : '',
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

        computed: {
            ...mapGetters('HomePageGreet',[
                'greetTextRu',
                'greetTextEn',
                'greetTextSl',
            ]),
        },

        // --------------------------------------------------------------------
        // WATCHED FIELDS
        // --------------------------------------------------------------------

        watch: {

            greetTextRu(newText, oldText){
                this.inputs.greetRu = newText;
            },
            greetTextEn(newText, oldText){
                this.inputs.greetEn = newText;
            },
            greetTextSl(newText, oldText){
                this.inputs.greetSl = newText;
            },

            language: {
                handler: function (newLang, oldLang) {

                    // Change language of error messages.
                    if (newLang === LANGUAGES.RUSSIAN) {

                        // Change form errors messages.
                        {
                            this.rules.greetRu[0].message = "Обязательное поле.";
                            this.rules.greetEn[0].message = "Обязательное поле.";
                            this.rules.greetSl[0].message = "Обязательное поле.";

                            this.rules.greetRu[1].message = "Масксимальное " +
                                "количество символов не должно превышать 1800 знаков.";
                            this.rules.greetEn[1].message = "Масксимальное " +
                                "количество символов не должно превышать 1800 знаков.";
                            this.rules.greetSl[1].message = "Масксимальное " +
                                "количество символов не должно превышать 1800 знаков.";
                        }
                    } else if (newLang === LANGUAGES.SLOVAK) {

                        // Change form errors messages.
                        {
                            this.rules.greetRu[0].message = "Povinné pole.";
                            this.rules.greetEn[0].message = "Povinné pole.";
                            this.rules.greetSl[0].message = "Povinné pole.";

                            this.rules.greetRu[1].message = "Maximálny počet " +
                                "znakov by nemal presiahnuť 1800 znakov.";
                            this.rules.greetEn[1].message = "Maximálny počet " +
                                "znakov by nemal presiahnuť 1800 znakov.";
                            this.rules.greetSl[1].message = "Maximálny počet " +
                                "znakov by nemal presiahnuť 1800 znakov.";
                        }
                    }
                },
                immediate: true
            },
        },

        // --------------------------------------------------------------------
        // METHODS
        // --------------------------------------------------------------------

        methods: {

            ...mapActions('HomePageGreet', [
                'downloadGreet' ,
                'uploadGreet'   ,
                'deleteGreet'   ,
            ]),

            // EVENT HANDLERS

            onSaveButtonClick() {
                this.$refs['greetForm'].validate((valid) => {

                    // IF inputs are VALID
                    if (valid) {

                        const greet = new Greet(
                            this.inputs.greetRu,
                            this.inputs.greetEn,
                            this.inputs.greetSl,
                        );

                        this.uploadGreet(greet).then(
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

            onDeleteButtonClick() {
                this.deleteGreet().then(
                    (success) => {
                        this.showDataUploadSuccessMessage();
                        this.$refs['greetForm'].resetFields();
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
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted(){

            //DOWNLOAD malty-language GREET texts from server
            this.downloadGreet().then((success)=>{
                /*this.$message({
                    message: (function(component){

                        let msg = '';

                        if(component.language === component.LANGUAGES.RUSSIAN){
                            msg = 'Данные успешно загруженны.';
                        } else {
                            msg = 'Dáta bola úspešne nahraný.';
                        }

                        return msg;
                    }(this)),
                    showClose: true,
                    type: 'success'
                });*/
            },(error)=>{

                if(this.token.isLoaded){

                    if(this.token.isExpired()){
                        this.token.del();
                        this.showTokenErrorAlert();
                    } else {
                        this.showDataLoadErrorAlert();
                    }
                } else {
                    this.showTokenErrorAlert();
                }
            });
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