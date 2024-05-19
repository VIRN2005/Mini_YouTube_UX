import React from 'react';
import PlaylistCard from '../Molecules/PlaylistCard';

const PlaylistSection = ({ title, playlists }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default PlaylistSection;