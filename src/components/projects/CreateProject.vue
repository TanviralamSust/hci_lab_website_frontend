<template>
  <div>
    <navbar></navbar>
    <v-card
      id="formHeadDiv"
      class="mx-auto"
      max-width="700">
      <b class="formHeader">
        Add Project
      </b>
      <p class="formDetails">
        Please give the below details to add your project
      </p>
    </v-card>
    <v-card id="formDiv"
      class="mx-auto"
      max-width="700"
      style="padding: 20px"
    >
    <form>
      <v-text-field
        v-model="project.title"
        label="Title"
        required
      ></v-text-field>
      <v-text-field
        v-model="project.description"
        label="Description"
        required
      ></v-text-field>
      <v-text-field
        v-model="project.duration"
        label="Duration"
        required
      ></v-text-field>
      <v-file-input
        v-model="project.projectImage"
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
      project: {
        title: "",
        description: "",
        duration: "",
        projectImage: null
      },
    };
  },
  mounted() {
    this.fetchProjects();
  },
  components: {
    navbar: Header
  },
  methods: {
      submit() {
        let bodyFormData = new FormData();
        bodyFormData.set('title', this.project.title);
        bodyFormData.set('description', this.project.description);
        bodyFormData.set('duration', this.project.duration);
        bodyFormData.append('projectImage', this.project.projectImage);

        let config = {headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Imd6ZXJvIiwiaWF0IjoxNTgxMjY5ODc3LCJleHAiOjE1ODEzNTYyNzd9.UfBEfGrAimZRyHhRDgyZienNxojprHCrZr2YVeN6C98'
            }
        };
        axios.post( 'http://localhost:9001/projects',
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
