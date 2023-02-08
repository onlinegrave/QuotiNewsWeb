import React from 'react';
import { News } from '../../model/types';
import PopularNews from './PopularNews';
import PostDivider from './../PostDivider';

export interface PopularNewsSectionProps {
  newsDataList: News[];
  isFavourite: Set<string>;
  onFouriteToggle: (id: string) => void;
}

const PopularNewsSection: React.FC<PopularNewsSectionProps> = ({ newsDataList, isFavourite, onFouriteToggle }) => {
  return <div>

    <div className='py-2 p-3'>Popular News for you</div>
    <div className='flex flex-nowrap flex-grow gap-8 overflow-auto px-4'>
      {newsDataList.map((news, index) => <div key={news.toString().concat(index.toString())}>
        <PopularNews newsData={news} iconClicked={() => { }} isIconBookmarked={false} />
      </div>)}
    </div>

  </div>;
}



export default PopularNewsSection;
