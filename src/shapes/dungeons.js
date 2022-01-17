export const COLORS = {
  CYAN: 'cyan',
  GREEN: 'green',
  RED: 'red',
  YELLOW: 'yellow',
};

export const POSITIONS = {
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
};

export const SIZES = {
  LARGE: 'large',
  SMALL: 'small',
};

export const dungeons = [
  {
    id: 1,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 2,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT],
    doors: [POSITIONS.RIGHT],
  },
  {
    id: 3,
    color: COLORS.YELLOW,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM],
    doors: [],
  },
  {
    id: 4,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 5,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT],
    doors: [],
  },
  {
    id: 6,
    color: COLORS.GREEN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.RIGHT],
    doors: [POSITIONS.RIGHT],
  },
  {
    id: 7,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT],
    doors: [POSITIONS.LEFT],
  },
  {
    id: 8,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.TOP],
    doors: [POSITIONS.TOP],
  },
  {
    id: 9,
    color: COLORS.GREEN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT],
    doors: [POSITIONS.RIGHT],
  },
  {
    id: 10,
    color: COLORS.RED,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 11,
    color: COLORS.GREEN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 12,
    color: COLORS.RED,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 13,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.RIGHT],
    doors: [POSITIONS.LEFT],
  },
  {
    id: 14,
    color: COLORS.GREEN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 15,
    color: COLORS.RED,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 16,
    color: COLORS.RED,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT],
    doors: [],
  },
  {
    id: 17,
    color: COLORS.YELLOW,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.TOP],
    doors: [POSITIONS.TOP],
  },
  {
    id: 18,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.RIGHT],
    doors: [POSITIONS.LEFT, POSITIONS.RIGHT],
  },
  {
    id: 19,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 20,
    color: COLORS.GREEN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 21,
    color: COLORS.YELLOW,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT, POSITIONS.TOP],
    doors: [POSITIONS.RIGHT],
  },
  {
    id: 22,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 23,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 24,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 25,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM],
    doors: [],
  },
  {
    id: 26,
    color: COLORS.GREEN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT],
    doors: [],
  },
  {
    id: 27,
    color: COLORS.YELLOW,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 28,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [POSITIONS.TOP],
  },
  {
    id: 29,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 30,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT],
    doors: [],
  },
  {
    id: 31,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT],
    doors: [],
  },
  {
    id: 32,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT],
    doors: [],
  },
  {
    id: 33,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.TOP],
    doors: [POSITIONS.LEFT, POSITIONS.TOP],
  },
  {
    id: 34,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 35,
    color: COLORS.GREEN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT],
    doors: [],
  },
  {
    id: 36,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.RIGHT],
    doors: [],
  },
  {
    id: 37,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.RIGHT, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 38,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 39,
    color: COLORS.GREEN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [POSITIONS.TOP],
  },
  {
    id: 40,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.RIGHT],
    doors: [],
  },
  {
    id: 41,
    color: COLORS.YELLOW,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT],
    doors: [POSITIONS.RIGHT],
  },
  {
    id: 42,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.RIGHT],
    doors: [],
  },
  {
    id: 43,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT],
    doors: [],
  },
  {
    id: 44,
    color: COLORS.GREEN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.RIGHT],
    doors: [],
  },
  {
    id: 45,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 46,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.RIGHT, POSITIONS.TOP],
    doors: [POSITIONS.TOP],
  },
  {
    id: 47,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [POSITIONS.TOP],
  },
  {
    id: 48,
    color: COLORS.RED,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT],
    doors: [],
  },
  {
    id: 49,
    color: COLORS.YELLOW,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.RIGHT, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 50,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [POSITIONS.TOP],
  },
  {
    id: 51,
    color: COLORS.GREEN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT],
    doors: [POSITIONS.LEFT],
  },
  {
    id: 52,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.RIGHT, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 53,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM],
    doors: [],
  },
  {
    id: 54,
    color: COLORS.GREEN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT, POSITIONS.TOP],
    doors: [POSITIONS.TOP],
  },
  {
    id: 55,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM],
    doors: [],
  },
  {
    id: 56,
    color: COLORS.RED,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.RIGHT],
    doors: [],
  },
  {
    id: 57,
    color: COLORS.GREEN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 58,
    color: COLORS.RED,
    size: SIZES.RED,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.RIGHT, POSITIONS.TOP],
    doors: [POSITIONS.TOP],
  },
  {
    id: 59,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT],
    doors: [POSITIONS.LEFT],
  },
  {
    id: 60,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 61,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT],
    doors: [POSITIONS.LEFT],
  },
  {
    id: 62,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT],
    doors: [],
  },
  {
    id: 63,
    color: COLORS.GREEN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 64,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM],
    doors: [],
  },
  {
    id: 65,
    color: COLORS.GREEN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT],
    doors: [],
  },
  {
    id: 66,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT],
    doors: [],
  },
  {
    id: 67,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 68,
    color: COLORS.GREEN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.RIGHT, POSITIONS.TOP],
    doors: [POSITIONS.LEFT, POSITIONS.RIGHT, POSITIONS.TOP],
  },
  {
    id: 69,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.LEFT, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 70,
    color: COLORS.YELLOW,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT, POSITIONS.TOP],
    doors: [POSITIONS.RIGHT],
  },
  {
    id: 71,
    color: COLORS.GREEN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT],
    doors: [],
  },
  {
    id: 72,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.RIGHT, POSITIONS.TOP],
    doors: [POSITIONS.RIGHT],
  },
  {
    id: 73,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT],
    doors: [],
  },
  {
    id: 74,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT],
    doors: [],
  },
  {
    id: 75,
    color: COLORS.YELLOW,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 76,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT, POSITIONS.TOP],
    doors: [POSITIONS.TOP],
  },
  {
    id: 77,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT],
    doors: [],
  },
  {
    id: 78,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 79,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 80,
    color: COLORS.GREEN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT],
    doors: [],
  },
  {
    id: 81,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.RIGHT, POSITIONS.TOP],
    doors: [POSITIONS.LEFT],
  },
  {
    id: 82,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT],
    doors: [],
  },
  {
    id: 83,
    color: COLORS.GREEN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT, POSITIONS.TOP],
    doors: [POSITIONS.RIGHT],
  },
  {
    id: 84,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 85,
    color: COLORS.YELLOW,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT],
    doors: [],
  },
  {
    id: 86,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT],
    doors: [],
  },
  {
    id: 87,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT],
    doors: [],
  },
  {
    id: 88,
    color: COLORS.GREEN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 89,
    color: COLORS.YELLOW,
    size: SIZES.SMALL,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [POSITIONS.TOP],
  },
  {
    id: 90,
    color: COLORS.RED,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.RIGHT],
    doors: [POSITIONS.RIGHT],
  },
  {
    id: 91,
    color: COLORS.CYAN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.RIGHT],
    doors: [],
  },
  {
    id: 92,
    color: COLORS.CYAN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.TOP],
    doors: [POSITIONS.TOP],
  },
  {
    id: 93,
    color: COLORS.CYAN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM],
    doors: [],
  },
  {
    id: 94,
    color: COLORS.CYAN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.TOP],
    doors: [POSITIONS.LEFT],
  },
  {
    id: 95,
    color: COLORS.CYAN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT],
    doors: [POSITIONS.LEFT],
  },
  {
    id: 96,
    color: COLORS.CYAN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.LEFT, POSITIONS.TOP],
    doors: [POSITIONS.LEFT, POSITIONS.TOP],
  },
  {
    id: 97,
    color: COLORS.CYAN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [POSITIONS.TOP],
  },
  {
    id: 98,
    color: COLORS.CYAN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM],
    doors: [],
  },
  {
    id: 99,
    color: COLORS.CYAN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM, POSITIONS.TOP],
    doors: [],
  },
  {
    id: 100,
    color: COLORS.CYAN,
    size: SIZES.LARGE,
    exits: [POSITIONS.BOTTOM],
    doors: [],
  },
];