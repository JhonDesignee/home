<template>
  <v-container>
    <v-card color="primary" v-for="(project, index) in projects" :key="index" class="my-4 rounded-xl">
      <v-list color="transparent">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h5 ftt">{{ project.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ project.description }}</v-list-item-subtitle>
            <v-list-item-subtitle class="mt-2">status: <span :class="`${getStatusColor(project.status)}--text`">{{ status[project.status] }}</span></v-list-item-subtitle>
          </v-list-item-content>
          <v-badge bordered :color="getStatusColor(project.status)">
            <v-list-item-avatar tile size="90" color="grey" class="rounded-lg mr-1">
              <v-img lazy-src="/404_image.png" :src="project.image"></v-img>
            </v-list-item-avatar>
          </v-badge>
        </v-list-item>
      </v-list>
      <v-card-actions>
        <v-container class="pa-1 pt-0">
          <v-btn rounded color="tertiary" @click="$openUrl(project.path)" :disabled="project.status === 2 ? true : false">Acessar</v-btn>
          <v-btn outlined rounded color="tertiary" @click="share(project.title, project.path)" :disabled="[1, 2].includes(project.status) ? true : false">Compartilhar</v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
  import { projects } from "~/static/data.json" 
  
  const status = ["finalizado", "inacabado", "desativado"]
  
  function getStatusColor(status) {
    return status === 0 ? "green" : status === 1 ? "orange" : "grey"
  }
  
  function share(title, url) {
    if (process.client) {
      try {
        navigator.share({ title, url })
      } catch {}
    }
  }
</script>
