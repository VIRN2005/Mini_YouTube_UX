// VideoCard.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  margin: 10px;
  width: 240px; 
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 160px; /* Ajustar altura de la miniatura */
  object-fit: cover;
`;

const Content = styled.div`
  padding: 10px;
`;

const Title = styled.h3`
  font-size: 14px; /* Reducir tamaño del título */
  color: #333;
  margin-bottom: 5px;
`;

const Channel = styled.p`
  font-size: 12px; /* Tamaño del nombre del canal */
  color: #777; /* Color más claro */
  margin-bottom: 5px;
`;

const Views = styled.p`
  font-size: 12px; /* Tamaño de las vistas */
  color: #777; /* Color más claro */
`;

const VideoCard = ({ video }) => {
  const views = video.statistics ? video.statistics.viewCount : 'N/A';

  return (
    <CardContainer>
      <Thumbnail src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <Content>
        <Title>{video.snippet.title}</Title>
        <Channel>{video.snippet.channelTitle}</Channel>
        <Views>{views} views</Views>
      </Content>
    </CardContainer>
  );
};

export default VideoCard;

