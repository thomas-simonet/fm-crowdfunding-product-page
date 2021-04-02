export default {
  methods: {
    animateNumber (value, start, end, duration) {
      let startTimestamp = null
      const step = (timestamp) => {
        if (!startTimestamp) {
          startTimestamp = timestamp
        }
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        this[value] = Math.floor(progress * (end - start) + start).toLocaleString()
        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    }
  }
}
