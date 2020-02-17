<template>
  <div>
    <navbar></navbar>

    <v-btn id="primaryButton" color="primary" @click="addMember()">Add Member</v-btn>

    <member-details></member-details>

  </div>
</template>
<script>
  import Header from "../common/Header";
  import MemberDetails from "./MemberDetails";
  import axios from 'axios';
  export default {
    data() {
      return {
        members:[],
      }
    },
    mounted() {
      this.fetchMembers();

    },
    components: {
      'navbar': Header,
      'member-details' : MemberDetails
    },
    methods: {
      fetchMembers() {
        this.$store.dispatch('fetchMembers');
      },
      addMember() {
        console.log('entered');
        this.$router.push({
          path:'/members/addMember'
        })
      },
    }
  }
</script>
<style>

</style>
