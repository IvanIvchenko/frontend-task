export const transformArrayToObj = (arr: string[]): {[key: string]: boolean} => {
  const obj: {[key: string]: boolean} = {};
  arr.forEach((str) => {
      obj[str] = false;
  });
  return obj;
};
