import React from 'react';
import PopularNewsSection from '../components/news/PopularNewsSection';
import { useGetNewsByQueryQuery } from '../services/quoti_news';
import { mockNewsFeed } from '../data/mock_news_feed';
import { NewsFeed } from '../model/types';
import NormalNewsSection from '../components/news/NormalNewsSection';
import SearchIcon from "../assets/icons/SearchIcon";
import MenuIcon from "../assets/icons/Bars3Icon";
import menuIcon from "../assets/icons/Bars3Icon.svg";
import RelatedNews from '../components/news/RelatedNews';
const Home = () => {
  const onToggleLikeButton = () => { };
  const onSelectNews = () => { };
  const showTopAppBar = true;
  const onRefreshNews = () => { };
  const onErrorDismissed = () => { };
  const isFavourite = new Set<string>();



  return <>
    <header>
      <div className='flex justify-between p-3'>
        <div><MenuIcon /></div>
        <div className='font-semibold text-lg'>QuotiNews</div>
        <div><SearchIcon /></div>
      </div>
    </header>
    <main>
      <NewsList newsFeed={mockNewsFeed} onToggleFavourite={onToggleLikeButton} isFavourite={isFavourite} onArticleTap={onSelectNews} />
    </main>
    <footer className='lg:hidden'></footer>
  </>;
}

export interface NewsListProps {
  newsFeed: NewsFeed,
  onToggleFavourite: (id: string) => void;
  isFavourite: Set<string>;
  onArticleTap: (id: string) => void;
}

export const NewsList: React.FC<NewsListProps> = (props) => {
  const { newsFeed, isFavourite, onArticleTap, onToggleFavourite } = props;

  return <>
    {newsFeed.popularNews.length > 0 && <PopularNewsSection isFavourite={isFavourite} onFouriteToggle={onToggleFavourite} newsDataList={newsFeed.popularNews} />}
    {newsFeed.normalNews.map((news, index) => <div key={index}>
      {newsFeed.normalNews.length > 0 && <NormalNewsSection navigateToArticle={onArticleTap} onToggleFavourite={() => { }} newsData={news} />}
      {(index + 1) % 6 === 0 && <RelatedNews newsData={news} />}
    </div>
    )}

  </>;
}

export default Home;
