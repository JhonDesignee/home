<template>
  <v-container>
    <v-card color="primary" v-for="(project, index) in projects" :key="index" class="my-4 rounded-xl">
      <v-list>
        <v-list-item>
          <v-list-item-avatar tile size="90" color="green"></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">{{ project.title }}</v-list-item-title>
            <v-list-item-title class="title">{{ project.description }}</v-list-item-title>
            <v-list-item-title class="subtitle-1 mt-4">status: {{ status[project.status] }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script setup>
  import { projects } from "~/static/data.json" 
  
  const status = ["finalizado", "inacabado", "desativado"]
</script>
