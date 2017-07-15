// @flow
//        :label-width="settings.labelWidth",
<template lang="pug">

    el-form.LOGIN-FORM(
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
            el-button.LOGIN-BUTTON(type="primary", @click="submitForm()") Войти

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

    import ElButton from "../../../../../../../node_modules/element-ui/packages/button/src/button";
    import ElFormItem from "../../../../../../../node_modules/element-ui/packages/form/src/form-item";

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
                            message : 'Длинна логина должна быть в пределах от 1 до 15 символов',
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
                            message : 'Длинна логина должна быть в пределах от 1 до 15 символов',
                            trigger : 'blur, change'
                        }
                    ],
                }
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
            submitForm() {
                this.$refs['adminLoginForm'].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        },

        // --------------------------------------------------------------------
        // LIFE HOOKS
        // --------------------------------------------------------------------


        // --------------------------------------------------------------------
        // CHILD COMPONENTS
        // --------------------------------------------------------------------

        components: {
            ElFormItem,
            ElButton
        },
    };

</script>