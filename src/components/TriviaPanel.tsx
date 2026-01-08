import { Lightbulb, Sparkles } from 'lucide-react';

interface TriviaPanelProps {
  trivia?: string[];
}

export function TriviaPanel({ trivia }: TriviaPanelProps) {
  if (!trivia || trivia.length === 0) {
    return (
      <div className="p-6 text-center text-muted-foreground">
        <Lightbulb className="w-12 h-12 mx-auto mb-4 opacity-30" />
        <p>No trivia available for this episode yet.</p>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-primary" />
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Did You Know?
        </h3>
      </div>

      {trivia.map((item, index) => (
        <div
          key={index}
          className="p-4 rounded-xl bg-secondary/50 border-l-4 border-primary animate-fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Lightbulb className="w-4 h-4 text-primary" />
            </div>
            <p className="text-foreground leading-relaxed">{item}</p>
          </div>
        </div>
      ))}

      {/* More Trivia Coming */}
      <div className="mt-6 p-4 rounded-xl bg-muted/50 text-center">
        <p className="text-sm text-muted-foreground">
          More trivia unlocks as you watch more episodes
        </p>
      </div>
    </div>
  );
}
