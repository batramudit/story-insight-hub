import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { VideoPlayer } from '@/components/VideoPlayer';
import { EpisodeList } from '@/components/EpisodeList';
import { XRayPanel } from '@/components/XRayPanel';
import { SearchPanel } from '@/components/SearchPanel';
import { episodes } from '@/data/mockData';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [currentEpisode, setCurrentEpisode] = useState(2);
  const [isXRayOpen, setIsXRayOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const episode = episodes.find(ep => ep.id === currentEpisode) || episodes[0];

  const handleTabChange = (tab: string) => {
    if (tab === 'search') {
      setIsSearchOpen(true);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-background">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Video Player Area */}
        <div className={`flex-1 transition-all duration-300 ${isXRayOpen ? 'mr-0' : ''}`}>
          <VideoPlayer 
            episode={episode} 
            onToggleXRay={() => setIsXRayOpen(!isXRayOpen)}
            isXRayOpen={isXRayOpen}
          />
        </div>

        {/* X-Ray Panel */}
        {isXRayOpen && (
          <div className="w-96 flex-shrink-0">
            <XRayPanel 
              episode={episode} 
              currentEpisodeNumber={currentEpisode}
              onClose={() => setIsXRayOpen(false)} 
            />
          </div>
        )}

        {/* Episode List */}
        <div className="w-96 flex-shrink-0">
          <EpisodeList 
            currentEpisode={currentEpisode}
            onSelectEpisode={setCurrentEpisode}
          />
        </div>
      </div>

      {/* Search Panel */}
      {isSearchOpen && <SearchPanel onClose={() => setIsSearchOpen(false)} />}
    </div>
  );
};

export default Index;
