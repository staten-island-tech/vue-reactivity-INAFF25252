<template>
    <div class = "cart">
    let shopCart = []
     <ul v-if ="shopCart.length > 0">
        <li v-for="item in cart" :key= "item.id">
            {{item.name}} - {{item.price}}
            <button @click="removeFromCart(item.id)">Remove</button>
        </li>
      </ul>
      <p v-else>Empty Cart</p>
      <button @click="checkout" v-if ="shopCart.length > 0">Checkout</button>
    </div>
</template>

<script setup>

</script>

<style scoped>
.cart{
    position:fixed;
    right:0;
    top:0;
    width:200px;
    height: 100%;
    background-color: white;
}
</style>