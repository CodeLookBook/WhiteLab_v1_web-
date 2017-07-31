// @flow

<template lang="pug">

    el-form(:model="inputs", :rules="rules", label-position="left", ref="form")

        el-form-item(v-if="LANGUAGES.RUSSIAN === language", label="Ссылка на группу в Instagram:", prop="reference")
            el-input(v-model="inputs.reference", :placeholder="inputs.placeholder", :value="inputs.reference", v-cloak)
        el-form-item(v-if="LANGUAGES.SLOVAK  === language", label="Odkaz ku skupine na Instagramu:", prop="reference")
            el-input(v-model="inputs.reference", :placeholder="inputs.placeholder", :value="inputs.reference", v-cloak)

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


    // ------------------------------------------------------------------------
    // COMPONENT
    // ------------------------------------------------------------------------

    import ElForm from "../../../../../../../node_modules/element-ui/packages/form/src/form.vue";
    import LanguageSettings  from "../../../mixins/LanguageSettings.vue"
    import UserMessage from "../../../mixins/UserMessage.vue"
    import {mapActions, mapGetters} from "vuex";
    import {Token} from "../../../../shared-classes/facades/Token";

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
              inputs : {
                  reference: string,
              },
              buttons: Object,
              rules  : Object,
          } = {
              token  : Token.getInstance(),
              inputs : {
                  reference: '',
                  placeholder: 'Example: https://www.instagram.com'
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
                  reference: [
                      {
                          required: true,
                          trigger : 'blur, change',
                          message : ''
                      },
                      {
                          min     : 1,
                          max     : 200,
                          message : '',
                          trigger : 'blur, change'
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
            ...mapGetters('SocialGroups', [
                'instagramGroupReference',
            ]),
        },

        // --------------------------------------------------------------------
        // WATCHED FIELDS
        // --------------------------------------------------------------------

        watch: {
            instagramGroupReference: {
                handler: function (newReference, oldReference) {
                    this.inputs.reference = newReference;
                },
                immediate: true,
            },
            language:{
                handler: function (newLanguage, oldLanguage) {

                    switch (newLanguage) {

                        case this.ADMIN_APP_LANGUAGES.RUSSIAN:

                            // FORM russian errors MESSAGES.
                            {
                                this.rules.reference[0].message = "Обязательное поле.";
                                this.rules.reference[1].message = "Масксимальное " +
                                    "количество символов не должно превышать 200 знаков.";
                            }
                            break;

                        case this.ADMIN_APP_LANGUAGES.SLOVAK:

                            // FORM russian errors MESSAGES.
                            {
                                this.rules.reference[0].message = "Povinné pole.";
                                this.rules.reference[1].message = "Maximálny počet " +
                                    "znakov by nemal presiahnuť 200 znakov.";
                            }
                            break;

                        default:
                            // FORM russian errors MESSAGES.
                            {
                                this.rules.reference[0].message = "Обязательное поле.";
                                this.rules.reference[1].message = "Масксимальное " +
                                    "количество символов не должно превышать 200 знаков.";
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
            ...mapActions('SocialGroups', [
                'loadInstagramGroupReference',
                'uploadInstagramGroupReference',
                'deleteInstagramGroupReference',
            ]),

            // EVENT HANDLERS

            onSaveButtonClick() {
                this.$refs['form'].validate((valid) => {

                    // IF inputs are VALID
                    if (valid) {

                        this.uploadInstagramGroupReference(this.inputs.reference).then(
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
                this.deleteInstagramGroupReference().then(
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

              this.loadInstagramGroupReference().then((success)=>{
                  //...
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

        components: {ElForm}

    };

</script>