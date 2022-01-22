import React from 'react';
import { Image } from 'react-konva';

export const ArrowShape = ({
  id,
  image,
  name,
  arrowClicked,
  x,
  y
}) => {
  const onMouseEnter = (evt) => {
    evt.target.setShadowBlur(0.5);
    evt.target.setOpacity(1);
  };

  const onMouseOut = (evt) => {
    evt.target.setShadowBlur(0);
    evt.target.setOpacity(0.4);
  };

  const onClick = () => {
    arrowClicked(id, name);
  };

  return (
    <Image
      height={24}
      image={image}
      name={name}
      onMouseEnter={onMouseEnter}
      onMouseOut={onMouseOut}
      onClick={onClick}
      opacity={0.4}
      width={24}
      x={x}
      y={y}
    />
  );
};