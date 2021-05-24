export default class Controller {
  #isPlaying = false
  #playlistIndex = 0
  #currentAudio = {}

  constructor ({ view, audioStream, playlist }) {
    this.view = view
    this.audioStream = audioStream
    this.playlist = playlist
  }

  static initialize (dependencies) {
    const instance = new Controller(dependencies)

    return instance._init()
  }

  _init() {
    this.onLoad()
    this.view.configurePlayPauseButton(this.onPlayPause.bind(this))
    this.view.configureBackwardButton(this.onBackward.bind(this))
    this.view.configureForwardButton(this.onForward.bind(this))
    this.view.configureSeekBarButton(this.onSeekBar.bind(this))
    this.view.configureSeekBarButton(this.onSeekBarMove.bind(this))
  }

  async onLoad() {
    this.#currentAudio = this.playlist[this.#playlistIndex]

    this.view.cover.src = this.#currentAudio.cover
    this.view.title.innerText = this.#currentAudio.title
    this.view.artist.innerText = this.#currentAudio.artist

    this.view.currentTime.innerText = '00:00'
    this.view.time.innerText = '00:00'
    this.view.seekBar.style.width = '0%'
    this.view.icoPlay.classList.remove('d-none')
    this.view.icoPause.classList.add('d-none')

    await this.audioStream.initialize(this.#currentAudio.file)
    this.audioStream.audio.ontimeupdate = () => this.update()
    this.view.time.innerText = this.audioStream.duration()
  }

  onPlayPause () {
    if (this.#isPlaying) this.onPause()
    else this.onPlay()
  }

  onPlay () {
    this.#isPlaying = true
    this.audioStream.play()
    this.view.icoPlay.classList.add('d-none')
    this.view.icoPause.classList.remove('d-none')
  }

  onPause () {
    this.#isPlaying = false
    this.audioStream.pause()
    this.view.icoPlay.classList.remove('d-none')
    this.view.icoPause.classList.add('d-none')
  }

  onSeekBar () {
    this.onSeekBarMove()
  }

  onSeekBarMove () {
    this.view.seekBar.style.width = `${this.view.seekBarInput.value}%`
  }

  update () {
    this.view.seekBarInput.value = this.audioStream.currentTime()
    this.onSeekBarMove()
  }

  onBackward () {
    if (this.#playlistIndex > 0) {
      this.#playlistIndex--
      this.onLoad()
      this.onPlay()
    }
  }

  onForward () {
    if (this.#playlistIndex < this.playlist.length - 1) {
      this.#playlistIndex++
    } else {
      this.#playlistIndex = 0
    }
    this.onLoad()
    this.onPlay()
  }

}