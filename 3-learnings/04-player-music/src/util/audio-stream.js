import { secondsToMinutes } from './util.js'

export default class AudioStream {
  async initialize (source) {
    if (this.audio) {
      this.stop()
    }

    this.audio = new Audio(source)
    await new Promise(resolve => this.audio.onloadedmetadata = resolve)
    this.audio.muted = false
  }

  stop () {
    this.audio.pause()
    this.setCurrentTime(0)
  }
  
  play () {
    this.audio.play()
  }

  pause () {
    this.audio.pause()
  }

  setCurrentTime (value) {
    this.audio.currentTime = value
  }

  currentTime () {
    return this.audio.currentTime
  }

  duration () {
    return secondsToMinutes(this.audio.duration)
  }
}
