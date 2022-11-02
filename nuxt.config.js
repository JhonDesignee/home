import colors from "vuetify/es5/util/colors"

export default {
  target: "static",
  components: true,
  head: {
    titleTemplate: "%s - JhonDesignee",
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
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ], 
    script: [
      { src: "//cdn.jsdelivr.net/npm/eruda" }, 
      { type: "text/javascript", innerHTML: "eruda.init()" } 
    ]
  },
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
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  }
}