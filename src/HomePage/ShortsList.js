// ShortsList.js
import React from 'react';
import styled from 'styled-components';
import VideoThumbnail from '../Atoms/VideoThumbnails'; // Asegúrate de importar tu componente de thumbnail

const ShortsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px;
  border-radius: 8px;
`;

const ShortThumbnail = styled(VideoThumbnail)`
  width: 200px; /* Ajusta el ancho según lo necesites */
  height: 400px; /* Ajusta la altura según lo necesites */
  object-fit: cover;
  margin-right: 10px; /* Espacio entre los thumbnails */
`;

const ShortsList = ({ videos }) => {
  return (
    <ShortsContainer>
      {videos.map((video) => (
        <ShortThumbnail key={video.id.videoId} src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      ))}
    </ShortsContainer>
  );
};

export default ShortsList;
