import React from 'react';
import styled from 'styled-components';
import VideoCard from './Atoms/VideoCard';

const VideoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 70px;
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
