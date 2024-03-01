<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <h1>SUSHI ORDERING</h1>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  padding: 3rem;
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;
  background-color: rgb(255, 220, 174);
} 

@media (min-width: 1024px) {
}

h1{
  font-size:4rem;
}
</style>
