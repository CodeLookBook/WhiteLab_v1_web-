// @flow
//        :label-width="settings.labelWidth",
<template lang="pug">

    el-form.LOGIN-FORM(
        v-if="!token.isLoaded && token.isExpired",
        :label-position="settings.labelPosition",
        :label-width="settings.labelWidth",
        :model="inputs",
        :rules="rules",
        ref="adminLoginForm"
    )
        el-form-item.LABEL(label="Login",  prop="login")
            el-input(v-model="inputs.login")
        el-form-item(label="Password", prop="password")
            el-input(v-model="inputs.password", type="password")
        el-form-item
            el-button.LOGIN-BUTTON(type="primary", @click="onFormSubmit()")
                | Войти
            el-row
                el-col(:xs="24", :sm="24", :md="24", :lg="24")
                    p(style="color: red; font-size: 0.85em;") {{loginErrorMessage}}

</template>
<style lang="sass" scoped>

    @import "../../../../../sass/shared/mixins"

    .LOGIN-FORM
        display: inline-block
        text-align: left
        +size(20em)

    .LOGIN-BUTTON
        +size(100%)

</style>
<script>

    // ------------------------------------------------------------------------
    // IMPORT CHILD COMPONENTS
    // ------------------------------------------------------------------------

    import {Token       } from "../../../../shared-classes/facades/Token";
    import {TOKEN_EVENTS} from "../../../classes/enums/events-names/TOKEN_EVENTS";
    import {CallBack    } from "../../../../shared-classes/types/CallBack";

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
            const data = {
                settings: {
                    labelPosition : 'top',
                    labelWidth    : '100px',
                },
                inputs: {
                    login         : '',
                    password      : '',
                },
                rules: {
                    login: [
                        {
                            required: true,
                            message : 'Пожалуйста, введите логин пользователя.',
                            trigger : 'blur, change'
                        },
                        {
                            min     : 1,
                            max     : 15,
                            message : 'Длинна логина должна быть в пределах от 1 ' +
                                      'до 15 символов',
                            trigger : 'blur, change'
                        }
                    ],
                    password: [
                        {
                            required: true,
                            message: 'Пожалуйста, введите пароль пользователя.',
                            trigger: 'blur'
                        },
                        {
                            min     : 1,
                            max     : 15,
                            message : 'Длинна логина должна быть в пределах от 1 ' +
                                      'до 30 символов',
                            trigger : 'blur, change'
                        }
                    ],
                },
                loginErrorMessage: '',
                token : Token.getInstance(),
            };

            return data;
        },

        // --------------------------------------------------------------------
        // COMPUTED FIELDS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // WATCHED FIELDS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // METHODS
        // --------------------------------------------------------------------

        methods: {

            // EVENT HANDLERS

            onFormSubmit() {
                this.$refs['adminLoginForm'].validate((valid) => {

                    if (valid) {

                        let login   : string | undefined = this.inputs.login;
                        let password: string | undefined = this.inputs.password;

                        //GET TOKEN from server
                        this.token.load(login, password);

                        //RESET CREDENTIALS values.
                        login = password = undefined;
                    }
                });
            },
            onTokenLoaded (event: Object | null): void {
                this.$router.push({name: 'homePageGreetTextSettings'});
                this.$bus.$emit(TOKEN_EVENTS.LOADED);
            },
            onTokenLoadError401 (event: Object | null): void {
                this.loginErrorMessage = "Указан неверный логин или пароль " +
                    "пользователя"
            },
            onTokenLoadError500 (event: Object | null): void {
                this.loginErrorMessage = "Сбой в работе сервера. Повторите " +
                    "попытку позже."
            },

            // HELPERS

            resetFields() {
                this.inputs.login    = '';
                this.inputs.password = '';
            }
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------

        mounted(){

            // if token is exists and valid then REDIRECT to 'homePageGreetTextSettings' page.
            {
                if (this.token.isLoaded === true) {
                    if (!this.token.isExpired()) {
                        this.$router.push({name: 'homePageGreetTextSettings'});
                    } else {
                        this.token.del();
                    }
                }
            }


            // SUBSCRIBE on token events:
            {
                this.token.on(
                    TOKEN_EVENTS.LOADED,
                    this.onTokenLoaded
                );
                this.token.on(
                    TOKEN_EVENTS.LOAD_ERROR_401,
                    this.onTokenLoadError401
                );
                this.token.on(
                    TOKEN_EVENTS.LOAD_ERROR_500,
                    this.onTokenLoadError500
                );
            }
        },

        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------


    };

</script>