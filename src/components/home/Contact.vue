<template>
  <v-card
  >

    <form class="contactForm">
      <v-text-field
        v-model="user.email"
        label="Email"
        required
      ></v-text-field>
      <v-textarea
        name="input-7-1"
        label="Message"
        v-model="user.message"
        auto-grow
      ></v-textarea>
      <v-btn class="mr-4" @click="submit">submit</v-btn>
      <!-- <v-btn @click="clear">clear</v-btn> -->
    </form>
  </v-card>

</template>

<script>
  export default {
    data() {
      return {
        user: {
          email: "",
          message:"",},
      }
    },
    methods: {
      submit() {
        console.log(this.user.email+this.user.message);
      }
    }
  }
</script>

<style scoped>

</style>
