<script setup>
  import TheItem from '../components/TheHeroPage.vue'
  import IconLogo from '../components/icons/IconLogo.vue'
  import Card from '../components/TheCard.vue'
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

    <v-row>
      <v-col
        v-for="n in 4"
        :key="n"
        cols="12"
        sm="2"
        md="3"
      >
        <Card
          thumbnail="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg"
          title="Avengers: Age of Ultron" 
          rating="8" 
        />
      </v-col>
    </v-row>

  </v-container>
</template>