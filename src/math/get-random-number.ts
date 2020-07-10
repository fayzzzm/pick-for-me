export const getRandomNumber = <K extends 'string' | 'number'>(length: number, type: K) => {
  const number = Math.random() * 10 ** length;
  if (type === 'string') {
    return String(number);
  } else {
    return number;
  }
};
