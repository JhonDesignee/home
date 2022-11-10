import colors from "vuetify/es5/util/colors"

export default {
  target: "static",
  components: true,
  head: {
    titleTemplate: "%s ¦ JhonDesignee",
    title: "Home",
    htmlAttrs: {
      lang: "pt-br"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Random things" },
      { name: "format-detection", content: "telephone=no" }, 
      { property: "og:title", content: "Jhon Designee" }, 
      { property: "og:type", content: "website" }, 
      { property: "og:url", content: "https://jhondesignee.netlify.app" }, 
      { property: "og:image", content: "https://jhondesignee.netlify.app/icon.png" }, 
      { property: "og:image:url", content: "https://jhondesignee.netlify.app/icon.png" }, 
      { property: "og:image:alt", content: "Logo do site" }, 
      { property: "og:description", content: "Random things" }, 
      { property: "og:locale", content: "pt_BR" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png?v2" }
    ], 
    script: [
      { src: "//cdn.jsdelivr.net/npm/eruda" }
    ]
  },
  modules: [
    "@nuxtjs/google-fonts"
  ], 
  buildModules: [
    "@nuxtjs/vuetify"
  ], 
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      options: {
        customProperties: true
      }, 
      dark: true,
      themes: {
        dark: {
          primary: colors.purple.darken1,
          secondary: colors.indigo.darken1,
          accent: colors.lightBlue.darken1,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  }, 
  googleFonts: {
    families: {
      Montserrat: [300, 500, 700, 900]
    }
  }
}
