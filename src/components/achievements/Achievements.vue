<template>
  <div>
    <navbar></navbar>

    <v-btn id="primaryButton" color="primary" @click="addAchievement()">Create Achievement</v-btn>

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
        achievementList: [
          {
            "_id": "5de38e1687cd4b399ea540d91",
            "title": "Participated in winter school",
            "description": "The whole team worked as a methodology to design application for tribal people",
            "createdAt": "2019-12-01T09:55:34.075Z",
            "updatedAt": "2019-12-01T09:58:34.315Z",
            "__v": 0
          },
          {
            "_id": "5de38e1687cd4b399ea540d92",
            "title": "Participated in summer school",
            "description": "The whole team worked as a methodology to design application for tribal people",
            "createdAt": "2019-12-01T09:55:34.075Z",
            "updatedAt": "2019-12-01T09:58:34.315Z",
            "__v": 0
          },
          {
            "_id": "5de38e1687cd4b399ea540d93",
            "title": "Organised acm workshop",
            "description": "The whole team worked as a methodology to design application for tribal people",
            "createdAt": "2019-12-01T09:55:34.075Z",
            "updatedAt": "2019-12-01T09:58:34.315Z",
            "__v": 0
          },
        ]
      }
    },
    mounted() {
      // this.fetchAchievements();
      this.fetchDummyAchievements();
    },
    components: {
      'achievement-details': AchievementDetails,
      'navbar': Header,
    },
    methods: {
      fetchAchievements() {
        let self = this;
        axios.get('http://localhost:9001/achievements').then(response => {
          self.achievements = response.data;
        })
      },
      addAchievement() {
        this.$router.push({
          path:'/achievements/addAchievement'
        })
      },
      fetchDummyAchievements() {
        this.$store.commit('addAchievements',this.achievementList);
      }
    }
  }
</script>
<style>

</style>
