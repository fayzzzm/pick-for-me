import That from 'that-is';

const validVariable = (x: any) => That.isUndefined(x) === false || That.isNull(x) === false;

const partialCall = (callback: Function, a: any) => (b: any) => callback(a, b);

const argumentsWithIndex = (c: Function, indexes: number[]) => {
  const array = c();
  return indexes.map((index: number) => array[index]);
};

export = {
  validVariable,
  partialCall,
  argumentsWithIndex,
};
