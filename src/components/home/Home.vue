<template>
  <div>
    <navbar></navbar>
    <home-slider></home-slider>

    <div class="homeBody">
      <div>
        <div><about></about></div>
        <div style="margin-top: 30px"><contact></contact></div>
      </div>

      <div><notice-board></notice-board></div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>
<script>

import HomeSlider from "./HomeSlider";
import Header from "../common/Header";
import NoticeBoard from "./NoticeBoard";
import About from "./About";
import Details from "./Details";
import Contact from "./Contact";
import Footer from "../common/Footer";

export default {

  beforeMount() {
    this.fetchDummyNotices();
  },

  components: {
    "home-slider": HomeSlider,
    navbar: Header,
    "notice-board": NoticeBoard,
    about: About,
    details_div: Details,
    contact: Contact,
    "footer-bar": Footer,
  },
  data() {
    return {
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

  methods: {
    viewProjects() {
      this.$router.push("/projects");
    },
    fetchDummyNotices() {
      this.$store.commit('addNotices',this.noticeList);
    }
  },

};
</script>
<style>
</style>
