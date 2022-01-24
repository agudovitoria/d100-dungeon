import {
  SIZE_LARGE,
  SIZE_EXIT_BOTTOM,
  SIZE_EXIT_LEFT,
  SIZE_EXIT_TOP,
} from "./sizeConstants";


export const POSITON_EXIT_BOTTOM = {
  x: ((SIZE_LARGE.width - SIZE_EXIT_BOTTOM.height) / 2),
  y: ((SIZE_LARGE.width - SIZE_EXIT_BOTTOM.width))
};

export const POSITION_EXIT_LEFT = {
  x: 0,
  y: ((SIZE_LARGE.width - SIZE_EXIT_LEFT.width))
};

export const POSITION_EXIT_RIGHT = {
  x: 70,
  y: 40
};

export const POSITION_EXIT_TOP = {
  x: ((SIZE_LARGE.width - SIZE_EXIT_TOP.height) / 2),
  y: 0
};

export const POSITION_DOOR_BOTTOM = {
  x: 40,
  y: 95
};

export const POSITION_DOOR_LEFT = {
  x: 0,
  y: 40
};

export const POSITION_DOOR_RIGHT = {
  x: 40,
  y: 0
};

export const POSITION_DOOR_TOP = {
  x: 95,
  y: 40
};
