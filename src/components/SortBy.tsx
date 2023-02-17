import React, { useState } from 'react';

import { SortBy as SB } from '../services/types';

// RELEVANCY = "relevancy",
// POPULARITY = "popularity",
// PUBLISHED_AT = "publishedAt",

// const SORT_BY_OPTIONS: { [key in SB]: string } = {
//   "popularity": "Popularity",
//   "publishedAt": "Published At",
//   "relevancy": "Relevancy",
// }


export const SortBy2LabelMapping = [{
  key: SB.POPULARITY,
  value: "Popularity"
}, {
  key: SB.PUBLISHED_AT,
  value: "Published At"

}, {
  key: SB.RELEVANCY,
  value: "Relevancy"
}];

export const SB_MAPPING = (str: string): keyof typeof SB => {
  switch (str) {
    case "popularity": return "POPULARITY";
    case "publishedAt": return "PUBLISHED_AT";
    case "relevancy": return "RELEVANCY";
  }
  throw Error("No match");
}

const GET_STR_FROM_SORT_BY = (v: SB): string => {
  switch (v) {
    case "popularity": return "Popularity";
    case "publishedAt": return "Published At";
    case "relevancy": return "Relevancy";
  }
  return "";
}



const SortBy = () => {
  // console.log(SORT_BY_OPTIONS)
  const [sort, setSort] = useState<keyof typeof SB>("POPULARITY");
  console.log(sort);
  return <div>
    <div>Sort By</div>
    <div>
      <select onChange={(e) => setSort(SB_MAPPING(e.target.value))}>
        {SortBy2LabelMapping.map((sb, i) =>
          <option value={sb.key} key={sb.key}>{sb.value}</option>
        )}
      </select>
    </div>
  </div>;
}

export default SortBy;
