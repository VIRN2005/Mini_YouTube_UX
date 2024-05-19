import React from 'react';
import styled from 'styled-components';
import VideoCard from '../Molecules/VideoCard';

const ShortsContainer = styled.div`
  display: flex;
  flex-direction: column; 
  padding: 10px;
`;

const ShortVideoCard = styled(VideoCard)` /* Estilos para el video card de los shorts */
  width: 100px; 
  height: 300px; 
`;

const ShortsList = ({ videos }) => {
  return (
    <ShortsContainer>
      {videos.map((video) => (
        <ShortVideoCard key={video.id} video={video} />
      ))}
    </ShortsContainer>
  );
};

export default ShortsList;
