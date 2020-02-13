<template>
  <div>
    <navbar></navbar>

    <v-btn id="primaryButton" color="primary" @click="addNotice()">Add Notice</v-btn>

    <notice-details></notice-details>

  </div>
</template>
<script>
  import Header from "../common/Header";
  import NoticeDetails from "./NoticeDetails";
  import axios from 'axios';
  export default {
    data() {
      return {
        notices:[],
        noticeList: [
          {
            "_id": "5de38e1687cd4b399ea540d92",
            "title": "workshop on Hci 1",
            "organization":"SUST",
            "organiser": "Dr Forhad Rabbi",
            "description": "Its an methodology to design application for tribal people so particate at the workshop to understand you skill",
            "deadline": "10/3/2020",
            "createdAt": "2019-12-01T09:55:34.075Z",
            "updatedAt": "2019-12-01T09:58:34.315Z",
            "__v": 0
          },
          {
            "_id": "5de38e1687cd4b399ea540d91",
            "title": "workshop on Hci 2",
            "organiser": "Dr Forhad Rabbi",
            "organization":"CSE Dept",
            "description": "Its an methodology to design application for tribal people so particate at the workshop to understand you skill",
            "deadline": "10/3/2020",
            "createdAt": "2019-12-01T09:55:34.075Z",
            "updatedAt": "2019-12-01T09:58:34.315Z",
            "__v": 0
          },
          {
            "_id": "5de38e1687cd4b399ea540d93",
            "title": "workshop on Hci 3",
            "organization":"ACM Chapter",
            "organiser": "Dr Forhad Rabbi",
            "description": "Its an methodology to design application for tribal people so particate at the workshop to understand you skill",
            "deadline": "10/3/2020",
            "createdAt": "2019-12-01T09:55:34.075Z",
            "updatedAt": "2019-12-01T09:58:34.315Z",
            "__v": 0
          }
        ]
      }
    },
    mounted() {
      // this.fetchNotices();
      this.fetchDummyNotices();
    },
    components: {
      'navbar': Header,
      'notice-details' : NoticeDetails
    },
    methods: {
      fetchNotices() {
        let self = this;
        axios.get('http://localhost:9001/notices').then(response => {
          self.notices = response.data;
        })
      },
      addNotice() {
        console.log('entered');
        this.$router.push({
          path:'/notices/addNotice'
        })
      },
      fetchDummyNotices() {
        this.$store.commit('addNotices',this.noticeList);
      }
    }
  }
</script>
<style>

</style>
