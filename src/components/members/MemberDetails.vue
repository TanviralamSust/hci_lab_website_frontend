<template>
  <div class>
    <div style="margin: 20px" v-for="(item, index) in items" :key ="item._id">
      <v-card
        class="mx-auto"
        max-width="700"
        style="padding: 20px">
          <v-container>
            <v-row justify="space-between">

              <v-col cols="auto">
                <v-img
                  height="200"
                  width="200"
                  src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                ></v-img>
                <div style="margin-top: 10px">
                  <v-btn text>Delete</v-btn>

                  <v-btn color="purple" text>
                    Update
                  </v-btn>
                </div>
              </v-col>
                <div class="memberDiv" style="margin-top: 10px">

                    <p class="aboutText">Name: {{item.firstName+item.lastName}}</p>

                    <p class="aboutText">Email: {{item.email}}</p>

                    <p class="aboutText">Designation: {{item.designation}}</p>

                    <p class="aboutText">Research Interest: {{item.researchInterest}}</p>

                    <p class="aboutText">Current Work: {{item.currentWork}}</p>

                </div>
            </v-row>
          </v-container>
        </v-card>
    </div>
  </div>
</template>

<script>
  export default {
    computed : {
      items() {
        return this.$store.getters.getMembers
      }
    },
  }
</script>

<style scoped>

</style>

