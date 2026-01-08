import { Scene } from '@/data/mockData';
import { Clock, Users, Zap, MessageSquare, Eye, Rewind, Dumbbell } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SceneBreakdownProps {
  scenes: Scene[];
}

const categoryIcons = {
  action: Zap,
  dialogue: MessageSquare,
  revelation: Eye,
  flashback: Rewind,
  training: Dumbbell,
};

const categoryColors = {
  action: 'text-primary bg-primary/20',
  dialogue: 'text-blue-400 bg-blue-400/20',
  revelation: 'text-purple-400 bg-purple-400/20',
  flashback: 'text-amber-400 bg-amber-400/20',
  training: 'text-green-400 bg-green-400/20',
};

function ComplexityIndicator({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={cn(
            'w-1.5 h-3 rounded-sm transition-colors',
            i <= level ? 'bg-primary' : 'bg-muted'
          )}
        />
      ))}
    </div>
  );
}

export function SceneBreakdown({ scenes }: SceneBreakdownProps) {
  if (scenes.length === 0) {
    return (
      <div className="p-6 text-center text-muted-foreground">
        <p>Scene breakdown not available for this episode.</p>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Scene Timeline
        </h3>
        <span className="text-xs text-muted-foreground">{scenes.length} scenes</span>
      </div>

      {scenes.map((scene, index) => {
        const Icon = categoryIcons[scene.category];
        return (
          <div
            key={scene.id}
            className="group relative p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all cursor-pointer border border-transparent hover:border-primary/30 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Timeline connector */}
            {index < scenes.length - 1 && (
              <div className="absolute left-7 top-full w-0.5 h-3 bg-border" />
            )}

            <div className="flex gap-3">
              {/* Category Icon */}
              <div className={cn(
                'flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center',
                categoryColors[scene.category]
              )}>
                <Icon className="w-4 h-4" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {scene.title}
                  </h4>
                  <ComplexityIndicator level={scene.complexity} />
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {scene.summary}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{scene.timestamp}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-smoke">Duration:</span>
                    <span>{scene.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{scene.characters.length}</span>
                  </div>
                </div>

                {/* Characters */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {scene.characters.map((char) => (
                    <span
                      key={char}
                      className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
