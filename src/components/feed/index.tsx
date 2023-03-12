import React from 'react';
import { useGetEverythingQuery, useGetTopHeadlinesQuery } from '../../services/quoti_news';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Category, CountryCode, LanguageCode } from '../../services/types';
import ShimmerCard from '../shimmer/ShimmerCard';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FeedProps {}

const Feed: React.FC<FeedProps> = (props) => {
  const category = useSelector((state: RootState) => state.app.category);
  const country = useSelector((state: RootState) => state.app.country);
  const language = useSelector((state: RootState) => state.app.language);
  const { error, data, isLoading, isFetching } = useGetTopHeadlinesQuery({ category: category, page: 1, pageSize: 5, country: country, language: language });

  if (error) {
    return <div></div>;
  }

  if (isFetching) {
    return <div className='flex gap-2'>{[...Array(5)].map((t, i) => <ShimmerCard key={i} />)}</div>;
  }

  if (!data) {
    return <div></div>;
  }

  const { articles } = data;
  return <div className='flex overflow-x-auto scrollbar-hide'>
    <div className="flex flex-1 gap-8 px-4 p-8">
      {articles.map(e => <div key={e.title}>
        <a href={e.url} target='_blank' rel="noreferrer" className=''>
          <div className='hover:shadow-lg rounded duration-700'>
            <img src={e.urlToImage} alt="" className="rounded-t" />
            <div className="text-3xl font-semibold  text-ellipsis line-clamp-1 pb-2 px-2">{e.title}</div>
            <div className="line-clamp-4 px-2 py-8">{e.description}</div>
          </div>
        </a>
      </div>
      )}
    </div>
  </div >;
}

export default Feed;
