import React from 'react';
import EngineeringIcon from "../../assets/icons/EngineeringIcon";
import { chipCategory } from "../../util/assit_chip_details";
import NewsChip from "./NewsChip";

const NewsChipCategory = () => {
  return <>
    <div className="flex gap-2 px-4 overflow-x-auto">
      {chipCategory().map(c => <div key={c.name}>
        <NewsChip label={<div>{c.name}</div>} isChipEnabled={false} onClick={() => {
          //TODO
        }} leadingIcon={c.icon} trailingIcon={<div></div>} />
      </div>)}
    </div>
  </>
}

export default NewsChipCategory;
