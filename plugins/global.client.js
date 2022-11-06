export default (context, inject) => {
  inject("openUrl", (url) => {
    window.open(url, "_blank")
  })
  
  inject("loadEruda", () => {
    if (process.env.NODE_ENV === "development") {
      eruda.init()
    } 
  })
}