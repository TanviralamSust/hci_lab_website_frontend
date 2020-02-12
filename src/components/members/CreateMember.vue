<template>
  <div>
    <navbar></navbar>
    <v-card
      id="formHeadDiv"
      class="mx-auto"
      max-width="700">
      <b class="formHeader">
        Add Member
      </b>
      <p class="formDetails">
        Please give the below details to add member!
      </p>
    </v-card>
    <v-card id="formDiv"
            class="mx-auto"
            max-width="700"
            style="padding: 20px"
    >
      <form>
        <v-text-field
          v-model="member.firstName"
          label="First Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="member.lastName"
          label="Last Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="member.researchInterest"
          label="Research Interest"
          required
        ></v-text-field>
        <v-text-field
          v-model="member.designation"
          label="Designation"
          required
        ></v-text-field>
        <v-text-field
          v-model="member.currentWork"
          label="Current Work"
          required
        ></v-text-field>
        <v-file-input
          v-model="member.memberImage"
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
        member: {
          firstName: "",
          lastName: "",
          email: "",
          researchInterest: "",
          designation: "",
          currentWork: "",
          memberImage: null
        },
      };
    },
    mounted() {
      this.fetchDummyMembers();
    },
    components: {
      navbar: Header
    },
    methods: {
      submit() {
        let bodyFormData = new FormData();
        bodyFormData.set('firstName', this.member.firstName);
        bodyFormData.set('lastName', this.member.lastName);
        bodyFormData.set('email', this.member.email);
        bodyFormData.set('researchInterest', this.member.researchInterest);
        bodyFormData.set('designation', this.member.designation);
        bodyFormData.set('currentWork', this.member.currentWork);
        bodyFormData.append('memberImage', this.member.memberImage);

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
