<script setup>
  import { RouterLink } from 'vue-router'

  defineProps({
    title: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <v-app-bar color="blue-grey-darken-4">
    <v-container>
      <v-row dense>
        <v-col cols="2">
          <div class="d-flex">
            <v-app-bar-title class="align-self-center">{{ title }}</v-app-bar-title>
          </div>
        </v-col>
        <v-col cols="10">
          <nav class="nav">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
            <RouterLink class="nav-link" to="/detail">Detail</RouterLink>
          </nav>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss">
  .nav {
    @include flexbox;
    @include justify-content(end);
    @include flex-wrap(wrap);
    @include padding(0, 0, 0, 0);
    @include margin(0, 0, 0, 0);
    list-style: none;

    .nav-link {
      display: block;
      @include padding(.5rem, .5rem, .5rem, .5rem);
      @include margin(0, 0, 0, 0);
      @include transition(color, .15s, ease-in-out);
      @include transition(background-color, .15s, ease-in-out);
      @include transition(border-color, .15s, ease-in-out);
    }
  }
</style>