import { useState } from 'react';
import { Search, Mic, X, Clock, TrendingUp } from 'lucide-react';
import { episodes, characters } from '@/data/mockData';
import { cn } from '@/lib/utils';

interface SearchPanelProps {
  onClose: () => void;
}

export function SearchPanel({ onClose }: SearchPanelProps) {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState<'all' | 'episodes' | 'characters' | 'scenes'>('all');

  const recentSearches = ['Quinn vampire powers', 'Vincent history', 'Layla abilities'];
  const trendingSearches = ['Blood manipulation', 'Dalki war', 'Wight transformation'];

  const filteredEpisodes = episodes.filter(ep => 
    ep.title.toLowerCase().includes(query.toLowerCase()) ||
    ep.summary.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCharacters = characters.filter(char =>
    char.name.toLowerCase().includes(query.toLowerCase()) ||
    char.developmentNotes.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 animate-fade-in">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search episodes, characters, scenes..."
              className="w-full pl-12 pr-12 py-4 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              autoFocus
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors">
              <Mic className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-secondary rounded-xl transition-colors"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Search Type Filters */}
        <div className="flex gap-2 mb-6">
          {['all', 'episodes', 'characters', 'scenes'].map((type) => (
            <button
              key={type}
              onClick={() => setSearchType(type as typeof searchType)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all capitalize',
                searchType === type
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              )}
            >
              {type}
            </button>
          ))}
        </div>

        {query ? (
          /* Search Results */
          <div className="space-y-6">
            {(searchType === 'all' || searchType === 'episodes') && filteredEpisodes.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Episodes
                </h3>
                <div className="space-y-2">
                  {filteredEpisodes.slice(0, 5).map((ep) => (
                    <div
                      key={ep.id}
                      className="p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors cursor-pointer"
                    >
                      <h4 className="font-medium text-foreground">
                        E{ep.id}. {ep.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {ep.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(searchType === 'all' || searchType === 'characters') && filteredCharacters.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Characters
                </h3>
                <div className="space-y-2">
                  {filteredCharacters.map((char) => (
                    <div
                      key={char.id}
                      className="p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors cursor-pointer"
                    >
                      <h4 className="font-medium text-foreground">{char.name}</h4>
                      <p className="text-sm text-primary">{char.role}</p>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {char.developmentNotes}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Default State */
          <div className="space-y-8">
            {/* Recent Searches */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Recent Searches
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => setQuery(search)}
                    className="px-4 py-2 bg-secondary rounded-full text-sm text-foreground hover:bg-secondary/80 transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>

            {/* Trending */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Trending in Vampire System
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {trendingSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => setQuery(search)}
                    className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary hover:bg-primary/20 transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
