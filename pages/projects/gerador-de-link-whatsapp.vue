<template>
  <v-container>
    <v-card color="primary" class="rounded-lg pt-2">
      <v-container>
        <v-form ref="form">
          <v-text-field outlined no-resize type="number" v-model="input_phone_number" :rules="[textFieldRule]" color="accent" class="rounded-lg" label="Número de telefone" hint="formato internacional" persistent-hint></v-text-field>
          <v-textarea outlined no-resize v-model="input_message" class="rounded-lg" color="accent" label="Mensagem" hint="opcional" persistent-hint></v-textarea> 
          <v-btn block class="rounded-lg" color="accent" @click="generateWhatsAppLink()">Gerar</v-btn>
        </v-form>
        <v-textarea outlined no-resize readonly :append-icon="clipboard_icon" v-model="output_link" color="accent" @click:append="copyToClipboard(output_link, clipboard_callback)" class="mt-6 rounded-lg"></v-textarea>
      </v-container>
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
  import { ref } from "vue"
  import { copyToClipboard } from "~/plugins/global.js"
  
  const clipboard_callback = ref({
    resolve: () => {
      clipboard_icon.value = "mdi-clipboard-check"
      snackbar_text.value = "Link copiado!"
      snackbar.value = true
    }, 
    reject: () => {
      snackbar_text.value = "Não foi possível copiar!"
      snackbar.value = true 
    }
  }) 
  const form = ref(null)
  let snackbar = ref(false)
  let snackbar_text = ref("")
  let input_phone_number = ref("")
  let input_message = ref("")
  let output_link = ref("")
  let clipboard_icon = ref("mdi-clipboard-text")
  
  function textFieldRule(text) {
    return Boolean(text) || "Preencha esse campo"
  }
  
  function generateWhatsAppLink() {
    if (!form.value.validate()) {
      return
    }
    clipboard_icon.value = "mdi-clipboard-text"
    let message = input_message.value ? `?text=${encodeURIComponent(input_message.value)}` : ""
    output_link.value = `https://wa.me/${input_phone_number.value}${message}`
  }
</script>

<script>
  export default {
    head: {
      title: "Gerador de link WhatsApp", 
      meta: [
         { hid: "og:title", name: "og:title", content: "Gerador de link WhatsApp" }, 
         { hid: "description", name: "description", content: "Gere o link do seu contato do WhatsApp" },
         { hid: "og:description", name: "og:description", content: "Gere o link do seu contato do WhatsApp" },
         { hid: "og:url", name: "og:url", content: "https://jhondesignee.netlify.app/projects/gerador-de-link-whatsapp" }
      ]
    }
  }
</script>