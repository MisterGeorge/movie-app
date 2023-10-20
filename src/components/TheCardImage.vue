<script setup>
    defineProps({
        imagen: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <v-card 
        class="p-0 rounded-xl"
        elevation="4"
        variant="tonal"
    >
        <v-img
            class="rounded-xl"
            :src="imagen"
            width="450px"
            height="620px"
            cover
        ></v-img>
    </v-card>
</template>