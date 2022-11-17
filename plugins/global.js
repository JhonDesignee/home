export function loadEruda() {
  if (process.env.NODE_ENV === "development" && document) {
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

export function openUrl(url, target = "_blank") {
  if (window) {
    window.open(url, target)
  }
}

export function copyToClipboard(text) {
  if (navigator) {
    return navigator?.clipboard?.writeText(text)
  }
}

export function share(title = "", text = "", url = "", files = []) {
  try {
    return navigator?.share({ title, text, url, files })
  } catch (error) {
    return Promise.reject(new Error(error.message))
  }
} 
