<template>
  <div>
    <navbar></navbar>
    <home-slider></home-slider>
  </div>
</template>
<script>
import HomeSlider from "./HomeSlider";
import Header from "../common/Header";
export default {
  methods: {
    viewProjects() {
      this.$router.push("/projects");
    }
  },
  components: {
    "home-slider": HomeSlider,
    navbar: Header
  }
};
</script>
<style>
</style>