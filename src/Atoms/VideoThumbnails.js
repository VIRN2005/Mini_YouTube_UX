// VideoThumbnail.js
import React from 'react';
import styled from 'styled-components';

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoThumbnail = ({ src, alt, className }) => {
  return <ThumbnailImage src={src} alt={alt} className={className} />;
};

export default VideoThumbnail;
