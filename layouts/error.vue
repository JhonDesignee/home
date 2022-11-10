<template>
  <v-container class="d-flex flex-column align-center">
    <h1>Deu ruim! :/</h1>
    <p>{{error.statusCode }} - {{ error.message }}</p>
    <v-btn rounded color="accent" @click="$router.back()">Voltar</v-btn>
  </v-container>
</template>

<script setup>
  const props = defineProps(["error"])
  const error = props.error
</script>