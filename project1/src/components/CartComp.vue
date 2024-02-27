<template>
    <div class = "shoppingCart">
        <h2>Shopping Cart</h2>
        <div v-if ="store.cartItems.length === 0">
            <h2>{{ store.cartItems.length }}</h2>
            <p>No Items Yet</p>
        </div>
        <div v-else>
            <div v-for="item in store.cartItems" :key="item.name" class="cartItems">
            <div class="space">.</div>
            <p>{{ item.name }}</p>
            <p>{{ item.price }}</p>
            </div>
        </div>
        <div class="space">.</div>
        <p> Total: {{ store.cartItems.length }}</p>
    </div>
</template>

<script setup>
import { store } from '../stores/store.js'

function increment(){
    clicked.value++;
}
</script>

<style scoped>
.shoppingCart{
    position:fixed;
    right:0;
    top:0;
    width:17rem;
    height: 100%;
    background-color: white;
}

.space{
background-color:gray;
color:gray;
}

h2, h1, p{
  background-color:white;
  }
</style>