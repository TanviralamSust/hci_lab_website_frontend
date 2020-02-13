<template>
  <div>
    <navbar></navbar>
    <v-card
      id="formHeadDiv"
      class="mx-auto"
      max-width="700">
      <b class="formHeader">
        Add Notice
      </b>
      <p class="formDetails">
        Please give the below details to add your notice!
      </p>
    </v-card>
    <v-card id="formDiv"
            class="mx-auto"
            max-width="700"
            style="padding: 20px"
    >
      <form>
        <v-text-field
          v-model="notice.title"
          label="Title"
          required
        ></v-text-field>
        <v-text-field
          v-model="notice.organization"
          label="Organization Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="notice.organiser"
          label="Organiser"
          required
        ></v-text-field>
        <v-text-field
          v-model="notice.deadline"
          label="Deadline"
          required
        ></v-text-field>
        <v-text-field
          v-model="notice.description"
          label="Description"
          required
        ></v-text-field>
        <v-file-input
          v-model="notice.noticeFile"
          chips label="Upload File">
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
        notice: {
          title: "",
          organization: "",
          organiser: "",
          deadline: "",
          description: "",
          noticeFile: null
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
        bodyFormData.set('title', this.notice.title);
        bodyFormData.set('organization', this.notice.organization);
        bodyFormData.set('organiser', this.notice.organiser);
        bodyFormData.set('deadline', this.notice.deadline);
        bodyFormData.set('description', this.notice.description);
        bodyFormData.append('noticeFile', this.notice.noticeFile);
        console.log(JSON.stringify(this.notice));

        let config = {headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Imd6ZXJvIiwiaWF0IjoxNTgxMjY5ODc3LCJleHAiOjE1ODEzNTYyNzd9.UfBEfGrAimZRyHhRDgyZienNxojprHCrZr2YVeN6C98'
          }
        };
        axios.post( 'http://localhost:9001/notices',
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
