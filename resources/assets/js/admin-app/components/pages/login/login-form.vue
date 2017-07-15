// @flow
//        :label-width="settings.labelWidth",
<template lang="pug">

    el-form.LOGIN-FORM(
        :label-position="settings.labelPosition",
        :label-width="settings.labelWidth",
        :model="inputs",
        :rules="rules",
    )
        el-form-item.LABEL(label="Login")
            el-input(v-model="inputs.login")
        el-form-item(label="Password")
            el-input(v-model="inputs.password")
        el-form-item
            el-button.LOGIN-BUTTON(type="primary") Войти

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
            const data: {
                settings: {
                    labelPosition : string,
                    labelWidth    : string,
                },
                inputs: {
                    login         : string,
                    password      : string,
                },
                rules: {

                },
            } = {
                settings: {
                    labelPosition : 'top',
                    labelWidth    : '100px',
                },
                inputs: {
                    login: '',
                    password: '',
                },
                rules: {
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