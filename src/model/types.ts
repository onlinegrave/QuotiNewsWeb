import React from "react";


export interface News {
  status: string;
  totalResults: number;
  articles : Articles[];

}

export interface Articles {
  source: Source;
  urlToImage: string;
  title: string;
  author: string;
  description: string;
  url: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id: string;
  name: string;
}

export interface Category {
  name: string
  icon: JSX.Element
}


export interface NewsFeed  {
  popularNews: News[],
  highlightedNews: News[],
  recommendedNews: News[],
  normalNews: News[],
}
