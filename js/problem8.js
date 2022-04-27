const matrix = [
  [1, 1, 1, 1],
  [5, 2, 2, 100],
  [9, 4, 2, 1],
];

const getWay = function (table, i, j) {
  const top = table[i - 1]?.[j];
  const left = table[i][j - 1];
  let count = 0;

  if (top !== undefined && left !== undefined) {
    count += top > left ? left : top;
  }
  if (top !== undefined && left === undefined) {
    count = table[i - 1][j];
  }

  if (top === undefined && left !== undefined) {
    count = table[i][j - 1];
  }
  return count;
};

