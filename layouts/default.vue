<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>{{ title }}</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template #activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(value, index) in social" :key="index">
            <a :href="value.url">
              <v-list-item-title>{{ value.name }}</v-list-item-title>
            </a>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { social } from "~/static/data.json"
</script>

<script>
  export default {
    data() {
      return {
        title: "Home"
      }
    }, 
    head() {
      return {
        title: this.title
      }
    }
  }
</script>

<style>
  a {
    text-decoration: none;
    color: var(--v-primary-base);
  }
</style>