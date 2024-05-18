import React from 'react';
import styled from 'styled-components';

const VideoPlayerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const VideoPlayerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const VideoPlayer = ({ videoUrl, onClose }) => {
  return (
    <VideoPlayerOverlay>
      <VideoPlayerContainer>
        <video controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button onClick={onClose}>Cerrar</button>
      </VideoPlayerContainer>
    </VideoPlayerOverlay>
  );
};

export default VideoPlayer;
