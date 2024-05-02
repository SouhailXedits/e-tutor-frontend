export interface GetHomeResponse {
  status: string;
  totalResults: number;
  results: Home[];
  nextPage?: number;
}

export interface GetHomesProps {
  search?: string;
  page: number;
}

export interface Home {
  title: string;
  link: string;
  keywords: string[];
  creator: string[];
  video_url?: string;
  description: string;
  content: string;
  pubDate: string;
  image_url?: string;
  source_id: string;
  country: string[];
  category: string[];
}
