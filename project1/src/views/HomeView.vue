<template>
  <CartComp :cart="cart"/>
  <div class = "Container"> 
    <IngredientsSushi
    v-for = "destination in destinations" 
    :key = "destination.name"
    :Destination = "destination"
    />
  </div>
</template>

<script setup>
import CartComp from "@/components/CartComp.vue";
import IngredientsSushi from "@/components/IngredientsSushi.vue";
import { ref } from 'vue';

const cart = ref([]);

const destinations = [
        {
          name: "Cucumber",
          price: 4.99,
          img: "/cucumber.jpg",
        },
        {
          name: "Avocado",
          price: 4.99,
          img: "/avocado.jpg",
        },
        {
          name: "California",
          price: 5.99,
          img: "/california.jpg",
        },
        {
          name: "Philidelphia",
          price: 5.99,
          img: "/phili.jpg",
        },
        {
          name: "Spicy Kani",
          price: 5.99,
          img: "/kani.jpg",
        },
        {
          name: "Boston",
          price: 5.50,
          img: "/boston.jpg",
        },
        {
          name: "Alaskan",
          price: 5.99,
          img: "/alaskan.jpg",
        },
        {
          name: "Red Devil",
          price: 15.99,
          img: "/red.jpg",
        },
        {
          name: "Dragon",
          price: 15.99,
          img: "/dragon.jpg",
        },
        {
          name: "Eel-Avocado",
          price: 5.99,
          img: "/eel-avo.jpg",
        },
        {
          name: "Shrimp Tempura",
          price: 6.99,
          img: "/shrimp-temp.jpg",
        },
         {
          name: "Chicken Tempura",
          price: 6.99,
          img: "/chicken-temp.jpg",
        },
        {
          name: "Shrimp Avocado",
          price: 5.99,
          img: "/shrimp-avo.jpg",
        },
        {
          name: "Spicy Salmon",
          price: 5.99,
          img: "/sp-salmon.jpg",
        },
        {
          name: "Spicy Tuna",
          price: 5.99,
          img: "/sp-tuna.jpg",
        },
        {
          name: "Tuna",
          price: 5.99,
          img: "/tuna.jpg",
        },
        {
          name: "Salmon",
          price: 5.99,
          img: "/salmon.jpg",
        },
        {
          name: "Kani",
          price: 5.99,
          img: "/reg-kani.jpg",
        },
        {
          name: "Shrimp Mango",
          price: 5.99,
          img: "/mango.jpg",
        },
        {
          name: "Yellowtail Scallion",
          price: 5.99,
          img: "/yellowtail.jpg",
        },
      ]
</script>

<style scoped>
.Container{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width:80%;
    justify-content: space-between;
    padding: 1rem
}

</style>