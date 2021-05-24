import Controller from './controller.js'
import View from './view.js'
import playlist from './data/playlist.js'
import AudioStream from './util/audio-stream.js'

const view = new View()
const audioStream = new AudioStream()

Controller.initialize({
  view,
  audioStream,
  playlist
})
