<template>
    <div class="card">
        <h2>{{ Destination.name}}</h2>
        <img :src="Destination.img" alt="">
         <h3>Price: {{ Destination.price }}</h3>
         <button @click="addCart(Destination)" >Amount: {{ store.clicked }}</button>
         <h3>{{ clicked }}</h3>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { store } from '../stores/store.js'

const props = defineProps({
    Destination: Object,
});

const clicked = ref(0);

function addCart(item){
    store.addCart(item);
    clicked.value++;
    }

</script>

<style scoped>

img{
    width: 100%;
    height: 40%;
    object-fit: cover;
}

.card{
    width:20%;
    height:auto;
    margin:.5rem;
    padding-top: 1rem;
    padding-right: .5rem;
    padding-left: .5rem;
    background-color: white;
    border-radius:3%;
}

button{
    background-color: rgb(252, 218, 218);
    }
</style>
