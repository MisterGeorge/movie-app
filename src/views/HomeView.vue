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
          <template #heading>Aplicación de Cine</template>
          <template #body>
            Lista de películas y programas de televisión que yo, Jorge Armando he visto hasta la fecha. Explora lo que he visto.
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
          imagen="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg"
          nombre="Avengers: Age of Ultron" 
          calificacion="8" 
        />
      </v-col>
    </v-row>

  </v-container>
</template>