export default (context, inject) => {
  inject("openUrl", (url) => {
    window.open(url, "_blank")
  })
}