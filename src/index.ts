type IObject = Record<string, any>;

const pickForMe = (object: IObject, keys: string[]) => Object.keys(object).filter((key) => {
  if (keys.indexOf(key) > -1) {
    return true;
  }
  return false;
}).map((key: string) => object[key]) as string[];

const pickForMeArray = <T>(array: T[], startIndex?: number, endIndex?: number): T[] => {
  const { length } = array;
  return [...array].slice(startIndex || 0, endIndex || length);
};

export = {
  pickForMe,
  pickForMeArray,
};
