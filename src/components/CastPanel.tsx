import { characters } from '@/data/mockData';
import { User, Star, Bookmark } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CastPanelProps {
  episodeNumber: number;
}

export function CastPanel({ episodeNumber }: CastPanelProps) {
  // Filter characters that appear up to current episode
  const relevantCharacters = characters.filter(
    char => char.firstAppearance <= episodeNumber
  );

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Character Notes
        </h3>
        <span className="text-xs text-muted-foreground">
          {relevantCharacters.length} characters
        </span>
      </div>

      {relevantCharacters.map((character, index) => (
        <div
          key={character.id}
          className="group p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all border border-transparent hover:border-primary/30 animate-fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex gap-4">
            {/* Avatar */}
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-crimson/30 flex items-center justify-center border border-primary/20">
              <User className="w-7 h-7 text-primary" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <div>
                  <h4 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {character.name}
                  </h4>
                  <p className="text-sm text-primary flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {character.role}
                  </p>
                </div>
                <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                  <Bookmark className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {character.developmentNotes}
              </p>

              <div className="flex items-center gap-4 mt-3 text-xs text-smoke">
                <span>First appeared: Ep {character.firstAppearance}</span>
                <span>•</span>
                <span>{character.episodes.filter(e => e <= episodeNumber).length} episodes</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Live Cast Banner */}
      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/20 to-crimson/20 border border-primary/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
            <Star className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium text-foreground">Live Cast</h4>
            <p className="text-sm text-muted-foreground">
              Character development updates in real-time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
