export default class View {
  constructor () {
    this.cover = document.querySelector('#player .cover img')

    this.title = document.querySelector('#player .info .title')
    this.artist = document.querySelector('#player .info .artist')
    
    this.currentTime = document.querySelector('#player .progress .current-time')
    this.time = document.querySelector('#player .progress .time')
    this.seekBar = document.querySelector('#player .progress .line .current')
    this.seekBarInput = document.querySelector('#player .progress .line #seekbar')

    this.btnPlayPause = document.querySelector('#player .play-pause')
    this.icoPlay = document.querySelector('#player .ico-play')
    this.icoPause = document.querySelector('#player .ico-pause')
    this.btnBackward = document.querySelector('#player .backward')
    this.btnForward = document.querySelector('#player .forward')
  }

  onPlayPause (command) {
    return () => {
      command()
    }
  }

  onBackward (command) {
    return () => {
      command()
    }
  }

  onForward (command) {
    return () => {
      command()
    }
  }

  onSeekBar (command) {
    return () => {
      command()
    }
  }

  onSeekBarMove (command) {
    return () => {
      command()
    }
  }

  configurePlayPauseButton (command) {
    this.btnPlayPause.addEventListener('click', this.onPlayPause(command))
  }

  configureBackwardButton (command) {
    this.btnBackward.addEventListener('click', this.onBackward(command))
  }

  configureForwardButton (command) {
    this.btnForward.addEventListener('click', this.onForward(command))
  }

  configureSeekBarButton (command) {
    this.seekBarInput.addEventListener('change', this.onSeekBar(command))
    this.seekBarInput.addEventListener('mousemove', this.onSeekBarMove(command))
  }

}
