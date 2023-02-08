import { NewsFeed } from "../model/types";
import { news1, news2, news3, news4, news5 } from "./mock_news";

export const mockNewsFeed: NewsFeed = {
  popularNews: [news1, news2, news3, news4],
  highlightedNews: [news3, news4, news5],
  recommendedNews: [news1, news2, news3, news4],
  normalNews: [
    news5,
    news3,
    news4,
    news1,
    news2,
    news5,
    news3,
    news4,
    news1,
    news2,
    news5,
    news3,
    news4,
    news1,
    news2,
  ],
};
