<script setup>
  import TheHeroDetail from '../components/TheHeroDetail.vue'
  import CardImage from '../components/TheCardImage.vue'
  import CardDetail from '../components/TheCardDetail.vue'
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <TheHeroDetail
          thumbnail="https://www.themoviedb.org//t/p/w1920_and_h800_multi_faces/6YwkGolwdOMNpbTOmLjoehlVWs5.jpg"
          title="Avengers: Age of Ultron"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="4"
      >
        <CardImage thumbnail="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg" />
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="8"
      >
        <CardDetail
          title="Avengers: Endgame"
          description="After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store."
          rating="8"
        />
      </v-col>
    </v-row>

  </v-container>
</template>