import { ShortUrl } from "../ShortUrl";

type ShortUrlResult = {
  shorten_url: {
    short_url: ShortUrl;
  }
};

export type { ShortUrlResult };
