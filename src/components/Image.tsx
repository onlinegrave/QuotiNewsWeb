import React from 'react';
export interface ImageProps {
  src: string;
  alt: string;

}
const Image:React.FC<ImageProps> = (props) => {
  const {src, alt} = props;
  return <img src={src} alt={alt}  ></img>;
}

export default Image
