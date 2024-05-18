import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled, { ThemeProvider } from 'styled-components';
import VideoList from './VideoList';
import Navbar from './HomePage/NavBar';
import Sidebar from './HomePage/SideBar';

// Define your theme
const theme = {
  colors: {
    primary: '#FF0000', // YouTube red
    primaryHover: '#CC0000',
    background: '#F9F9F9', // Light gray background
    text: '#0F0F0F', // Dark text
  },
};

const AppContainer = styled.div`
  display: flex;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 240px;
  padding-top: 80px;
`;

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
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Sidebar />
        <ContentContainer>
          <Navbar />
          <h1>Video Recommendations</h1>
          <VideoList videos={videos} />
        </ContentContainer>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
