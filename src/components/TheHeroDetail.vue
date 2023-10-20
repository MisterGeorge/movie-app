<script setup>
  defineProps({
    nombre: {
      type: String,
      required: true
    },
    imagen: {
      type: String,
      required: true
    },
    calificacion: {
      type: Number,
      required: true
    }
  })
</script>

<template>
  <div class="content mb-12">
    <v-card class="hero rounded-xl">
      <v-img
        cover
        width="1200"
        height="480"
        aspect-ratio="16/9"
        :src="`${imagen}?image=${n * 5 + 10}`"
        :lazy-src="`${imagen}?image=${n * 5 + 10}`"
        gradient="to bottom, rgba(54, 44, 146, 0.40), rgba(18, 98, 151, 0.40)"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-card>
    <div class="details text-center">
      <h1 class="title p-2">{{ nombre }}</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .content {
    position: relative;

    .details {
      position: absolute;
      bottom: -2.5rem;
      left: 5rem;
      width: 35rem;
      @include border-radius (var(--vt-c-border-radius));
      background: var(--black-20, rgba(0, 0, 0, 0.20));
      backdrop-filter: blur(2.5rem);
      @include padding(1rem, 1rem, 1rem, 1rem);

      .title {
        @include font(var(--vt-c-font-family), 2rem, 600, normal, normal);
        line-height: 2.5rem!important;
        letter-spacing: -0.04rem;
      }
    }
  }
</style>
