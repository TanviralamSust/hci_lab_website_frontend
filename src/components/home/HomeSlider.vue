<template>
  <div style="margin: 20px">
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
  </div>

</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "http://hd.wallpaperswide.com/thumbs/the_most_beautiful_road_in_the_world_2-t2.jpg",
          num: "First"
        },
        {
          src: "http://hd.wallpaperswide.com/thumbs/road_nature_love-t2.jpg",
          num: "Second"
        },
        {
          src: "http://hd.wallpaperswide.com/thumbs/moraine_lake_canadian_rockies-t2.jpg",
          num: "Second"
        },
        {
          src: "http://hd.wallpaperswide.com/thumbs/chamarel_waterfalls_mauritius-t2.jpg",
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
