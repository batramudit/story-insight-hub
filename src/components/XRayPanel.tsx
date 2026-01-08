import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SceneBreakdown } from './SceneBreakdown';
import { CastPanel } from './CastPanel';
import { RecapPanel } from './RecapPanel';
import { TriviaPanel } from './TriviaPanel';
import { X, Sparkles } from 'lucide-react';
import { Episode } from '@/data/mockData';

interface XRayPanelProps {
  episode: Episode;
  currentEpisodeNumber: number;
  onClose: () => void;
}

export function XRayPanel({ episode, currentEpisodeNumber, onClose }: XRayPanelProps) {
  const [activeTab, setActiveTab] = useState('scenes');

  return (
    <div className="h-full flex flex-col bg-card/95 backdrop-blur-xl border-l border-border animate-slide-in-right">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <h2 className="font-serif text-xl font-semibold text-foreground">X-Ray</h2>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-secondary transition-colors"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Episode Info */}
      <div className="px-4 py-3 border-b border-border bg-secondary/30">
        <p className="text-sm text-muted-foreground">Episode {episode.id}</p>
        <h3 className="font-serif text-lg font-semibold text-foreground">{episode.title}</h3>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col overflow-hidden">
        <TabsList className="w-full justify-start px-4 py-6 bg-transparent border-b border-border rounded-none gap-1">
          <TabsTrigger 
            value="scenes" 
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4"
          >
            Scenes
          </TabsTrigger>
          <TabsTrigger 
            value="cast" 
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4"
          >
            Cast
          </TabsTrigger>
          <TabsTrigger 
            value="recap" 
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4"
          >
            Recap
          </TabsTrigger>
          <TabsTrigger 
            value="trivia" 
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4"
          >
            Trivia
          </TabsTrigger>
        </TabsList>

        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <TabsContent value="scenes" className="m-0 h-full">
            <SceneBreakdown scenes={episode.scenes} />
          </TabsContent>
          <TabsContent value="cast" className="m-0 h-full">
            <CastPanel episodeNumber={currentEpisodeNumber} />
          </TabsContent>
          <TabsContent value="recap" className="m-0 h-full">
            <RecapPanel />
          </TabsContent>
          <TabsContent value="trivia" className="m-0 h-full">
            <TriviaPanel trivia={episode.trivia} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
