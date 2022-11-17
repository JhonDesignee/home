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
        <v-list color="primary">
          <v-container class="p-0 m-0" v-for="(value, index) in social" :key="index">
            <v-list-item @click="value.name !== 'Home' ? openUrl(value.url) : $router.push(value.url)">
              <v-list-item-icon>
                <v-icon>{{ value.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="ftt">{{ value.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider v-if="value.name === 'Home'"></v-divider>
          </v-container>
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
  import { loadEruda, openUrl } from "~/plugins/global.js" 
  import { onMounted } from "vue"
  
  onMounted(() => { loadEruda() })
  social.unshift({
    "name": "Home", 
    "icon": "mdi-home", 
    "url": "/"
  })
</script>

<style>
  .v-application, .ftt {
    font-family: Montserrat, sans-serif !important;
    font-weight: 700 !important;
  }
  
  .v-application--wrap {
    background-color: var(--v-primary-base);
  }
  
  :is(.v-text-field--outlined, .v-textarea--outlined) fieldset {
    border-color: white;
    opacity: 1;
  }
</style>
