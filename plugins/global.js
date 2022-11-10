export function loadEruda() {
  if (process.env.NODE_ENV === "development") {
    try {
      eruda.init()
    } catch {
      alert("Eruda not initialized")
    }
  }
}

export function openUrl(url) {
  window.open(url, "_blank")
}

export function copyToClipboard(text, {resolve = () => {}, reject = () => {}}) {
  navigator?.clipboard?.writeText(text).then(resolve).catch(reject)
}