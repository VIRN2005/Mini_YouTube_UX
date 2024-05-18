import React from 'react';
import styled from 'styled-components';
import VideoThumbnail from '../Atoms/VideoThumbnail';

const RecommendationsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px;
`;

const QuickRecommendations = () => {
  const recommendations = [
    { id: 1, thumbnail: 'video1.jpg' },
    { id: 2, thumbnail: 'video2.jpg' },
    { id: 3, thumbnail: 'video3.jpg' },
  ];

  return (
    <RecommendationsContainer>
      {recommendations.map((recommendation) => (
        <VideoThumbnail key={recommendation.id} src={recommendation.thumbnail} />
      ))}
    </RecommendationsContainer>
  );
};

export default QuickRecommendations;
