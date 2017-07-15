<template lang="pug">

    .VACANCIES-PAGE.TABLE: .ROW: .CELL
        h1 ABOUT COMPANY:
        p
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            | cum ea eligendi est et fugiat optio porro sit soluta, tenetur! Ab
            | adipisci dolores earum nostrum praesentium? Aliquid excepturi illo
            | incidunt itaque labore magni nesciunt reprehenderit, similique totam
            | vitae. Fuga, quibusdam, suscipit. Aliquam at culpa dolorum error
            | facere fugit harum, itaque iusto labore natus, nemo nobis, quis
            | quisquam quod rem reprehenderit repudiandae sequi suscipit! Ad animi
            | aspernatur deserunt facere, facilis, magni molestiae molestias odit
            | officiis pariatur provident quas quasi reprehenderit voluptate
            | voluptates? Accusamus assumenda, at consequuntur corporis dolor ea
            | est ex harum, ipsa magni numquam quaerat quis quos similique totam
            | voluptates!
        h1 VACANCIES:

        el-table(
        :data="null",
        style="width: 100%;"
        )
            el-table-column(type="expand")
                template (scope="")
                    | тестовый текст таблицы
            el-table-column(
            label="Date"
            )
            el-table-column(
            label="Vacancy"
            )
            el-table-column(
            label="Contacts"
            )

</template>
<style lang="sass" scoped>

    .VACANCIES-PAGE
        height: 100%
        width : 100%
        padding: 4em 2em 4em 2em

        h1
            font-size: 1em

</style>
<script>

    //*************************************************************************
    // CHILD COMPONENTS IMPORT
    //*************************************************************************


    //*************************************************************************
    // COMPONENT
    //*************************************************************************

    export default {

        //*********************************************************************
        // PROPERTIES
        //*********************************************************************


        //*********************************************************************
        // DATA FIELDS
        //*********************************************************************


        //*********************************************************************
        // COMPUTED FIELDS
        //*********************************************************************


        //*********************************************************************
        // WATCHED FIELDS
        //*********************************************************************


        //*********************************************************************
        // METHODS
        //*********************************************************************


        //*********************************************************************
        // LIFE HOOKS
        //*********************************************************************


        //*********************************************************************
        // CHILD COMPONENTS
        //*********************************************************************


    };

</script>