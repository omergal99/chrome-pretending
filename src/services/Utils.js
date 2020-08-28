export default {
  openFullscreen(elem) {
    const browserInFullScreen = document.fullscreenElement || document.mozFullScreenElement ||
      document.webkitFullscreenElement || document.msFullscreenElement;
    if (!browserInFullScreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(err => { console.log(err); });
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen().catch(err => { console.log(err); });
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen().catch(err => { console.log(err); });
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen().catch(err => { console.log(err); });
      }
    }
  },

  closeFullscreen() {
    const browserInFullScreen = document.fullscreenElement || document.mozFullScreenElement ||
      document.webkitFullscreenElement || document.msFullscreenElement;
    if (browserInFullScreen) {
      document.exitFullscreen().catch(err => { console.log(err); });
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen().catch(err => { console.log(err); });
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen().catch(err => { console.log(err); });
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen().catch(err => { console.log(err); });
    }
  }

}