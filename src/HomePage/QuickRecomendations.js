import React from 'react';
import styled from 'styled-components';
import VideoThumbnail from '../Atoms/VideoThumbnail';

const RecommendationsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px;
`;

const QuickRecommendations = ({ recommendations }) => {
  return (
    <RecommendationsContainer>
      {recommendations.map((recommendation) => (
        <VideoThumbnail key={recommendation.id} src={recommendation.thumbnail} alt="Video thumbnail" />
      ))}
    </RecommendationsContainer>
  );
};

export default QuickRecommendations;
