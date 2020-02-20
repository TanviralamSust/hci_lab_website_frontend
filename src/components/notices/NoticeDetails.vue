<template>
  <div class="projectsDiv">
    <div style="margin: 20px" v-for="(item, index) in items" :key ="item._id">
      <v-card
        class="mx-auto"
        max-width="700"
        style="padding: 20px"
        id="cardDiv"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline">{{item.title}}</v-list-item-title>
            <v-list-item-subtitle>by {{item.organiser}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <div class="noticeDiv" style="margin-top: 10px">

          <p class="aboutText">Organiser: {{item.organization}}</p>

          <p class="aboutText">Deadline: {{item.deadline}}</p>

          <p class="aboutText">Description: </p>

          <p class="aboutText">{{item.description}}</p>

        </div>

        <v-card-actions>
          <v-btn
            v-show="$store.getters.isAuthenticated"
            text>Delete</v-btn>

          <v-btn
            v-show="$store.getters.isAuthenticated"
            color="purple"
            text
          >
            Update
          </v-btn>

          <v-btn

            color="blue"
            text
          >
            Download Notice
          </v-btn>


        </v-card-actions>

      </v-card>
    </div>
  </div>
</template>

<script>
    export default {
        computed : {
          items() {
            return this.$store.getters.getNotices
          }
        },

    }
</script>

<style scoped>

</style>
