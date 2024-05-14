import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 200px;
  margin-right: 10px;
`;

const Thumbnail = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const Title = styled.h3`
  font-size: 14px;
  margin: 5px 0;
`;

const Channel = styled.p`
  font-size: 12px;
  color: #555;
`;

const VideoCard = ({ video }) => {
  return (
    <CardContainer>
      <Thumbnail src={video.thumbnail} alt={video.title} />
      <Title>{video.title}</Title>
      <Channel>{video.channelName}</Channel>
    </CardContainer>
  );
};

export default VideoCard;
