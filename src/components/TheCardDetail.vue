<script setup>
    import DetailItem from '../components/DetailItem.vue'
    import IconStarCustom from '../components/icons/IconStarCustom.vue'
    import IconBookmarkCustom from '../components/icons/IconBookmarkCustom.vue'
    import IconCalendar from '../components/icons/IconCalendar.vue'
    import IconClock from '../components/icons/IconClock.vue'
    import IconTag from '../components/icons/IconTag.vue'

    defineProps({
        nombre: {
            type: String,
            required: true
        },
        descripcion: {
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
    <v-card
        class="card ps-10"
        color="base"
        variant="tonal"
        elevation="0"
    >
        <v-card-item>
            <h2 class="card-title mb-5">
                {{ nombre }}
            </h2>
            <p class="card-description mb-5">
                {{ descripcion }}
            </p>

            <DetailItem>
                <template #icon>
                  <IconStarCustom />
                </template>
                <template #heading>Calificación</template>
            
                {{ calificacion }}
            </DetailItem>

            <DetailItem>
                <template #icon>
                  <IconBookmarkCustom />
                </template>
                <template #heading>Tipo</template>
            
                Movie
            </DetailItem>

            <DetailItem>
                <template #icon>
                  <IconCalendar />
                </template>
                <template #heading>Fecha de lanzamiento</template>
            
                2019-04-24
            </DetailItem>

            <DetailItem>
                <template #icon>
                  <IconClock />
                </template>
                <template #heading>Duración</template>
            
                181 min
            </DetailItem>

            <DetailItem>
                <template #icon>
                  <IconTag />
                </template>
                <template #heading>Género</template>
            
                Adventure,  Science Fiction, Action
            </DetailItem>
            
        </v-card-item>
    </v-card>
</template>

<style lang="scss">
    .card {
        display: block;

        .card-title {
            @include font(var(--vt-c-font-family), 1.5rem, 700, normal, normal);
            color: var(--grey-50, #EBEEF5);
            line-height: 2rem!important;
            letter-spacing: -0.0225rem;
        }

        .card-description {
            @include font(var(--vt-c-font-family), 1.25rem, 400, normal, normal);
            color: var(--grey-300, #8E95A9);
            line-height: 2rem!important;
        }

        .card-rating {
            width: 3.5rem;
            @include border-radius (var(--vt-c-border-radius-button));
            background: var(--black-65, rgba(0, 0, 0, 0.65));
            backdrop-filter: blur(0.25rem);
        }
    }
</style>