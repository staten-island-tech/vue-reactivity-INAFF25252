<template>
  <div>
    <Container>
    <DestCard 
    v-for = "destination in destinations" 
    :key = "destination.name"
    :Destination = "destination"
    />
    </Container>
  </div>
</template>

<script setup>
import Container from "@/components/Container.vue";
import DestCard from "@/components/DestCard.vue";
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

</style>