export interface Scene {
  id: string;
  title: string;
  summary: string;
  timestamp: string;
  duration: string;
  category: 'action' | 'dialogue' | 'revelation' | 'flashback' | 'training';
  complexity: number; // 1-5
  characters: string[];
}

export interface Character {
  id: string;
  name: string;
  role: string;
  imageUrl?: string;
  developmentNotes: string;
  firstAppearance: number;
  episodes: number[];
}

export interface Episode {
  id: number;
  title: string;
  duration: string;
  summary: string;
  scenes: Scene[];
  trivia?: string[];
  isPlaying?: boolean;
  isLocked?: boolean;
}

export interface RecapData {
  type: 'local' | 'smart';
  bucket?: 'recent' | 'medium' | 'long';
  duration: string;
  wordCount: number;
  content: string;
}

export const characters: Character[] = [
  {
    id: '1',
    name: 'Quinn Talen',
    role: 'Protagonist',
    developmentNotes: 'Started as a weak human, discovered vampire powers. Now navigating between human and vampire worlds.',
    firstAppearance: 1,
    episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: '2',
    name: 'Vincent',
    role: 'Vampire Lord',
    developmentNotes: 'Ancient vampire who gave Quinn his powers. Mysterious past with the Dalki.',
    firstAppearance: 3,
    episodes: [3, 5, 8, 10],
  },
  {
    id: '3',
    name: 'Peter Chuck',
    role: 'Best Friend',
    developmentNotes: 'Quinn\'s loyal friend from school. Transformed into a Wight. Struggles with identity.',
    firstAppearance: 1,
    episodes: [1, 2, 3, 4, 6, 7, 9],
  },
  {
    id: '4',
    name: 'Layla Munrow',
    role: 'Love Interest',
    developmentNotes: 'Half-vampire with unique abilities. Her mother was a powerful vampire.',
    firstAppearance: 2,
    episodes: [2, 4, 5, 6, 8, 10],
  },
  {
    id: '5',
    name: 'Vorden Blade',
    role: 'Friend/Rival',
    developmentNotes: 'Has multiple personalities. Each personality has different abilities.',
    firstAppearance: 2,
    episodes: [2, 3, 5, 7, 9, 10],
  },
];

export const episodes: Episode[] = [
  {
    id: 1,
    title: 'The Awakening',
    duration: '15:42',
    summary: 'Quinn discovers the mysterious book that will change his life forever. At military school, he faces brutal bullying.',
    scenes: [
      {
        id: '1-1',
        title: 'The Book Discovery',
        summary: 'Quinn finds an ancient vampire book in the school library.',
        timestamp: '00:00',
        duration: '3:45',
        category: 'revelation',
        complexity: 2,
        characters: ['Quinn Talen'],
      },
      {
        id: '1-2',
        title: 'Bullied Again',
        summary: 'Quinn is cornered by bullies in the training area.',
        timestamp: '03:45',
        duration: '4:20',
        category: 'action',
        complexity: 3,
        characters: ['Quinn Talen', 'Peter Chuck'],
      },
      {
        id: '1-3',
        title: 'First Blood',
        summary: 'Quinn accidentally activates the book\'s power.',
        timestamp: '08:05',
        duration: '7:37',
        category: 'revelation',
        complexity: 4,
        characters: ['Quinn Talen'],
      },
    ],
    trivia: [
      'The book is based on the "Blood Ritual" from vampire lore',
      'Quinn\'s school uniform design took 3 iterations',
    ],
  },
  {
    id: 2,
    title: 'Blood Hunger',
    duration: '14:18',
    isPlaying: true,
    summary: 'Quinn struggles with his newfound thirst. He meets Layla, who seems to know more than she lets on.',
    scenes: [
      {
        id: '2-1',
        title: 'The Thirst',
        summary: 'Quinn experiences blood hunger for the first time.',
        timestamp: '00:00',
        duration: '4:12',
        category: 'revelation',
        complexity: 3,
        characters: ['Quinn Talen'],
      },
      {
        id: '2-2',
        title: 'Meeting Layla',
        summary: 'A mysterious girl approaches Quinn in the cafeteria.',
        timestamp: '04:12',
        duration: '5:30',
        category: 'dialogue',
        complexity: 2,
        characters: ['Quinn Talen', 'Layla Munrow'],
      },
      {
        id: '2-3',
        title: 'Training Grounds',
        summary: 'Quinn discovers his enhanced abilities during training.',
        timestamp: '09:42',
        duration: '4:36',
        category: 'training',
        complexity: 4,
        characters: ['Quinn Talen', 'Vorden Blade'],
      },
    ],
    trivia: [
      'Layla\'s introduction was moved earlier in production',
      'The training scene features 47 unique attack animations',
    ],
  },
  {
    id: 3,
    title: 'The Vampire Lord',
    duration: '16:55',
    summary: 'Vincent reveals himself to Quinn. The true history of vampires and their war with the Dalki is unveiled.',
    scenes: [
      {
        id: '3-1',
        title: 'Dreams of Blood',
        summary: 'Quinn has visions of ancient vampire battles.',
        timestamp: '00:00',
        duration: '3:20',
        category: 'flashback',
        complexity: 5,
        characters: ['Quinn Talen', 'Vincent'],
      },
      {
        id: '3-2',
        title: 'Vincent Appears',
        summary: 'The ancient vampire lord makes contact.',
        timestamp: '03:20',
        duration: '6:15',
        category: 'revelation',
        complexity: 4,
        characters: ['Quinn Talen', 'Vincent'],
      },
      {
        id: '3-3',
        title: 'History Lesson',
        summary: 'Vincent explains the vampire-Dalki war.',
        timestamp: '09:35',
        duration: '7:20',
        category: 'dialogue',
        complexity: 5,
        characters: ['Quinn Talen', 'Vincent', 'Peter Chuck'],
      },
    ],
  },
  {
    id: 4,
    title: 'Power Awakens',
    duration: '13:28',
    summary: 'Quinn begins to master his vampire abilities. A new threat emerges at the school.',
    scenes: [
      {
        id: '4-1',
        title: 'Blood Control',
        summary: 'Quinn learns to manipulate blood.',
        timestamp: '00:00',
        duration: '5:00',
        category: 'training',
        complexity: 3,
        characters: ['Quinn Talen'],
      },
      {
        id: '4-2',
        title: 'Layla\'s Secret',
        summary: 'Layla reveals her half-vampire nature.',
        timestamp: '05:00',
        duration: '4:28',
        category: 'revelation',
        complexity: 4,
        characters: ['Quinn Talen', 'Layla Munrow'],
      },
      {
        id: '4-3',
        title: 'The Intruder',
        summary: 'An unknown entity breaches school security.',
        timestamp: '09:28',
        duration: '4:00',
        category: 'action',
        complexity: 4,
        characters: ['Quinn Talen', 'Peter Chuck'],
      },
    ],
  },
  {
    id: 5,
    title: 'Shadow Fight',
    duration: '17:12',
    summary: 'Quinn faces his first real vampire opponent. Vincent provides crucial guidance.',
    scenes: [
      {
        id: '5-1',
        title: 'Enemy Revealed',
        summary: 'The intruder is a rogue vampire.',
        timestamp: '00:00',
        duration: '4:30',
        category: 'revelation',
        complexity: 4,
        characters: ['Quinn Talen', 'Vincent', 'Vorden Blade'],
      },
      {
        id: '5-2',
        title: 'First Duel',
        summary: 'Quinn battles the rogue vampire.',
        timestamp: '04:30',
        duration: '8:00',
        category: 'action',
        complexity: 5,
        characters: ['Quinn Talen', 'Layla Munrow'],
      },
      {
        id: '5-3',
        title: 'Victory\'s Cost',
        summary: 'Quinn wins but loses control temporarily.',
        timestamp: '12:30',
        duration: '4:42',
        category: 'revelation',
        complexity: 5,
        characters: ['Quinn Talen', 'Vincent'],
      },
    ],
  },
  {
    id: 6,
    title: 'Bonds of Blood',
    duration: '14:45',
    isLocked: true,
    summary: 'Peter\'s transformation begins. Quinn must make a difficult choice to save his friend.',
    scenes: [],
  },
  {
    id: 7,
    title: 'The Wight',
    duration: '15:33',
    isLocked: true,
    summary: 'Peter becomes a Wight. Quinn learns about the consequences of vampire blood.',
    scenes: [],
  },
  {
    id: 8,
    title: 'Family Secrets',
    duration: '16:20',
    isLocked: true,
    summary: 'Layla\'s mother\'s past is revealed. The vampire families have their own agendas.',
    scenes: [],
  },
  {
    id: 9,
    title: 'Training Arc',
    duration: '18:05',
    isLocked: true,
    summary: 'Quinn trains intensively. Vorden\'s multiple personalities cause complications.',
    scenes: [],
  },
  {
    id: 10,
    title: 'The First Leader',
    duration: '20:00',
    isLocked: true,
    summary: 'Quinn discovers he might be connected to the original vampire leaders.',
    scenes: [],
  },
];

export const localRecap: RecapData = {
  type: 'local',
  duration: '30-40 seconds',
  wordCount: 100,
  content: 'In the last 5 episodes, Quinn discovered his vampire powers through an ancient book. He met Layla, a half-vampire, and encountered Vincent, an ancient vampire lord. Quinn faced his first real battle against a rogue vampire, barely winning but losing control. His best friend Peter is now in danger of transformation.',
};

export const smartRecaps: Record<string, RecapData> = {
  recent: {
    type: 'smart',
    bucket: 'recent',
    duration: '2 minutes',
    wordCount: 300,
    content: 'Welcome back! Last time, Quinn Talen discovered an ancient vampire book at military school, forever changing his destiny. Despite being bullied, he awakened dormant vampire powers. He experienced his first blood hunger and met the mysterious Layla Munrow, who revealed she\'s half-vampire herself. The ancient vampire lord Vincent appeared in Quinn\'s dreams, teaching him about the great war between vampires and the alien Dalki. Quinn began mastering blood manipulation and faced his first real vampire opponent - a rogue who infiltrated the school. Though victorious, Quinn momentarily lost control of his bloodlust. Now, his best friend Peter is showing signs of transformation, and Quinn must learn to control his powers before it\'s too late.',
  },
  medium: {
    type: 'smart',
    bucket: 'medium',
    duration: '4 minutes',
    wordCount: 600,
    content: 'It\'s been a while! Let\'s catch you up on My Vampire System. Quinn Talen started as a powerless student at a military academy in a world threatened by the alien Dalki. Everything changed when he discovered an ancient vampire book in the library. This artifact awakened dormant vampire powers within him, granting superhuman abilities but cursing him with blood hunger.\n\nQuinn met several key allies: Layla Munrow, a half-vampire girl with her own mysterious powers; Vorden Blade, a friend with multiple personalities each possessing unique abilities; and his loyal best friend Peter Chuck. The ancient vampire lord Vincent began appearing in Quinn\'s dreams, revealing the hidden history of vampires and their ancient war with the Dalki.\n\nQuinn learned that vampires once ruled but went into hiding. Vincent is teaching Quinn to master blood manipulation, shadow control, and enhanced combat abilities. However, each use of power increases Quinn\'s thirst for blood, making control essential.\n\nRecently, a rogue vampire infiltrated the school, forcing Quinn into his first real battle. He won, but temporarily lost control, revealing how dangerous his powers can be. Now, Peter has been exposed to vampire blood and is beginning to transform into a creature called a Wight - something between human and vampire. Quinn must find a way to help his friend while hiding his own nature from the military authorities.',
  },
  long: {
    type: 'smart',
    bucket: 'long',
    duration: '5-6 minutes',
    wordCount: 850,
    content: 'Welcome back after your break! Here\'s everything you need to know about My Vampire System...\n\n[Full detailed recap covering all major plot points, character developments, world-building elements, and setting up current story arc. This would be the complete 850-word recap covering episodes 1-50 for users who haven\'t engaged in over 10 days.]',
  },
};
