<template>
  <v-app dark>
    <v-app-bar flat color="transparent" app>
      <v-app-bar-title>Jhon Designee</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-menu rounded="lg" offset-y>
        <template #activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list color="secondary">
          <v-list-item  v-for="(value, index) in social" :key="index" @click="$openUrl(value.url)">
            <v-list-item-icon>
              <v-icon>{{ value.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="ftt">{{ value.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { social } from "~/static/data.json"
  import { loadEruda } from "~/plugins/global.js" 
  import { onMounted } from "vue"
  
  onMounted(() => {
    loadEruda()
  })
</script>

<style>
  .v-application, .ftt {
    font-family: Montserrat, sans-serif !important;
    font-weight: 700 !important;
  }
  
  .v-application--wrap {
    background-image: linear-gradient(to top right, var(--v-primary-darken1), var(--v-secondary-darken3));
  }
  
  :is(.v-text-field--outlined, .v-textarea--outlined) fieldset {
    border-color: white;
  }
</style>
