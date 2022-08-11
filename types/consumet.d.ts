interface MangadexSearchResult {
  currentPage: number;
  results: {
    id: string;
    title: string;
    altTitles: Record<string, string>[];
    descitption: string;
    status: strin;
    releaseDate: number;
    contentRating: string;
    lastVolume: string;
    lastChapter: string;
  }[];
}

interface MangadexChapter {
  id: string;
  title: string;
  pages: number;
}

interface MangadexMangaInfo {
  id: string;
  altTtitles: Record<string, string>[];
  description: Record<string, string>[];
  genres: string[];
  themes: string[];
  status: string;
  releaseDate: number;
  chapters: MangadexChapter[];
}

interface MangadexChapterPage {
  img: string;
  page: number;
}
