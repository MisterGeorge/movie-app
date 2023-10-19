<script setup>
  import TheItem from '../components/TheHeroPage.vue'
  import IconLogo from '../components/icons/IconLogo.vue'
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <TheItem>
          <template #icon>
            <IconLogo />
          </template>
          <template #heading>Movie App</template>
          <template #body>
            List of movies and TV Shows, I, Pramod Poudel have watched till date. 
            Explore what I have watched and also feel free to make a suggestion.
          </template>
        </TheItem>
      </v-col>
    </v-row>

  </v-container>
</template>