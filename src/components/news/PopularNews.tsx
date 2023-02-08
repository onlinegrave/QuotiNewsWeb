import React from 'react';
import { News } from '../../model/types';

export interface PopularNewsProps {
  key?: string;
  isIconBookmarked: boolean;
  iconClicked: () => void;
  newsData: News;
}

const PopularNews: React.FC<PopularNewsProps> = ({ key, newsData, iconClicked, isIconBookmarked }) => {
  const article = newsData.articles[0];

  return <>
    <div className='w-80 max-w-screen-sm' key={key}>
      <div className='flex flex-col'>
        <img src={article.urlToImage} alt="" className='rounded h-48' />
        <div className='py-5'>
          <div className='font-normal text-lg text-ellipsis line-clamp-1 pb-2'>
            {article.title}
          </div>
          <div className='line-clamp-4'>
            {article.description}
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default PopularNews;
