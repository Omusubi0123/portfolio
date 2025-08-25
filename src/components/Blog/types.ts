export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  tags: string[];
  thumbnail?: string;
}

export interface BlogPostMetadata {
  id: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  thumbnail?: string;
}
