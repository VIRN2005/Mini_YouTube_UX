// VideoList.js
import React from 'react';
import styled from 'styled-components';
import VideoCard from '../Molecules/VideoCard'; 

const VideoListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
`;

const VideoList = ({ videos }) => {
  return (
    <VideoListContainer>
      {videos.map((video) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </VideoListContainer>
  );
};

export default VideoList;
