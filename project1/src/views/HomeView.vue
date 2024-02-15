<template>
  <CartComp></CartComp>
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
const destinations = [
        {
          name: "Cucumber",
          freeOrNot: true,
          price: 0.00,
          img: "/cucumber.jpg",
        },
        {
          name: "Avocado",
          freeOrNot: false,
          price: 2.00,
          img: "/avocado.jpg",
        },
        {
          name: "Cream cheese",
          freeOrNot: false,
          price: 1.00,
          img: "/cream-cheese.jpg",
        },
        {
          name: "Tobiko",
          freeOrNot: false,
          price: 1.00,
          img: "/tobiko.jpg",
        },
        {
          name: "Kani",
          freeOrNot: false,
          price: 1.00,
          img: "/kani.jpg",
        },
        {
          name: "Mango",
          freeOrNot: false,
          price: 1.50,
          img: "/mango.jpg",
        },
        {
          name: "Jalapeno",
          freeOrNot: false,
          price: 1.00,
          img: "/jalapeno.jpg",
        },
        {
          name: "Scallion",
          freeOrNot: true,
          price: 0.00,
          img: "/scallion.jpg",
        },
        {
          name: "Soy Paper",
          freeOrNot: false,
          price: 1.00,
          img: "/soy-paper.jpg",
        },
        {
          name: "Eel",
          freeOrNot: false,
          price: 2.00,
          img: "/eel.jpg",
        },
      ]
</script>

<style scoped>
.Container{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    flex-direction: column;
    width:80%;
    justify-content: space-between;
    padding: 1rem
}
</style>