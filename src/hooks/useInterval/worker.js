function simpleCount(time = 1000) {
  setTimeout(() => {
    // eslint-disable-next-line no-restricted-globals
    self.postMessage(time)
    simpleCount(time)
  }, time)
}
onmessage = function (e) {
  if (e.data.action === 'start') {
    simpleCount(e.data.time)
  }
}
