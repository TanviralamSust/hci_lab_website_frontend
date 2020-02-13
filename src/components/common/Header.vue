<template>
    <v-toolbar id="headerDiv">
      <v-toolbar-title @click="showHome()" id="headerTitle">HCI Lab, SUST</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">

        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">
          <!-- <v-icon left dark>{{ item.icon }}</v-icon> -->
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          title: "Home",
          path: "/"
        },
        {
          title: "Projects",
          path: "/projects"
        },
        {
          title: "Members",
          path: "/members"
        },
        {
          title: "Notices",
          path: "/notices"
        },
        {
          title: "Achievements",
          path: "/achievements"
        }
      ]
    };
  },
  methods:{
    showHome() {
      this.$router.push({
        path:'/'
      })
    }
  }
};
</script>

<style>
</style>
