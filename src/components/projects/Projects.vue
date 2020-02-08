<template>
    <div>
        <navbar></navbar>
        <ul>
            <li v-for="project in projectList" :key="project.id">{{project.title}}</li>
        </ul>
    </div>
</template>
<script>
import Header from "../common/Header";
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