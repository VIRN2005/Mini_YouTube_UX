import React from "react";
import Sidebar from "./HomePage/SideBar";
import Navbar from "./HomePage/NavBar";
import QuickRecommendations from "./HomePage/QuickBar";
import VideoSection from "./HomePage/VideoSections";

function App() {
  // Datos de ejemplo para las secciones de videos
  const continueWatchingVideos = [
    { id: 1, title: "Video 1", thumbnail: "video1.jpg", channelName: "Channel 1" },
    { id: 2, title: "Video 2", thumbnail: "video2.jpg", channelName: "Channel 2" },
    { id: 3, title: "Video 3", thumbnail: "video3.jpg", channelName: "Channel 3" },
    { id: 4, title: "Video 4", thumbnail: "video4.jpg", channelName: "Channel 4" }
  ];

  const recommendedVideos = [
    { id: 5, title: "Video 5", thumbnail: "video5.jpg", channelName: "Channel 5" },
    { id: 6, title: "Video 6", thumbnail: "video6.jpg", channelName: "Channel 6" },
    { id: 7, title: "Video 7", thumbnail: "video7.jpg", channelName: "Channel 7" },
    { id: 8, title: "Video 8", thumbnail: "video8.jpg", channelName: "Channel 8" }
  ];

  const mixVideos = [
    { id: 9, title: "Video 9", thumbnail: "video9.jpg", channelName: "Channel 9" },
    { id: 10, title: "Video 10", thumbnail: "video10.jpg", channelName: "Channel 10" },
    { id: 11, title: "Video 11", thumbnail: "video11.jpg", channelName: "Channel 11" },
    { id: 12, title: "Video 12", thumbnail: "video12.jpg", channelName: "Channel 12" }
  ];

  const shortsVideos = [
    { id: 13, title: "Video 13", thumbnail: "video13.jpg", channelName: "Channel 13" },
    { id: 14, title: "Video 14", thumbnail: "video14.jpg", channelName: "Channel 14" },
    { id: 15, title: "Video 15", thumbnail: "video15.jpg", channelName: "Channel 15" },
    { id: 16, title: "Video 16", thumbnail: "video16.jpg", channelName: "Channel 16" }
  ];

  return (
    <div className="App">
      <Sidebar />
      <div>
        <Navbar />
        <QuickRecommendations />
        <VideoSection title="Continuar viendo" videos={continueWatchingVideos} />
        <VideoSection title="Recomendado" videos={recommendedVideos} />
        <VideoSection title="Mi mix" videos={mixVideos} />
        <VideoSection title="Shorts" videos={shortsVideos} />
      </div>
    </div>
  );
}

export default App;

