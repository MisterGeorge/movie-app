<script setup>
  import TheItem from '../components/TheHeroPage.vue'
  import IconMovie from '../components/icons/IconMovie.vue'

  import { reactive } from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { required, helpers } from '@vuelidate/validators'

  const initialState = {
    name       : '',
    description: '',
    image      : ''
  }

  const state = reactive({
    ...initialState,
  })

  const rules = {
    name       : { required: helpers.withMessage('This field cannot be empty', required) },
    description: { required: helpers.withMessage('This field cannot be empty', required) },
    image      : { required: helpers.withMessage('This field cannot be empty', required) }
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
          <template #heading>Add Movie</template>
          <template #body>
            In this view you can to add a movie or TV Shows.
          </template>
        </TheItem>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="4"
        offset="4"
      >
        <v-form>
          <v-text-field
            required
            v-model="state.name"
            :rules="rules"
            label="Name"
            @input="v$.name.$touch"
            @blur="v$.name.$touch"
            :error-messages="v$.name.$errors.map(e => e.$message)"
          ></v-text-field>

          <v-textarea
            v-model="state.description"
            :rules="rules"
            label="Description"
            @input="v$.description.$touch"
            @blur="v$.description.$touch"
            :error-messages="v$.description.$errors.map(e => e.$message)"
          ></v-textarea>

          <v-text-field
            v-model="state.image"
            :rules="rules"
            label="Image"
            @input="v$.image.$touch"
            @blur="v$.image.$touch"
            :error-messages="v$.image.$errors.map(e => e.$message)"
          ></v-text-field>

          <v-spacer></v-spacer>
    
          <v-btn
            :loading="loading"
            @click="v$.$validate"
            block
            class="mt-2"
            text="Add new"
          ></v-btn>
        </v-form>
      </v-col>
    </v-row>

  </v-container>
</template>