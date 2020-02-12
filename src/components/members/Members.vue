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
        memberList: [
          {
            "_id": "5de37211c0ff7416c1efcd171",
            "firstName": "Montaser",
            "lastName": "Hamid",
            "email": "montaserhamid13@gmail.com",
            "researchInterest": "child computer interaction",
            "designation": "Lecturer, RPU",
            "currentWork": "Working with child computer interaction",
            "createdAt": "2019-12-01T07:56:01.103Z",
            "updatedAt": "2019-12-01T07:56:01.103Z",
            "__v": 0
          },
          {
            "_id": "5de37211c0ff7416c1efcd172",
            "firstName": "Tanvir ",
            "lastName": "Alam",
            "email": "ta@gmail.com",
            "researchInterest": "computer interaction",
            "designation": "SE",
            "currentWork": "Working with computer interaction",
            "createdAt": "2019-12-01T07:56:01.103Z",
            "updatedAt": "2019-12-01T07:56:01.103Z",
            "__v": 0
          },
          {
            "_id": "5de37211c0ff7416c1efcd173",
            "firstName": "Forhad",
            "lastName": "Rabbi",
            "email": "fr@gmail.com",
            "researchInterest": "human computer interaction",
            "designation": "prof, SUST",
            "currentWork": "Working with human computer interaction",
            "createdAt": "2019-12-01T07:56:01.103Z",
            "updatedAt": "2019-12-01T07:56:01.103Z",
            "__v": 0
          }
        ]
      }
    },
    mounted() {
      // this.fetchMembers();
      this.fetchDummyMembers();
    },
    components: {
      'navbar': Header,
      'member-details' : MemberDetails
    },
    methods: {
      fetchMembers() {
        let self = this;
        axios.get('http://localhost:9001/members').then(response => {
          self.members = response.data;
        })
      },
      addMember() {
        console.log('entered');
        this.$router.push({
          path:'/members/addMember'
        })
      },
      fetchDummyMembers() {
        this.$store.commit('addMembers',this.memberList);
      }
    }
  }
</script>
<style>

</style>
