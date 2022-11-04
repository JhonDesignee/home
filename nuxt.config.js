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
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/png", href: "~/static/favicon.png" }
    ], 
    script: [
      { src: "//cdn.jsdelivr.net/npm/eruda" }, 
      { type: "text/javascript", innerHTML: "eruda.init()" } 
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
          tertiary: colors.lightBlue.darken1, 
          accent: colors.grey.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  }, 
  googleFonts: {
    download: true, 
    fontsPath: "~/assets/fonts", 
    families: {
      Montserrat: [300, 500, 700, 900]
    }
  }
}
