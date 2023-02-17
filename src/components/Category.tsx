import React, { useState } from 'react';
import EngineeringIcon from "../assets/icons/EngineeringIcon";
import { Category as CATEGORY } from '../services/types';
import { RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setEverythingCategory, setHeadlinesCategory } from '../redux/appSlice';
import BooksIcon from '../assets/icons/BooksIcon';
import GovtIcon from '../assets/icons/GovtIcon';
import HealthIcon from '../assets/icons/HealthIcon';
import StockChartIcon from '../assets/icons/StockChartIcon';
import FashionIcon from '../assets/icons/FashionIcon';


export const Category2LabelMapping = [{
  key: CATEGORY.business,
  value: "Business",
  icon: <EngineeringIcon />
}, {
  key: CATEGORY.entertainment,
  value: "Entertainment",
  icon: <BooksIcon />
}, {
  key: CATEGORY.general,
  value: "General",
  icon: < GovtIcon />
}, {
  key: CATEGORY.health,
  value: "Health",
  icon: <HealthIcon />
}, {
  key: CATEGORY.science,
  value: "Science",
  icon: <StockChartIcon />
}, {
  key: CATEGORY.sports,
  value: "Sports",
  icon: <StockChartIcon />
}, {
  key: CATEGORY.technology,
  value: "Technology",
  icon: <FashionIcon />
}];

export const SB_MAPPING = (str: string): CATEGORY => {
  switch (str) {
    case "business": return CATEGORY.business;
    case "entertainment": return CATEGORY.entertainment;
    case "general": return CATEGORY.general;
    case "health": return CATEGORY.health;
    case "science": return CATEGORY.science;
    case "sports": return CATEGORY.sports;
    case "technology": return CATEGORY.technology;
  }
  throw Error("No match");
}


interface CategoryChipProps {
  category: CATEGORY
  isChipEnabled?: boolean
  label?: JSX.Element
  onClick: (category: CATEGORY) => void
  leadingIcon?: JSX.Element
  trailingIcon?: JSX.Element
}

const CategoryChip: React.FC<CategoryChipProps> = ({ category, isChipEnabled, label, leadingIcon, trailingIcon, onClick }) => {
  return <div className={`cursor-pointer border border-black p-1 rounded-lg ${isChipEnabled && "bg-black text-white"}`} onClick={() => onClick(category)}>
    <div className="flex  gap-2">
      {leadingIcon}
      {label}
      {trailingIcon}
    </div>
  </div>
}


interface CategoryChipListProps {
  selected: CATEGORY
  onClick: (category: CATEGORY) => void
}
// eslint-disable-next-line @typescript-eslint/no-redeclare
const CategoryChipList: React.FC<CategoryChipListProps> = ({ selected, onClick }) => {
  return <div className=''>
    <div className="flex gap-2 px-4 overflow-x-auto">
      {Category2LabelMapping.map((category, i) =>
        <CategoryChip isChipEnabled={selected === category.key} label={<div>{category.value}</div>} key={category.key} leadingIcon={category.icon} onClick={onClick} category={category.key} />
      )}
    </div>
  </div>;
}

export const HeadlineCategory = () => {
  const category = useSelector((state: RootState) => state.app.headlines.category);
  const dispatch = useDispatch();

  const onItemClick = (category: CATEGORY) => {
    dispatch(setHeadlinesCategory(category));
  }

  return <CategoryChipList selected={category} onClick={onItemClick}></CategoryChipList>;
}
export const EverythingCategory = () => {
  const category = useSelector((state: RootState) => state.app.everything.category);
  const dispatch = useDispatch();

  const onItemClick = (category: CATEGORY) => {
    dispatch(setEverythingCategory(category));
  }

  return <CategoryChipList selected={category} onClick={onItemClick}></CategoryChipList>;
};


export const GlobalCategory = () => {
  const category = useSelector((state: RootState) => state.app.category);
  const dispatch = useDispatch();

  const onItemClick = (category: CATEGORY) => {
    dispatch(setCategory(category));
  }

  return <CategoryChipList selected={category} onClick={onItemClick}></CategoryChipList>;
};

export default CategoryChipList;
