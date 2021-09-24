export const generateRandomInteger = function (...minMax) {
  let maxNum = 0;
  let minNum = 0;
  if (minMax.length === 1) [maxNum] = minMax;
  else if (minMax.length === 2) [minNum, maxNum] = minMax;
  return Math.ceil(Math.random() * (maxNum - minNum) + minNum);
};

export const wait = (miliseconds) =>
  new Promise((res, _) => {
    setTimeout(res, miliseconds);
  });
