export const generateRandomInteger = function (...minMax) {
  let maxNum = 0;
  let minNum = 0;
  if (minMax.length === 1) [maxNum] = minMax;
  else if (minMax.length === 2) [minNum, maxNum] = minMax;
  return Math.round(Math.random() * (maxNum - minNum) + minNum);
};

export const generateRandomElementFromArray = function (arr) {
  const index = generateRandomInteger(arr.length - 1);
  return arr[index];
};

export const wait = (miliseconds) =>
  new Promise((res, _) => {
    setTimeout(res, miliseconds);
  });

export const generateRandomNumberString = function (length) {
  let result = "";
  for (let i = 0; i < length; ++i) {
    const digit = generateRandomInteger(9).toString();
    result += digit;
  }
  return result;
};
