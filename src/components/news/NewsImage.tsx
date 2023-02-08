import React from 'react';
import { News } from '../../model/types';
import Image from '../Image';

export interface NewsImageProps {
  newsData: News;
  contentDescription: string;
}
const NewsImage:React.FC<NewsImageProps> = (props) => {

  return <Image src={props.newsData.articles[0].urlToImage} alt="" />;
}

export default NewsImage;
