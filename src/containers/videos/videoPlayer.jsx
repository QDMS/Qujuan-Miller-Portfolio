import React, { useRef, useState } from 'react';
import './styles.scss';
import Video1 from './GoingToJail.mp4'
import Video2 from './Drop_Chain_Anim.mp4'
import Video3 from './JumarBusinessAd.mp4'
 
const VideoPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const handleVideoChange = (event) => {
    setSelectedVideo(event.target.value);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div
      className={`video-player-container ${isFullscreen ? 'fullscreen' : ''}`}
    >
      <select value={selectedVideo} onChange={handleVideoChange}>
        <option value="">Select a Film Reel</option>
        <option value={Video1}>Behind The Movement(Going to jail scene)</option>
        <option value="https://example.com/video2.mp4">Video 2</option>
        <option value="https://example.com/video3.mp4">Video 3</option>
      </select>
      <select value={selectedVideo} onChange={handleVideoChange}>
        <option value="">Select a Animation Video</option>
        <option value={Video2}>Drop Chain Ent. Animation(Made with Blender)</option>
        <option value={Video3}>Jay-Tech Solution Ad(Made with ThreeJS)</option>
        <option value="https://example.com/video3.mp4">Video 3</option>
      </select>

      {selectedVideo && (
        <div className="video-player">
          <video ref={videoRef} src={selectedVideo} controls />
          <div className="controls">
            <button onClick={playVideo}>Play</button>
            <button onClick={pauseVideo}>Pause</button>
            <button className="fullscreen-button" onClick={toggleFullscreen}>
              {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
