import { episodes } from '@/data/mockData';
import { Play, Lock, AudioWaveform } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EpisodeListProps {
  currentEpisode: number;
  onSelectEpisode: (id: number) => void;
}

export function EpisodeList({ currentEpisode, onSelectEpisode }: EpisodeListProps) {
  return (
    <div className="h-full flex flex-col bg-card border-l border-border">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-1">
          <h2 className="font-serif text-xl font-semibold text-foreground">Episodes</h2>
          <span className="text-sm text-muted-foreground">200</span>
        </div>
        <p className="text-sm text-muted-foreground">All 200 Episodes</p>
      </div>

      {/* Episode List */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {episodes.map((episode) => (
          <button
            key={episode.id}
            onClick={() => !episode.isLocked && onSelectEpisode(episode.id)}
            disabled={episode.isLocked}
            className={cn(
              'w-full p-4 flex items-center gap-3 transition-all border-b border-border/50',
              episode.isPlaying 
                ? 'bg-primary/10 border-l-2 border-l-primary' 
                : 'hover:bg-secondary/50',
              episode.isLocked && 'opacity-50 cursor-not-allowed'
            )}
          >
            {/* Play Button / Lock */}
            <div className={cn(
              'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors',
              episode.isPlaying 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-muted-foreground group-hover:bg-primary/20'
            )}>
              {episode.isLocked ? (
                <Lock className="w-4 h-4" />
              ) : episode.isPlaying ? (
                <AudioWaveform className="w-4 h-4 animate-pulse" />
              ) : (
                <Play className="w-4 h-4 ml-0.5" />
              )}
            </div>

            {/* Episode Info */}
            <div className="flex-1 text-left min-w-0">
              <div className="flex items-center gap-2">
                <h3 className={cn(
                  'font-medium truncate',
                  episode.isPlaying ? 'text-primary' : 'text-foreground'
                )}>
                  E{episode.id}. {episode.title}
                </h3>
                {episode.isPlaying && (
                  <span className="flex-shrink-0 px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground rounded-full flex items-center gap-1">
                    <AudioWaveform className="w-3 h-3" />
                    NOW PLAYING
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                <span>{episode.duration}</span>
                <span>•</span>
                <span>{episode.scenes.length > 0 ? `${episode.scenes.length} scenes` : 'Coming soon'}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
