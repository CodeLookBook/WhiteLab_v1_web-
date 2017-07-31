// @flow

<template lang="pug">

    .VACANCIES-PAGE.TABLE: .ROW: .CELL

        el-table.VACANCIES-TABLE(
            :data="list",
            :fit="true",
            style="",
        )
            el-table-column(type="expand")
                template(scope="props")
                    | {{ props.row.descriptionRu }}
            el-table-column(
                label="Date",
                prop="openedAt"
            )
            el-table-column(
                label="Vacancy",
                prop="name"
            )
            el-table-column(
                label="Contacts",
                prop="contacts"
            )

</template>
<style lang="sass" scoped>

    .VACANCIES-PAGE
        height: 100%
        width : 100%
        padding: 4em 2em 4em 2em

        h1
            font-size: 1em

    .VACANCIES-TABLE
        margin-top: 2em
        min-width: 30em

</style>
<script>

    //*************************************************************************
    // CHILD COMPONENTS IMPORT
    //*************************************************************************

    import {mapActions, mapGetters} from "vuex";
    import {Vacancy} from "../../../../shared-classes/entities/Vacancy";

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

        data(){
            const data: {
                list: [],
                isDateVisible: boolean,
            } = {
                list: [],
                isDateVisible: true,
            };

            return data;
        },

        //*********************************************************************
        // COMPUTED FIELDS
        //*********************************************************************

        computed:{
            ...mapGetters('Vacancies', [
                'vacancies',
            ])
        },

        //*********************************************************************
        // WATCHED FIELDS
        //*********************************************************************

        watch:{
            vacancies:{
                handler:function(newList, oldList){
                    this.list = newList.map((vacancy) => {
                        return {
                            id              : vacancy.id,
                            name            : vacancy.name,
                            contacts        : vacancy.contacts,
                            descriptionRu   : vacancy.descriptionRu,
                            descriptionEn   : vacancy.descriptionEn,
                            descriptionSl   : vacancy.descriptionSl,
                            openedAt        : vacancy.openedAt.toISOString().
                                              slice(0,10).replace(/-/g,"-"),
                        }
                    });
                },
                immediate: true,
            }
        },

        //*********************************************************************
        // METHODS
        //*********************************************************************

        methods: {
            ...mapActions('Vacancies', [
                'loadVacancies',
            ]),
        },

        //*********************************************************************
        // LIFE HOOKS
        //*********************************************************************

        mounted(){

            if(this.vacancies !== null){
                if(typeof this.vacancies !== "undefined"){
                    if(this.vacancies.length === 0){
                        this.loadVacancies();
                    }
                }
            }

/*            window.addEventListener('resize', function(){
                const width = document.documentElement.clientWidth
                    || document.body.clientWidth;
                if(width < 350 ) this.isDateVisible = false;
            });*/
        },

        //*********************************************************************
        // CHILD COMPONENTS
        //*********************************************************************


    };

</script>