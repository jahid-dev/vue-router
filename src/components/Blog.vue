<script setup>
import {useRoute} from 'vue-router';
import {reactive, onBeforeMount} from 'vue';
import axios from 'axios'
const route = useRoute();
const post = reactive({
    title: ""
})

onBeforeMount(()=>{
    postDetails();
})

async function postDetails(){
    let url = "https://dummyjson.com/posts/"+route.params.id
    let response = await axios.get(url);
    post.title = response.data.title;
}

</script>

<template>  
    <h2>This is Blog Single Page</h2>
    <p>Blog Title {{post.title}}</p>
</template>

<style scoped>

</style>