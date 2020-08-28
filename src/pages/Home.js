import React from 'react';
import Utils from '../services/Utils';
export default function Home() {

  const openFullscreen = React.useCallback(() => {
    const elem = document.documentElement;
    Utils.openFullscreen(elem);
  }, [])

  const closeFullscreen = () => {
    Utils.closeFullscreen();
  }

  const openNewWindow = () => {
    console.log('openNewWindow');
    const newWindow = window.open("", "", "width=400, height=200");
    Utils.openFullscreen(newWindow);
  }

  const openFullscreenIfClose = React.useCallback(() => {
    const browserInFullScreen = document.fullscreenElement || document.mozFullScreenElement ||
      document.webkitFullscreenElement || document.msFullscreenElement;
    // if (!browserInFullScreen) openFullscreen();
  }, [openFullscreen])

  const handleUserKeyPress = React.useCallback((ev) => {
    const style = 'background-color:#0086b3; color:white; font-size: 1rem';
    console.log(`ev.key: %c ${ev.key} %c ev.code: %c ${ev.code} %c ev.which: %c ${ev.which} `,
      style, '', style, '', style);
    openFullscreenIfClose();
  }, [openFullscreenIfClose])

  React.useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);
    window.addEventListener('mousedown', openFullscreenIfClose);
    return (() => {
      window.removeEventListener('keydown', handleUserKeyPress);
      window.removeEventListener('mousedown', openFullscreenIfClose);
    })
  }, [handleUserKeyPress, openFullscreenIfClose])

  React.useEffect(() => {
    window.addEventListener('mouseup', ev => {
      const style = 'background-color:#b25643; color:white; font-size: 1rem';
      console.log(`ev.which: %c ${ev.which} `, style);
    });
    return (() => {
      window.removeEventListener('mouseup');
    })
  }, [])

  return (
    <div className="home">
      <div>
        <button onClick={openFullscreen}>Open Full Screen</button>
        <button onClick={closeFullscreen}>Close Full Screen</button>
      </div>
      <input type="text" />
      <div>
        <button onClick={openNewWindow}>Open New Window</button>
      </div>
      <iframe src="" title="lalalala" onClick={()=> {console.log('sdggsgsdg')}} >
        <input type="text" />
      </iframe>
      <iframe width="420" height="345" src="https://www.youtube.com/embed/yAHLs-t-Png">
        <input type="text" />
      </iframe>
      <iframe src="https://www.facebook.com" title="lalalala"></iframe>
      <iframe id="if1" width="100%" height="254" style={{ visibility: 'visible' }}
        src="http://www.google.com/custom?q=&btnG=Search">
      </iframe>
    </div>
  );
}