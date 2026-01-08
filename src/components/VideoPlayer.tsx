import { useState } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  SkipBack, 
  SkipForward,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { Episode } from '@/data/mockData';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  episode: Episode;
  onToggleXRay: () => void;
  isXRayOpen: boolean;
}

export function VideoPlayer({ episode, onToggleXRay, isXRayOpen }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(15);
  const [showControls, setShowControls] = useState(true);

  const formatTime = (percent: number, duration: string) => {
    const [mins, secs] = duration.split(':').map(Number);
    const totalSecs = mins * 60 + secs;
    const currentSecs = Math.floor((percent / 100) * totalSecs);
    const currentMins = Math.floor(currentSecs / 60);
    const remainingSecs = currentSecs % 60;
    return `${currentMins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className="relative w-full h-full bg-night flex flex-col"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video Area */}
      <div className="flex-1 relative flex items-center justify-center bg-gradient-to-b from-night to-night-light">
        {/* Placeholder for video */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-crimson/5" />
        
        {/* Episode thumbnail placeholder */}
        <div className="relative z-10 text-center">
          <div className="w-64 h-64 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-crimson/20 border border-primary/30 flex items-center justify-center blood-glow">
            <span className="font-serif text-6xl text-gradient-blood">🧛</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
            My Vampire System
          </h2>
          <p className="text-muted-foreground">
            Episode {episode.id}: {episode.title}
          </p>
        </div>

        {/* Top Controls */}
        <div className={cn(
          'absolute top-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-b from-night/80 to-transparent transition-opacity duration-300',
          showControls ? 'opacity-100' : 'opacity-0'
        )}>
          <button className="p-2 hover:bg-secondary/50 rounded-full transition-colors">
            <ChevronDown className="w-6 h-6 text-foreground" />
          </button>
          <button className="p-2 hover:bg-secondary/50 rounded-full transition-colors">
            <Maximize className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className={cn(
        'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-night via-night/90 to-transparent pt-16 pb-4 px-4 transition-opacity duration-300',
        showControls ? 'opacity-100' : 'opacity-0'
      )}>
        {/* Progress Bar */}
        <div className="mb-4">
          <div 
            className="relative h-1 bg-muted rounded-full cursor-pointer group"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const percent = ((e.clientX - rect.left) / rect.width) * 100;
              setProgress(Math.max(0, Math.min(100, percent)));
            }}
          >
            {/* Scene markers */}
            {episode.scenes.map((scene) => {
              const [mins, secs] = scene.timestamp.split(':').map(Number);
              const [durMins, durSecs] = episode.duration.split(':').map(Number);
              const totalDuration = durMins * 60 + durSecs;
              const scenePosition = ((mins * 60 + secs) / totalDuration) * 100;
              return (
                <div
                  key={scene.id}
                  className="absolute top-1/2 -translate-y-1/2 w-1 h-3 bg-bone/50 rounded-full"
                  style={{ left: `${scenePosition}%` }}
                  title={scene.title}
                />
              );
            })}
            
            {/* Progress */}
            <div 
              className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
            
            {/* Thumb */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              style={{ left: `${progress}%`, transform: 'translate(-50%, -50%)' }}
            />
          </div>
          
          {/* Time */}
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>{formatTime(progress, episode.duration)}</span>
            <span>{episode.duration}</span>
          </div>
        </div>

        {/* Controls Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Volume */}
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="p-3 hover:bg-secondary/50 rounded-full transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-foreground" />
              ) : (
                <Volume2 className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>

          {/* Center Controls */}
          <div className="flex items-center gap-4">
            <button className="p-3 hover:bg-secondary/50 rounded-full transition-colors">
              <SkipBack className="w-6 h-6 text-foreground" />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-4 bg-primary hover:bg-primary/90 rounded-full transition-colors blood-glow"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-primary-foreground" />
              ) : (
                <Play className="w-8 h-8 text-primary-foreground ml-1" />
              )}
            </button>
            <button className="p-3 hover:bg-secondary/50 rounded-full transition-colors">
              <SkipForward className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            <button 
              onClick={onToggleXRay}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-full transition-all',
                isXRayOpen 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary/80 hover:bg-secondary text-foreground'
              )}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">X-Ray</span>
            </button>
          </div>
        </div>

        {/* Episode Title */}
        <div className="mt-4 pt-4 border-t border-border/30">
          <h3 className="font-serif text-lg text-foreground">
            My Vampire System • Ep {episode.id} - {episode.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
            {episode.summary}
          </p>
        </div>
      </div>
    </div>
  );
}
