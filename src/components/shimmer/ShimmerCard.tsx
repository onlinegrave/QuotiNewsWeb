import React, { Key } from 'react';
import "./shimmer_card.scss"
interface ShimmerCardProps {
  key?: Key
}
const ShimmerCard: React.FC<ShimmerCardProps> = (props) => {
  return <div className="card" key={props.key}>
    <div className="shimmerBG media"></div>
    <div className="p-32">
      <div className="shimmerBG title-line"></div>
      <div className="shimmerBG title-line end"></div>

      <div className="shimmerBG content-line m-t-24"></div>
      <div className="shimmerBG content-line"></div>
      <div className="shimmerBG content-line"></div>
      <div className="shimmerBG content-line"></div>
      <div className="shimmerBG content-line end"></div>
    </div>
  </div>

}

export default ShimmerCard;
