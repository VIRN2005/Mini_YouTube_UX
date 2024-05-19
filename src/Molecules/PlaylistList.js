import React from 'react';
import PlaylistCard from './PlaylistCard';

const PlaylistList = ({ playlists }) => {
  return (
    <div>
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
};

export default PlaylistList;