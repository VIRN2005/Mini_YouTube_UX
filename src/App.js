// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled, { ThemeProvider } from 'styled-components';
import VideoList from './Molecules/VideoList';
import Navbar from './HomePage/NavBar';
import Sidebar from './HomePage/SideBar';
import ShortsList from './HomePage/ShortsList';
import QuickBar from './HomePage/QuickBar';
import PlaylistSection from './HomePage/PlaylistSection';


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
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 240px;
  padding-top: 80px;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding-top: 20px;
  }
`;

const App = () => {
  const [playlists,setPlaylists] = useState([]);
  const [videos, setVideos] = useState([]);
  const [videosSeguir, setVideosSeguir] = useState([]);
  const [videosMiMix, setVideosMix] = useState([]);
  const [shorts, setShorts] = useState([]);
  const API_KEY = 'AIzaSyDKX1E0RjlyufD3F9_yYon2KZUw-WAow7A'; 


  useEffect(() => {
    const fetchPlaylists = async (setResult) => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {
          params: {
            part: 'snippet,contentDetails',
            maxResults: 4,
            channelId: 'UCLhpOkxKgLMC0qOo4gr_UcQ', 
            key: API_KEY,
          },
        });
        setResult(response.data.items);
      } catch (error) {
        setError('Error al obtener las playlists.');
        console.error('Error fetching playlists:', error);
      }
    };
    fetchPlaylists(setPlaylists);
  }, []);

  useEffect(() => {
    const fetchData = async (query, setResult) => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            maxResults: 4,
            q: query,
            key: API_KEY,
          },
        });
        setResult(response.data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData('Futbol', setVideosMix); //Mix
    fetchData('musica', setVideosSeguir); //Seguir Viendo
    fetchData('Kendrick Lamar y Drake', setVideos); //Recomendados
    fetchData('gym shorts', setShorts);
  }, []);

  const quickBarItems = ['Videos chistosos', 'JavaScript', 'Rock', 'Europa', 'Real Madrid'
  , 'Pop', 'Gorillaz', 'Videojuegos', 'Anime', 'Peliculas'];
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Sidebar />
        <ContentContainer>
          <Navbar />
          <QuickBar items={quickBarItems} /> {QuickBar}
            <>
              <VideoSection title="Continuar Viendo" videos={videosSeguir}/>
              <VideoSection title="Recomendaciones de Videos" videos={videosMiMix} />
              <VideoSection title="Mi Mix" videos={videos} />
              <PlaylistSection title = "Mi Mix Playlists" playlists={playlists}/>
              <ShortsSection title="Shorts" videos={shorts} />
            </>
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
