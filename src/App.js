// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled, { ThemeProvider } from 'styled-components';
import VideoList from './Molecules/VideoList';
import Navbar from './HomePage/NavBar';
import Sidebar from './HomePage/SideBar';
import ShortsList from './HomePage/ShortsList';

const theme = {
  colors: {
    primary: '#FF0000',
    primaryHover: '#CC0000',
    background: '#F9F9F9',
    text: '#0F0F0F',
  },
};

const AppContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
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
  const [shorts, setShorts] = useState([]);
  const API_KEY = 'AIzaSyCFThgeLaG_DHJC-c72v7u6DdI3l176RNQ'; // Reemplazar con tu clave de API de YouTube

  useEffect(() => {
    const fetchData = async (query, setResult) => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            maxResults: 10,
            q: query,
            key: API_KEY,
          },
        });
        setResult(response.data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData('react tutorials', setVideos);
    fetchData('react shorts', setShorts);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Sidebar />
        <ContentContainer>
          <Navbar />
          <VideoSection title="Video Recommendations" videos={videos} />
          <ShortsSection title="Shorts" videos={shorts} />
        </ContentContainer>
      </AppContainer>
    </ThemeProvider>
  );
};

const VideoSection = ({ title, videos }) => {
  return (
    <div>
      <h1>{title}</h1>
      <VideoList videos={videos} />
    </div>
  );
};

const ShortsSection = ({ title, videos }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ShortsList videos={videos} />
    </div>
  );
};

export default App;
