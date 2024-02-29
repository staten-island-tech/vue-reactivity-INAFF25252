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
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
h1{
  font-size:3rem;
}
</style>
