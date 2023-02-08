import React from 'react';
import { News } from '../../model/types';
import HeartIcon from '../../assets/icons/HeartIcon';

export interface RelatedNewsProps {
  newsData: News;
}

const RelatedNews: React.FC<RelatedNewsProps> = ({ newsData }) => {
  const article = newsData.articles[0];

  return <div className='flex flex-col gap-3 p-3'>
    <div className='text-2xl'>Related News</div>
    <div className='relative'>
      <img src={article.urlToImage} alt="" className="rounded" />
      <div className='absolute left-0 right-0 bottom-0 top-0'>
        <div className='flex flex-col justify-between h-full text-white'>
          <div className='flex justify-between items-center p-2'>
            <div className='left-0 right-0 bottom-0'>Date</div>
            <div className='left-0 right-0 bottom-0'><HeartIcon /></div>
          </div>
          <div className='left-0 right-0 bottom-0 p-2 drop-shadow'>{article.title}</div>
        </div>
      </div>
    </div>
    <div>
      {article.description}
    </div>
  </div >;
}

export default RelatedNews;
