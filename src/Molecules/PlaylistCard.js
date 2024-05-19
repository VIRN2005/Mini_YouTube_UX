import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
`;

const PlaylistCard = ({ playlist }) => {
  return (
    <Card>
      <h3>{playlist.title}</h3>
      <p>{playlist.description}</p>
      <p>Total de videos: {playlist.videoCount}</p>
    </Card>
  );
};

export default PlaylistCard;
