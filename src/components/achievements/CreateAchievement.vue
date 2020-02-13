<template>
  <div>
    <navbar></navbar>
    <v-card
      id="formHeadDiv"
      class="mx-auto"
      max-width="700">
      <b class="formHeader">
        Add Achievement
      </b>
      <p class="formDetails">
        Please give the below details to add your achievement
      </p>
    </v-card>
    <v-card id="formDiv"
            class="mx-auto"
            max-width="700"
            style="padding: 20px"
    >
      <form>
        <v-text-field
          v-model="achievement.title"
          label="Title"
          required
        ></v-text-field>
        <v-text-field
          v-model="achievement.description"
          label="Description"
          required
        ></v-text-field>
        <v-file-input
          v-model="achievement.achievementImage"
          accept="image/*"
          label="Image">
        </v-file-input>
        <v-btn class="mr-4" @click="submit">submit</v-btn>
        <!-- <v-btn @click="clear">clear</v-btn> -->
      </form>
    </v-card>
  </div>
</template>
<script>
  import Header from "../common/Header";
  import axios from "axios";
  export default {
    data() {
      return {
        achievement: {
          title: "",
          description: "",
          achievementImage: null
        },
      };
    },
    mounted() {
      this.fetchAchievements();
    },
    components: {
      navbar: Header
    },
    methods: {
      submit() {
        let bodyFormData = new FormData();
        bodyFormData.set('title', this.achievement.title);
        bodyFormData.set('description', this.achievement.description);
        bodyFormData.append('achievementImage', this.achievement.projectImage);
        console.log(JSON.stringify(this.achievement));

        let config = {headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Imd6ZXJvIiwiaWF0IjoxNTgxMjY5ODc3LCJleHAiOjE1ODEzNTYyNzd9.UfBEfGrAimZRyHhRDgyZienNxojprHCrZr2YVeN6C98'
          }
        };
        axios.post( 'http://localhost:9001/achievements',
          bodyFormData,
          config
        )
          .then(function (response) {
            //handle success
            console.log(response);
          })
          .catch(function (response) {
            //handle error
            console.log(response);
          });
      }
    }
  };
</script>
<style>
</style>
