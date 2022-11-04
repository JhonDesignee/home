<template>
  <v-app dark>
    <v-app-bar color="transparent" elevation="0" app>
      <v-app-bar-title>Jhon Designee</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-menu rounded="lg" offset-y>
        <template #activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list id="menu">
          <v-list-item  v-for="(value, index) in social" :key="index" @click="openUrl(value.url)">
            <v-list-item-content>
              <v-list-item-title>{{ value.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container class="pa-0">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { social } from "~/static/data.json"
  
  function openUrl(url) {
    if (process.client) {
      window.open(url, "_blank")
    }
  }
</script>

<style>
  body {
    font-family: Montserrat;
    font-weight: 700;
  }
  .v-application--wrap {
    background-image: linear-gradient(to top right, var(--v-primary-darken2), var(--v-secondary-darken4));
  }
  
  #menu {
    background-color: var(--v-secondary-darken3);
  }
</style>
