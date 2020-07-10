export const arrayRange = (array: any, startIndex?: number, endIndex?: number) => {
  const { length } = array;
  return [...array].slice(startIndex || 0, endIndex || length);
};
