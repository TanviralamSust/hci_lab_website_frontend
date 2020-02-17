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
    components: {
      navbar: Header
    },
    methods: {
      submit() {
        this.$store.dispatch('createAchievement', this.achievement).then((response)=>{
          console.log(response);
          this.$router.push('/members');
        }).catch((err)=>{
          console.log(err);
        });
      }
    }
  };
</script>
<style>
</style>
