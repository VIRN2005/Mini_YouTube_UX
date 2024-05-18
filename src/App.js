import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoList from './VideoList';

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            maxResults: 10,
            q: 'react tutorials',
            key: 'YOUR_API_KEY',
          },
        });
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h1>Video Recommendations</h1>
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
