<script setup>
    defineProps({
        thumbnail: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        }
    })
</script>

<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card 
            class="card text-white-50"
            v-bind="props"
            :elevation="isHovering ? 24 : 4"
            variant="tonal"
        >
            <v-img
                class="card-thumbanil rounded-b-xl"
                :src="thumbnail"
                width="300px"
                height="350px"
                cover
            >
                <div class="d-flex justify-center card-rating text-center ms-2 mt-2">
                    <v-rating
                        length="1"
                        color="yellow"
                        density="compact"
                        half-increments
                        readonly
                    ></v-rating>
                    <p class="text-yellow text-h5 ms-1 mt-0">{{ rating }}</p>
                </div>
            </v-img>

            <v-card-title class="card-title pt-3">
                {{ title }}
            </v-card-title>
        </v-card>
    </v-hover>
</template>

<style lang="scss">
    .card {
        @include flexbox;
        @include flex-dir(column);
        @include align-items(flex-start);
        @include border-radius (var(--vt-c-border-radius)!important);
        @include padding(0,0,0,0);
        @include border-radius (var(--vt-c-border-radius));
        background: var(--black-20, rgba(0, 0, 0, 0.20)!important);
    
        .card-thumbnail {
            @include align-items(flex-start);
            @include border-radius (var(--vt-c-border-radius)!important);
        }

        .card-rating{
            width: 3.5rem;
            @include border-radius (var(--vt-c-border-radius-button));
            background: var(--black-65, rgba(0, 0, 0, 0.65));
            backdrop-filter: blur(0.25rem);
        }

        .card-title {
            @include font(var(--vt-c-font-family), 1rem, 600, normal, normal);
            line-height: 1.5rem!important;
            letter-spacing: 0.02rem;
        }
    }
</style>