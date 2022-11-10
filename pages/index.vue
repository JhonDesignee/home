<template>
  <v-container>
    <v-card color="primary" v-for="(project, index) in sorted_projects" :key="index" class="my-4 rounded-lg">
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
        <v-container class="px-1 pt-0 pb-2">
          <v-btn class="rounded-lg" color="accent" :to="project.path" :disabled="project.status === 2 ? true : false">Acessar</v-btn>
          <v-btn outlined class="rounded-lg" color="accent" @click="share(project.title, project.path)" :disabled="[1, 2].includes(project.status) ? true : false">Compartilhar</v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
    <v-snackbar rounded="lg" v-model="snackbar" color="accent">
      {{ snackbar_text }}
      <template #action="{ attrs }">
        <v-btn icon v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close-circle</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup>
  import { projects } from "~/static/data.json" 
  import { ref } from "vue" 
  
  const status = ["finalizado", "inacabado", "desativado"]
  const sorted_projects = projects.sort((i1, i2) => (i1.status - i2.status))
  let snackbar = ref(false)
  let snackbar_text = ref()
  
  function getStatusColor(status) {
    return status === 0 ? "green" : status === 1 ? "orange" : "grey"
  }
  
  function share(title, url) {
    if (process.client) {
      try {
        navigator.share({ title, url }).then(() => {
          snackbar_text.value = "Compartilhado!"
        }).catch(() => {
          snackbar_text.value = "Não foi possível compartilhar!"
        })
      } catch {
        snackbar_text.value = "Não foi possível compartilhar!"
      }
      snackbar.value = true
    }
  }
</script>
