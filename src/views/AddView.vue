<script setup>
  import TheItem from '../components/TheHeroPage.vue'
  import IconMovie from '../components/icons/IconMovie.vue'

  import { reactive } from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { required, helpers } from '@vuelidate/validators'

  const initialState = {
    nombre     : '',
    descripcion: '',
    imagen     : ''
  }

  const state = reactive({
    ...initialState,
  })

  const rules = {
    nombre     : { required: helpers.withMessage('This field cannot be empty', required) },
    descripcion: { required: helpers.withMessage('This field cannot be empty', required) },
    imagen     : { required: helpers.withMessage('This field cannot be empty', required) }
  }

  const v$ = useVuelidate(rules, state)
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <TheItem>
          <template #icon>
            <IconMovie />
          </template>
          <template #heading>Agregar nueva Pelicula</template>
          <template #body>
            En esta vista usted puede agregar o crear una nueva pelicula.
          </template>
        </TheItem>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="6"
        offset="3"
      >
        <v-form>
          <v-text-field
            required
            v-model="state.nombre"
            :rules="rules"
            label="Nombre de la pelicula"
            @input="v$.nombre.$touch"
            @blur="v$.nombre.$touch"
            :error-messages="v$.nombre.$errors.map(e => e.$message)"
          ></v-text-field>

          <v-textarea
            v-model="state.descripcion"
            :rules="rules"
            label="Descripcion de la pelicula"
            @input="v$.descripcion.$touch"
            @blur="v$.descripcion.$touch"
            :error-messages="v$.descripcion.$errors.map(e => e.$message)"
          ></v-textarea>

          <v-text-field
            v-model="state.imagen"
            :rules="rules"
            label="Imagen"
            @input="v$.imagen.$touch"
            @blur="v$.imagen.$touch"
            :error-messages="v$.imagen.$errors.map(e => e.$message)"
          ></v-text-field>

          <v-spacer></v-spacer>
    
          <v-btn
            :loading="loading"
            @click="v$.$validate"
            block
            class="mt-2"
            text="Agregar nueva"
          ></v-btn>
        </v-form>
      </v-col>
    </v-row>

  </v-container>
</template>