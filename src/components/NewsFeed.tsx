import React from 'react';
import Country from './Country';
import Language from './Language';
import SortBy from './SortBy';
import Feed from './feed';
import { GlobalCategory, HeadlineCategory, EverythingCategory } from './Category';

const NewsFeed = () => {
  return <div className='flex flex-col gap-8'>
    <GlobalCategory />
    {/* <Country />
    <Language />
    <SortBy /> */}

    <Feed />


  </div>;
}

export default NewsFeed;
