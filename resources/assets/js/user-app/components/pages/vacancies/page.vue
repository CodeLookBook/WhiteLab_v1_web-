// @flow

<template lang="pug">

    .VACANCIES-PAGE.TABLE: .ROW: .CELL

        // RUSSIAN TRUNSLATION
        el-table.VACANCIES-TABLE.RU(
            v-if="APP_LANGUAGES.RUSSIAN === language",
            :data="list",
            :fit="true",
        )
            el-table-column(type="expand")
                template(scope="props")
                    | {{ props.row.descriptionRu }}
            el-table-column(
                label="Дата",
                prop="openedAt"
            )
            el-table-column(
                label="Вакансия",
                prop="nameRu"
            )
            el-table-column(
                label="Контакты",
                prop="contacts"
            )

        // ENGLISH TRUNSLATION
        el-table.VACANCIES-TABLE.EN(
            v-if="APP_LANGUAGES.ENGLISH === language",
            :data="list",
            :fit="true",
            style="",
        )
            el-table-column(type="expand")
                template(scope="props")
                    | {{ props.row.descriptionEn }}
            el-table-column(
            label="Date",
            prop="openedAt"
            )
            el-table-column(
            label="Vacancy",
            prop="nameEn"
            )
            el-table-column(
            label="Contacts",
            prop="contacts"
            )

        // SLOVAK TRUNSLATION
        el-table.VACANCIES-TABLE.SL(
            v-if="APP_LANGUAGES.SLOVAK === language",
            :data="list",
            :fit="true",
            style="",
        )
            el-table-column(type="expand")
                template(scope="props")
                    | {{ props.row.descriptionSl }}
            el-table-column(
            label="Dátum",
            prop="openedAt"
            )
            el-table-column(
            label="Voľné miesto",
            prop="nameSl"
            )
            el-table-column(
            label="Kontakty",
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
    import {Vacancy}                from "../../../../shared-classes/entities/Vacancy";
    import  LanguageSettings        from "../../../mixins/LanguageSettings.vue";
    import Yclients from "../../../mixins/Yclients.vue";

    //*************************************************************************
    // COMPONENT
    //*************************************************************************

    export default {

        //*********************************************************************
        // PROPERTIES
        //*********************************************************************



        //*********************************************************************
        // MIXINS
        //*********************************************************************

        mixins:[
            LanguageSettings,
            Yclients,
        ],

        //*********************************************************************
        // DATA FIELDS
        //*********************************************************************

        data(){
            const data: {
                list: [],
            } = {
                list: [],
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
            /**
             * Update list if vacancies were changed in the storage.
             */
            vacancies:{
                handler:function(newList, oldList){

                    // Create new list with converted to string date.
                    this.list = newList.map((vacancy) => {
                        return {
                            id              : vacancy.id,
                            nameRu          : vacancy.nameRu,
                            nameEn          : vacancy.nameEn,
                            nameSl          : vacancy.nameSl,
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

            // LOAD list of VACANCIES if it wasn't loaded to the vuex storage
            // already.
            if(this.vacancies !== null){
                if(typeof this.vacancies !== "undefined"){
                    if(this.vacancies.length === 0){
                        this.loadVacancies();
                    }
                }
            }

        },

        //*********************************************************************
        // CHILD COMPONENTS
        //*********************************************************************


    };

</script>