import React from 'react';
interface NewsChipProps {
  isChipEnabled: boolean
  onClick: () => void
  label: JSX.Element
  leadingIcon: JSX.Element
  trailingIcon: JSX.Element
}
const NewsChip: React.FC<NewsChipProps> = ({ onClick, isChipEnabled, label, leadingIcon, trailingIcon }) => {
  return <div onClick={onClick} className="border border-black p-1 rounded-lg">
    <div className="flex  gap-2">
      {leadingIcon}
      {label}
      {trailingIcon}
    </div>
  </div>
}

export default NewsChip;
