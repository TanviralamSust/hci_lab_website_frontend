<template>
  <v-carousel cycle height="800" interval="100000" show-arrows-on-hover>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-row class="fill-height" justify="center">
        <b class="primaryText">{{ item.num }} decribe the activity happened last week</b>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          num: "First"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          num: "Second"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          num: "Second"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          num: "Second"
        }
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  }
};
</script>

<style>
</style>
