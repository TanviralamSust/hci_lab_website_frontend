<template>
    <div>
        <navbar></navbar>

          <v-btn id="primaryButton" color="primary" @click="addProject()">Create Project</v-btn>

        <project-details></project-details>

    </div>
</template>
<script>
import Header from "../common/Header";
import Projectdetails from "./Projectdetails";
import axios from 'axios';
import {routes} from "../../routes";
export default {
    data() {
        return {
            projects:[],
            projectList: [
              {
                "_id": "5de38e1687cd4b399ea540d9",
                "title": "Design UI/UX for ethnic minority people 1",
                "coordinators": "Dr Forhad Rabbi, Tanvir Alam, Md Montaser Hamid",
                "description": "Its an methodology to design application for tribal people",
                "duration": "10/1/2019 : prosent ",
                "createdAt": "2019-12-01T09:55:34.075Z",
                "updatedAt": "2019-12-01T09:58:34.315Z",
                "__v": 0
              },
              {
                "_id": "5de38e1687cd4b399ea540d9",
                "title": "Design UI/UX for ethnic minority people 2",
                "coordinators": "Dr Forhad Rabbi, Tanvir Alam, Md Montaser Hamid",
                "description": "Its an methodology to design application for tribal people",
                "duration": "10/1/2019 : prosent ",
                "createdAt": "2019-12-01T09:55:34.075Z",
                "updatedAt": "2019-12-01T09:58:34.315Z",
                "__v": 0
              },
              {
                "_id": "5de38e1687cd4b399ea540d9",
                "title": "Design UI/UX for ethnic minority people 3",
                "coordinators": "Dr Forhad Rabbi, Tanvir Alam, Md Montaser Hamid",
                "description": "Its an methodology to design application for tribal people",
                "duration": "10/1/2019 : prosent ",
                "createdAt": "2019-12-01T09:55:34.075Z",
                "updatedAt": "2019-12-01T09:58:34.315Z",
                "__v": 0
              }
            ]
        }
    },
    mounted() {
       // this.fetchProjects();
      this.fetchDummyProjects();
    },
    components: {
        'navbar': Header,
        'project-details' : Projectdetails
    },
    methods: {
        fetchProjects() {
            let self = this;
            axios.get('http://localhost:9001/projects').then(response => {
                self.projects = response.data;
            })
        },
        addProject() {
          console.log('entered');
          this.$router.push({
            path:'/projects/addProject'
          })
        },
        fetchDummyProjects() {
            this.$store.commit('addProject',this.projectList);
        }
    }
}
</script>
<style>

</style>
