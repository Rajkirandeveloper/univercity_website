import "./VideoPlayer.css";
import video from '../../assets/college-video.mp4';
import { useRef } from "react";

const VideoPlayer = ({ setPlayState, playState }) => {
  const player = useRef(null);

  const handleClosePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div onClick={handleClosePlayer} ref={player} className={`video-player ${playState ? '' : 'hide'}`}>
      <video src={video} autoPlay muted controls></video>
      
    </div>
  );
};

export default VideoPlayer;
