<template>
  <v-toolbar>
    <v-toolbar-title>HCI LAB WEBSITE</v-toolbar-title>
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
        }
      ]
    };
  }
};
</script>

<style>
</style>