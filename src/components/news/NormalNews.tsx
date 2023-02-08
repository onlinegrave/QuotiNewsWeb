import React from 'react';
import { News } from '../../model/types';

export interface NormalNewsProps {
  navigateToArticle: (id: string) => void;
  onToggleFavourite: () => void;
  newsData: News;
}

const NormalNews: React.FC<NormalNewsProps> = ({ newsData, onToggleFavourite, navigateToArticle }) => {
  const article = newsData.articles[0];

  return <div className='py-2 p-3'>
    <div className=' md:flex  md:items-center md:justify-center md:mt-12'>
      <div className='max-w-md md:max-w-2xl w-full'>
        <img src={article.urlToImage} alt="" className='rounded' />
        <div className='font-semibold text-ellipsis'>
          {article.title}
        </div>
        <div>
          {article.description}
        </div>
      </div>
    </div>
  </div>;
}

export default NormalNews;
