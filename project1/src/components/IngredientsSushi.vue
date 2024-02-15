<template>
    <div class ="Container">

<h1>{{ Destination.name }}</h1>
<img :src="Destination.img" alt="">
<h2>{{  clicked }}</h2>
<button @click="increment">Click Me</button>
    </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
    Destination: Object,
});

const clicked = ref(0);
function increment(){
    clicked.value++;
}
</script>

<style scoped>

img{
    width: 20%;
    height: auto;
}

.Container{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    flex-direction: column;
    width: 40%;
    justify-content: space-between;
    padding: 2rem
}

button{
    background-color: rgb(252, 218, 218);
    }
</style>
