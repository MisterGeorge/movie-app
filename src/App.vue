<script setup>
  import { RouterView } from 'vue-router'
  import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <v-layout>
    <TheNavbar title="Movie App" />
    <v-main>
      <RouterView />
    </v-main>
  </v-layout>
</template>