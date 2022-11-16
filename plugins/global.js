export function loadEruda() {
  if (process.env.NODE_ENV === "development") {
    const script = document.createElement("script")
    script.src = "//cdn.jsdelivr.net/npm/eruda"
    script.addEventListener("load", () => {
      try {
        eruda.init()
      } catch {
        alert("Eruda not initialized")
      }
    })
    document.head.appendChild(script)
  }
}

export function openUrl(url) {
  window.open(url, "_blank")
}

export function copyToClipboard(text, { resolve = () => {}, reject = () => {} }) {
  navigator?.clipboard?.writeText(text).then(resolve).catch(reject)
}