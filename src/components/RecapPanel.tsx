import { useState } from 'react';
import { localRecap, smartRecaps } from '@/data/mockData';
import { Clock, Volume2, RefreshCw, Brain, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

type RecapType = 'local' | 'recent' | 'medium' | 'long';

export function RecapPanel() {
  const [selectedRecap, setSelectedRecap] = useState<RecapType>('local');
  const [isPlaying, setIsPlaying] = useState(false);

  const recapOptions = [
    { id: 'local' as const, label: 'Last 5 Episodes', icon: RefreshCw, duration: '30-40s' },
    { id: 'recent' as const, label: 'Quick Catch-up', icon: Calendar, duration: '2 min', subtitle: 'Active < 3 days' },
    { id: 'medium' as const, label: 'Extended Recap', icon: Brain, duration: '4 min', subtitle: 'Away 4-10 days' },
    { id: 'long' as const, label: 'Full Story', icon: Brain, duration: '5-6 min', subtitle: 'Away > 10 days' },
  ];

  const getCurrentRecap = () => {
    if (selectedRecap === 'local') return localRecap;
    return smartRecaps[selectedRecap];
  };

  const recap = getCurrentRecap();

  return (
    <div className="p-4 space-y-4">
      {/* Recap Type Selection */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
          Choose Your Recap
        </h3>

        <div className="grid grid-cols-2 gap-2">
          {recapOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.id}
                onClick={() => setSelectedRecap(option.id)}
                className={cn(
                  'p-3 rounded-xl text-left transition-all border',
                  selectedRecap === option.id
                    ? 'bg-primary/20 border-primary text-foreground'
                    : 'bg-secondary/50 border-transparent hover:bg-secondary text-muted-foreground'
                )}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{option.label}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs opacity-70">{option.duration}</span>
                  {option.subtitle && (
                    <span className="text-xs opacity-50">{option.subtitle}</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Smart Recap Indicator */}
      {selectedRecap !== 'local' && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/20">
          <Brain className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary">Smart Recap - Personalized for you</span>
        </div>
      )}

      {/* Recap Content */}
      <div className="p-4 rounded-xl bg-secondary/50 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{recap.duration}</span>
            </div>
            <span>•</span>
            <span>{recap.wordCount} words</span>
          </div>
        </div>

        <p className="text-foreground leading-relaxed whitespace-pre-line">
          {recap.content}
        </p>

        {/* Audio Play Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={cn(
            'w-full flex items-center justify-center gap-2 p-4 rounded-xl transition-all',
            isPlaying
              ? 'bg-primary text-primary-foreground'
              : 'bg-primary/20 text-primary hover:bg-primary/30'
          )}
        >
          <Volume2 className={cn('w-5 h-5', isPlaying && 'animate-pulse')} />
          <span className="font-medium">
            {isPlaying ? 'Playing Recap...' : 'Listen to Recap'}
          </span>
        </button>
      </div>

      {/* Info */}
      <p className="text-xs text-muted-foreground text-center">
        Audio recaps powered by ElevenLabs
      </p>
    </div>
  );
}
