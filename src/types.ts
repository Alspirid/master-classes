export type Video = {
  id: string;
  title: string;
  duration: string;
  description: string;
  videoUrl: string;
  thumbnail?: string;
};

export type MasterClass = {
  id: string;
  name: string;
  instructor: string;
  videos: Video[];
};

export type AppState = {
  masterClasses: MasterClass[];
  selectedVideo: Video | null;
};

export type Theme = 'light' | 'dark';