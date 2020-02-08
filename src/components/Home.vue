<template>
    <div>
        <h1>Home</h1>
        <button @click="viewProjects()">Click me</button>
    </div>
    
</template>
<script>
export default {
    methods : {
        viewProjects() {
            this.$router.push('/projects');
        }
    }
}
</script>
<style>

</style>