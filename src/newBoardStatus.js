const newBoardStatus = (cellStatus = () => Math.random() < 0.3) => {
  const grid = [];
  for (let r = 0; r < totalBoardRows; r++) {
    grid[r] = [];
    for (let c = 0; c < totalBoardColumns; c++) {
      grid[r][c] = cellStatus();
    }
  }
  return grid;
};

/* We need to know the status of each cell and its 8 neighbours for each
iteration. This is a function that returns an array of arrays each containing
cells with boolean values. The number of arrays in the parent array will match
the number of rows. Each child array will be the columns. Each boolean value
will represent the state of each cell – dead or alive.
