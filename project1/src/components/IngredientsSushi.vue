<template>
    <div class="card">
        <h2>{{ Destination.name}}</h2>
        <h3>{{ clicked }}</h3>
        <button @click="increment" >Add</button>
        <img :src="Destination.img" alt="">
         <h3>Price: {{ Destination.price}}</h3>
    </div>
</template>

<script setup>
import { ref } from "vue";

const cart = ref([])

const props = defineProps({
    Destination: Object,
});

const clicked = ref(0);
function increment(){
    clicked.value++;
    cart.value.push(props.Destination);
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
    padding:0px;
    background-color: white;
}

button{
    background-color: rgb(252, 218, 218);
    }
</style>
