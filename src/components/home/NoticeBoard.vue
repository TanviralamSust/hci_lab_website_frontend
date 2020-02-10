<template>
    <v-card
            max-width="400"
            class="mx-auto"
    >

        <v-app-bar
                dark
                color="pink"
        >

            <v-toolbar-title>Notice Board</v-toolbar-title>

            <v-spacer></v-spacer>
        </v-app-bar>

        <v-container>
            <v-row dense>

                <v-col
                        v-for="(item, i) in items"
                        :key="i"
                        cols="12"
                >
                    <v-card
                            :color="item.color"
                            dark
                    >
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title
                                        class="headline"
                                        v-text="item.title"
                                ></v-card-title>

                                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                            </div>

                            <v-avatar
                                    class="ma-3"
                                    size="125"
                                    tile
                            >
                                <v-img :src="item.src"></v-img>
                            </v-avatar>
                        </div>
                    </v-card>
                </v-col>
                <v-card-actions>
                    <v-btn text>Show More..</v-btn>
                </v-card-actions>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        data: () => ({
            items: [
                {
                    color: '#1F7087',
                    src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                    title: 'Supermodel',
                    artist: 'Foster the People',
                },
                {
                    color: '#952175',
                    src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                    title: 'Halcyon Days',
                    artist: 'Ellie Goulding',
                },
                {
                    color: '#1F7087',
                    src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                    title: 'Supermodel',
                    artist: 'Foster the People',
                }
            ],
        }),
    }
</script>

<style scoped>

</style>