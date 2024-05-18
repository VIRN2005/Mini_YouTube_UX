import React from 'react';
import styled from 'styled-components';
import VideoCard from './VideoCard';

const VideoListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
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
