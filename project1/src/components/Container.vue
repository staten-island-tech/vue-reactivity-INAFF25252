<template>
    <v-app>
      <div class="ma-4">
        <v-card
          class="d-flex pa-2"
          outlined
          tile
        >
          <div>A flexbox container</div>
        </v-card>
      </div>
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'App',
  };
  </script>

<style scoped>
.Container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem
}
</style>