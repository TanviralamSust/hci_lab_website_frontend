<template>
    <div>
        <navbar></navbar>
        <project-details></project-details>
        <ul>
            <li v-for="project in projectList" :key="project.id">{{project.title}}</li>
        </ul>
    </div>
</template>
<script>
import Header from "../common/Header";
import Projectdetails from "./Projectdetails";
import axios from 'axios';
export default {
    data() {
        return {
            projectList: []
        }
    },
    mounted() {
        this.fetchProjects();
    },
    components: {
        'navbar': Header,
        'project-details' : Projectdetails
    },
    methods: {
        fetchProjects() {
            let self = this;
            axios.get('http://localhost:9001/projects').then(response => {
                self.projectList = response.data;
            })
        }
    }
}
</script>
<style>

</style>
