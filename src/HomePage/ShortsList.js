// ShortsList.js
import React from 'react';
import styled from 'styled-components';
import VideoThumbnail from '../Atoms/VideoThumbnails';

const ShortsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px;
`;

const ShortsList = ({ videos }) => {
  return (
    <ShortsContainer>
      {videos.map((video) => (
        <VideoThumbnail key={video.id} src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
      ))}
    </ShortsContainer>
  );
};

export default ShortsList;
