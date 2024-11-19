const foregroundEl = document.querySelector('.foreground')

window.onload = calcClipPath
window.onresize = calcClipPath

function calcClipPath() {
  const leftClipHeight = Math.floor(window.innerWidth / 20 - 25)
  const rightClipHeight = Math.floor(window.innerWidth / -20 + 125)
  foregroundEl.style.clipPath = `polygon(
      0 clamp(50%, ${leftClipHeight}%, 100%),
      100% clamp(0%, ${rightClipHeight}%, 50%),
      100% 100%,
      0 100%
  )`
}