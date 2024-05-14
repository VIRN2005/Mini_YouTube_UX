import React from "react";
import styled from "styled-components";
import Button from "./atoms/Button";
import Icon from "./atoms/Icon";
import VideoThumbnail from "../atoms/VideoThumbnail";
import VideoTitle from "./atoms/VideoTitle";
import Label from "./atoms/Label";

const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  margin: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: 0.25rem;
  overflow: hidden;
`;

// Carta de Cada Video para mostrarse en la HomePage
const VideoCard = ({ video }) => {
  return (
    <VideoCardContainer>
      <VideoThumbnail src={video.thumbnail} alt={video.title} />
      <VideoTitle>{video.title}</VideoTitle>
      <Label>{video.description}</Label>
      <Button>Watch Now</Button>
      <Icon name="play" />
    </VideoCardContainer>
  );
};

export default VideoCard;
