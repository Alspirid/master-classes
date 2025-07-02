import { useState } from 'react';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import { ThemeProvider } from './contexts/ThemeContext';
import { mockMasterClasses } from './data/mockData';
import type { Video } from './types';

function App() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
  };

  return (
    <ThemeProvider>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <Sidebar
          masterClasses={mockMasterClasses}
          onVideoSelect={handleVideoSelect}
          selectedVideoId={selectedVideo?.id}
        />
        <MainContent selectedVideo={selectedVideo} />
      </div>
    </ThemeProvider>
  );
}

export default App;
