<template>

    <div class="connection-content">

        <div v-if="! supportingNewTable" class="unsupported-vue-message">
            <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90"><path d="M82 12.6C81.5 7.2 77 3.1 71.5 3.1c-3.1 0-6.1 1.4-8.1 3.8 -0.6-0.1-1.1-0.1-1.7-0.1 -5.8 0-10.4 4.7-10.4 10.4 0 1 0.1 1.9 0.4 2.9 -1.3 1.5-2.1 3.4-2.1 5.5 0 4.6 3.7 8.3 8.3 8.3 0.7 0 1.5-0.1 2.2-0.3 2.1 2.7 5.3 4.3 8.7 4.3 5.3 0 9.7-3.7 10.7-8.8 3.9-1.1 6.7-4.7 6.7-8.7C86.3 17.2 84.7 14.3 82 12.6zM78.9 27.9l-0.4 0.1 -0.1 0.4c-0.8 4.7-4.8 8.1-9.5 8.1 -3.1 0-6.1-1.5-7.9-4.1L60.7 32l-0.5 0.2c-0.7 0.2-1.5 0.4-2.2 0.4 -3.9 0-7-3.1-7-7 0-1.8 0.7-3.5 2-4.8l0.3-0.3L53.1 20c-0.3-0.9-0.5-1.9-0.5-2.8 0-5 4.1-9.1 9.1-9.1 0.6 0 1.2 0.1 1.8 0.2L64 8.3 64.2 8c1.8-2.3 4.4-3.6 7.3-3.6 4.9 0 8.9 3.8 9.2 8.6l0 0.4 0.3 0.2c2.4 1.4 3.9 4 3.9 6.7C85 23.9 82.4 27.1 78.9 27.9zM39.8 19.4c-0.2 0.7-0.2 1.4 0.2 2.1 0.5 0.9 1.4 1.4 2.4 1.4 0.1 0 0.3 0 0.4 0 0.4 0.3 0.9 0.5 1.5 0.5 0.4 0 0.7-0.1 1.1-0.3 0.6-0.3 1.1-0.9 1.2-1.6 1-0.8 1.3-2.1 0.7-3.2 -0.3-0.6-0.8-1-1.5-1.3 0 0 0-0.1-0.1-0.1 -0.4-0.9-1.3-1.4-2.3-1.4 -0.4 0-0.8 0.1-1.2 0.3 -0.1 0.1-0.3 0.1-0.4 0.2 -0.4 0-0.8 0-1.2 0.2 -1.1 0.5-1.5 1.8-0.9 2.9C39.7 19.3 39.8 19.4 39.8 19.4zM41.2 17.5c0.2-0.1 0.4-0.1 0.6-0.1l0.4 0.1 0.3-0.3c0.1-0.1 0.2-0.2 0.3-0.2 0.2-0.1 0.4-0.1 0.6-0.1 0.5 0 0.9 0.3 1.1 0.7 0 0.1 0.1 0.2 0.1 0.2l0.1 0.4 0.4 0.1c0.4 0.1 0.7 0.3 0.9 0.7 0.3 0.6 0.1 1.3-0.5 1.7l-0.3 0.2 0 0.4c0 0.4-0.2 0.7-0.5 0.8 -0.4 0.2-0.9 0.1-1.2-0.2l-0.3-0.3 -0.4 0.1c-0.1 0-0.3 0.1-0.4 0.1 -0.5 0-1-0.3-1.2-0.7 -0.2-0.4-0.2-0.9 0-1.3l0.2-0.4L41 18.8c-0.1-0.1-0.1-0.1-0.2-0.2C40.7 18.2 40.8 17.7 41.2 17.5zM45 54c0-3.6-1.5-6.8-3.9-9.4 1-0.3 1.9-0.6 2.7-1 0.7 0.3 2.5 1 3.5 0 1-1 0.4-2.7 0-3.5 0.6-1.5 1-3.5 1-5.6 0-2.1-0.3-4.1-1-5.6 0.3-0.7 1-2.5 0-3.5 -1-1-2.7-0.3-3.5 0 -2.4-1.1-5.4-1.8-8.7-2 -2.2-1.4-4.8-2.2-7.7-2.2 -2.8 0-5.5 0.8-7.7 2.2 -3.2 0.2-6.3 0.9-8.7 2 -0.7-0.3-2.5-1-3.5 0 -1 1-0.3 2.7 0 3.5 -0.6 1.5-1 3.5-1 5.6 0 2.1 0.3 4.1 1 5.6 -0.3 0.7-1 2.5 0 3.5 1 1 2.7 0.3 3.5 0 0.8 0.4 1.7 0.7 2.7 1 -2.5 2.6-3.9 5.8-3.9 9.4v4.5H3.7v1.3h6.2v11.5h1c0.3 2.7 2.4 4.7 5 5v10.6h1.3V59.8h20.7v10.4h0v6.2h0v10.5h1.3V76.3c2.6-0.3 4.7-2.4 5-5h1V59.8h6.2v-1.3H45V54zM43.5 26.8l0.3 0.1 0.3-0.2c0.7-0.4 1.9-0.7 2.3-0.4 0.3 0.3 0.1 1.4-0.4 2.3L45.8 29l0.2 0.3c0.6 1.4 1 3.3 1 5.3 0 2-0.4 4-1 5.3l-0.1 0.3 0.1 0.3c0.4 0.7 0.7 1.9 0.4 2.3 -0.3 0.3-1.6 0-2.3-0.4l-0.3-0.2 -0.3 0.1c-1 0.5-2.2 1-3.5 1.3 -0.3-0.3-0.7-0.6-1-0.8 0.4-0.6 0.8-1.3 1.2-1.9l1.1 1.1c0.1 0.1 0.2 0.1 0.3 0.1s0.2 0 0.3-0.1c0.2-0.2 0.2-0.5 0-0.6L40.5 40c0.6-1.4 0.9-3 1-4.6h1.9c0.2 0 0.4-0.2 0.4-0.4 0-0.2-0.2-0.4-0.4-0.4h-1.9c-0.1-1.6-0.4-3.2-1-4.6l1.3-1.3c0.2-0.2 0.2-0.5 0-0.6 -0.2-0.2-0.5-0.2-0.6 0L40.1 29c-0.8-1.5-1.8-2.9-3-4C39.5 25.3 41.7 25.9 43.5 26.8zM27.5 22.5c7 0 12.7 5.6 12.7 12.4s-5.7 12.4-12.7 12.4 -12.7-5.6-12.7-12.4S20.5 22.5 27.5 22.5zM11.5 42.3l-0.3-0.1 -0.3 0.2c-0.7 0.4-1.9 0.7-2.3 0.4 -0.3-0.3 0-1.5 0.4-2.3l0.2-0.3L9 39.8c-0.6-1.4-1-3.3-1-5.3 0-2 0.4-4 1-5.3L9.1 29 9 28.7c-0.4-0.7-0.7-1.9-0.4-2.3 0.3-0.3 1.6 0 2.3 0.4l0.3 0.2 0.3-0.1c1.8-0.9 4-1.5 6.4-1.9 -1.3 1.2-2.3 2.5-3.1 4.1l-1.1-1.1c-0.2-0.2-0.5-0.2-0.6 0 -0.2 0.2-0.2 0.5 0 0.6l1.3 1.3c-0.6 1.4-0.9 3-1 4.6h-1.9c-0.2 0-0.4 0.2-0.4 0.4 0 0.2 0.2 0.4 0.4 0.4h1.9c0.1 1.6 0.4 3.2 1 4.6l-1.3 1.3c-0.2 0.2-0.2 0.5 0 0.6 0.1 0.1 0.2 0.1 0.3 0.1 0.1 0 0.2 0 0.3-0.1l1.1-1.1c0.3 0.7 0.7 1.3 1.2 1.9 -0.4 0.3-0.7 0.5-1 0.8C13.7 43.3 12.5 42.9 11.5 42.3zM15.9 75c-1.9-0.3-3.3-1.7-3.7-3.6h3.7V75zM31.7 58.5h-1.8V58h-4.9v0.5h-1.6v-3.9h8.4V58.5zM39.1 75v-3.6h3.7C42.4 73.3 41 74.8 39.1 75zM43.8 70h-4.7V59.8v-1.3 -3.4h-1.3v3.4H33v-5.2H22v5.2h-4.9v-3.4h-1.3v3.4h0v1.3h0V70h-4.7V54c0-4.1 2.2-7.8 5.6-10.3 2.6 3 6.4 4.8 10.7 4.8 4.3 0 8.1-1.9 10.7-4.8 3.4 2.5 5.6 6.2 5.6 10.3V70zM29.8 56.8h-4.9V56h4.9V56.8zM25.2 36.7h-2.3v-0.5l0.8-1c0.1-0.2 0.3-0.3 0.4-0.5v0H23v-0.6h2.1v0.5l-0.8 1c-0.1 0.2-0.3 0.3-0.4 0.5v0h1.2V36.7zM28.5 36.7h-2.8v-0.4l1.7-2.5v0h-1.5v-0.7h2.6v0.5L26.8 36v0h1.7V36.7zM31.4 36.7h-2.3v-0.5l0.8-1c0.1-0.2 0.3-0.3 0.4-0.5v0h-1.1v-0.6h2.1v0.5l-0.8 1c-0.1 0.2-0.3 0.3-0.4 0.5v0h1.2V36.7zM27.5 46C27.5 46 27.5 46 27.5 46 27.5 46 27.5 46 27.5 46c6.3 0 11.3-5.1 11.3-11.5 0-3-0.9-4.4-1.4-4.9 -1.8-2.8-8.3-3-9.7-3 -0.2 0-0.3 0-0.3 0 -6.3 0-8.9 2-9.7 2.7 0 0 0 0-0.1 0.1 -0.1 0.1-0.2 0.2-0.2 0.2 -0.4 0.5-1.4 1.9-1.4 4.9C16.2 40.9 21.2 46 27.5 46zM18.5 30.5L18.5 30.5 18.5 30.5c0 0 0.1-0.1 0.1-0.1l0 0c0.6-0.5 2.9-2.3 8.8-2.3l0 0 0 0c0 0 0.1 0 0.2 0 3.5 0 7.6 0.7 8.6 2.4l0 0.1 0 0.1c0.4 0.5 1.1 1.7 1.1 4.1 0 5.6-4.5 10.1-10 10.1l0 0h0l0 0 0 0c-5.5 0-10-4.6-10-10.1C17.5 32.1 18.1 31 18.5 30.5zM21.4 64.9l-0.6-0.5c0 0 0 0 0-0.1 0 0 0 0 0.1 0l0.8 0 0.3-0.7c0 0 0 0 0.1 0 0 0 0.1 0 0.1 0l0.3 0.7 0.8 0c0 0 0.1 0 0.1 0 0 0 0 0.1 0 0.1l-0.6 0.5 0.2 0.7c0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0 0 0 0 0l-0.6-0.4 -0.6 0.4c0 0-0.1 0-0.1 0s0 0 0-0.1L21.4 64.9zM45.3 80c0 0 0 0.1 0 0.1l-1 0.7 0.4 1.2c0 0 0 0.1 0 0.1 0 0 0 0-0.1 0 0 0 0 0-0.1 0l-1-0.7 -1 0.7c0 0-0.1 0-0.1 0s-0.1-0.1 0-0.1l0.4-1.2 -1-0.7c0 0-0.1-0.1 0-0.1 0 0 0.1-0.1 0.1-0.1l1.2 0 0.4-1.1c0 0 0.1-0.1 0.1-0.1 0 0 0.1 0 0.1 0.1l0.4 1.1 1.2 0C45.3 79.9 45.3 79.9 45.3 80zM24.5 78.3c0 0 0 0.1 0 0.1l-1 0.7 0.4 1.2c0 0 0 0.1 0 0.1 0 0 0 0-0.1 0 0 0 0 0-0.1 0l-1-0.7 -1 0.7c0 0-0.1 0-0.1 0 0 0-0.1-0.1 0-0.1l0.4-1.2 -1-0.7c0 0-0.1-0.1 0-0.1 0 0 0.1-0.1 0.1-0.1l1.2 0 0.4-1.1c0 0 0.1-0.1 0.1-0.1 0 0 0.1 0 0.1 0.1l0.4 1.1 1.2 0C24.4 78.2 24.5 78.2 24.5 78.3zM30 69C30 69 30 69.1 30 69c0 0.1-0.1 0.1-0.1 0.1 0 0 0 0 0 0l-0.8-0.5 -0.8 0.5c0 0-0.1 0-0.1 0 0 0 0-0.1 0-0.1l0.3-0.9 -0.7-0.6c0 0 0-0.1 0-0.1 0 0 0-0.1 0.1-0.1l0.9 0 0.3-0.9c0 0 0-0.1 0.1-0.1 0 0 0.1 0 0.1 0.1l0.3 0.9 0.9 0c0 0 0.1 0 0.1 0.1 0 0 0 0.1 0 0.1l-0.7 0.6L30 69zM36.2 83.9C36.2 83.9 36.2 83.9 36.2 83.9l-0.8 0.6 0.3 0.9c0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0 0 0 0 0l-0.8-0.5 -0.8 0.5c0 0-0.1 0-0.1 0 0 0 0-0.1 0-0.1l0.3-0.9 -0.7-0.6c0 0 0-0.1 0-0.1 0 0 0-0.1 0.1-0.1l0.9 0 0.3-0.9c0 0 0-0.1 0.1-0.1 0 0 0.1 0 0.1 0.1l0.3 0.9L36.2 83.9C36.2 83.8 36.2 83.8 36.2 83.9zM8.2 73.2C8.2 73.2 8.2 73.3 8.2 73.2l-0.6 0.5 0.2 0.7c0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0 0 0 0 0l-0.6-0.4 -0.6 0.4c0 0-0.1 0-0.1 0 0 0 0 0 0-0.1l0.2-0.7L6 73.3c0 0 0 0 0-0.1 0 0 0 0 0.1 0l0.7 0L7 72.4c0 0 0 0 0.1 0s0.1 0 0.1 0l0.2 0.7L8.2 73.2C8.1 73.2 8.2 73.2 8.2 73.2zM49.5 73C49.6 73 49.5 73 49.5 73l-0.8 0.6 0.3 0.9c0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0 0 0 0 0l-0.8-0.5 -0.8 0.5c0 0-0.1 0-0.1 0 0 0 0-0.1 0-0.1l0.3-0.9 -0.7-0.6c0 0 0-0.1 0-0.1 0 0 0-0.1 0.1-0.1l0.9 0 0.3-0.9c0 0 0-0.1 0.1-0.1 0 0 0.1 0 0.1 0.1l0.3 0.9L49.5 73C49.5 72.9 49.5 72.9 49.5 73zM13.9 81.2C13.9 81.3 13.9 81.3 13.9 81.2l-0.8 0.6 0.3 0.9c0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0 0 0 0 0l-0.8-0.5 -0.8 0.5c0 0-0.1 0-0.1 0 0 0 0-0.1 0-0.1l0.3-0.9 -0.7-0.6c0 0 0-0.1 0-0.1s0-0.1 0.1-0.1l0.9 0 0.3-0.9c0 0 0-0.1 0.1-0.1 0 0 0.1 0 0.1 0.1l0.3 0.9L13.9 81.2C13.8 81.2 13.9 81.2 13.9 81.2zM32.8 75.2C32.8 75.3 32.8 75.3 32.8 75.2L32 75.9l0.3 0.9c0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0 0 0 0 0l-0.8-0.5 -0.8 0.5c0 0-0.1 0-0.1 0 0 0 0-0.1 0-0.1l0.3-0.9L30 75.3c0 0 0-0.1 0-0.1 0 0 0-0.1 0.1-0.1l0.9 0 0.3-0.9c0 0 0-0.1 0.1-0.1 0 0 0.1 0 0.1 0.1l0.3 0.9L32.8 75.2C32.7 75.2 32.7 75.2 32.8 75.2z"/></svg></div>
            <div class="message">You need to create the table first...</div>

            <div class="action">
                <router-link class="el-button el-button--default" :to="`/${tabId}/connection/structure`">
                    <span class="title">Go To Structure</span>
                </router-link>
            </div>
        </div>

        <router-view v-else :key="$route.fullPath"></router-view>
    </div>

</template>

<script>
    export default {

        data() {
            return {

            }
        },

        created() {
            if(! this.tab || ! this.connection) {
                this.$router.replace('/');
            }

        },

        computed: {
            tab() {
                return this.$store.getters['Tabs/currentTab'];
            },

            tabId() {
                return this.tab ? this.tab.id : null;
            },

            connection() {
                return this.tab ? this.tab['connection'] : null;
            },

            database() {
                return this.connection ? this.connection.selectedDatabase : null;
            },

            table() {
                return this.database ? this.database.selectedTable : null;
            },

            supportingNewTable() {
                if(! this.table) {
                    return false;
                }

                if(this.table.isNew && this.$route.meta.supportNewTable !== true) {
                    return false;
                }

                return true;
            }

        }

    }

</script>

<style lang="scss" scoped>
    @import "../scss/variables";

    .connection-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }


    .unsupported-vue-message {
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        flex-shrink: 0;
        background-color: white;

        > div {
            flex: 0;
        }

        .message {
            margin: 0;
            font-weight: 400;
            color: $--color-primary;
        }

        .action {
            margin-top: 15px;

            a {
                text-decoration: none;
            }
        }

        svg {
            width: 150px;
        }

    }

</style>