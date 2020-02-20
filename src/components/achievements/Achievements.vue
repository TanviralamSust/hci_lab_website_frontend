<template>
  <div>
    <navbar></navbar>

    <v-btn v-show="$store.getters.isAuthenticated" id="primaryButton" color="primary" @click="addAchievement()">Create Achievement</v-btn>

    <achievement-details></achievement-details>

  </div>
</template>

<script>
  import Header from "../common/Header";
  import axios from 'axios';
  import AchievementDetails from "./AchievementDetails";

  export default {
    data() {
      return {
        achievements:[],
      }
    },
    mounted() {
      this.fetchAchievements();
    },
    components: {
      'achievement-details': AchievementDetails,
      'navbar': Header,
    },
    methods: {
      fetchAchievements() {
        this.$store.dispatch('fetchAchievements');
      },
      addAchievement() {
        this.$router.push({
          path:'/achievements/addAchievement'
        })
      },
    }
  }
</script>
<style>

</style>
