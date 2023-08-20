type ShortUrlResponse = {
  short_urls: {
    data: ShortUrl[];
  };
};

type ShortUrl = {
  id?: string;
  url?: string;
  short_url: string;
  clicks?: number;
  created_at?: Date;
  updated_at?: Date;
};

export type { ShortUrl, ShortUrlResponse };
