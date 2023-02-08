import React from 'react';
import { News } from '../../model/types';
import NormalNews from './NormalNews';
import PostDivider from '../PostDivider';

export interface NormalNewsSectionProps {
  newsData: News;
  navigateToArticle: (id: string) => void;
  onToggleFavourite: () => void;
}


const NormalNewsSection: React.FC<NormalNewsSectionProps> = (props) => {
  return <>
    <NormalNews {...props} />
    <PostDivider />
  </>
}




export default NormalNewsSection;
