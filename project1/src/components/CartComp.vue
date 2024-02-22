<template>
    <div class = "shoppingCart">
        <h2>Shopping Cart</h2>
        <div v-if ="cart.length === 0">
            <h2>{{ cart.length }}</h2>
            <p>No Items Yet</p>
        </div>
        <div v-else>
            <div v-for="item in cart" :key="item.name" class="cartItems">
            <p>{{ item.name }}</p>
            <p>{{ item.price }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    cart: Array,
});

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

h2, h1, p{
  background-color:white;
  }
</style>