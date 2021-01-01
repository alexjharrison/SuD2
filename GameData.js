export const Shared = {
  factoryDisplays: [
    ["red", "yellow", "black", "black"],
    ["red", "yellow", "black", "black"],
    ["red", "yellow", "black", "black"],
    ["red", "yellow", "black", "black"],
    ["red", "yellow", "black", "black"]
  ],
  pot: ["one", "red"]
};

export const Boards = [
  {
    score: 0,
    patternLines: [
      { color: null, numTiles: 1, tilesFilled: 0 },
      { color: null, numTiles: 2, tilesFilled: 0 },
      { color: null, numTiles: 3, tilesFilled: 0 },
      { color: null, numTiles: 4, tilesFilled: 0 },
      { color: null, numTiles: 5, tilesFilled: 0 }
    ],
    wall: [false /*(25x)*/],
    penalties: 0
  },
  {
    patternLines: [
      { color: null, numTiles: 1, tilesFilled: 0 },
      { color: null, numTiles: 2, tilesFilled: 0 },
      { color: null, numTiles: 3, tilesFilled: 0 },
      { color: null, numTiles: 4, tilesFilled: 0 },
      { color: null, numTiles: 5, tilesFilled: 0 }
    ],
    wall: [false /*(25x)*/],
    penalties: 0
  }
];

/*

Rules
Can only move on your own turn
if patternLine color is set, must add same color

*/
