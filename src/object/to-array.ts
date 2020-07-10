import That from 'that-is';

type InterfaceType = {
  [index: string]: any;
};

export const objectToArray = <T = InterfaceType>(object: T): any[] => {
  const values: any[] = [];

  const rec = (obj: any) => {
    Object.keys(object).forEach((key: string) => {
      if (That.isObject((obj as InterfaceType)[key])) {
        objectToArray((obj as InterfaceType)[key]);
      } else {
        values.push((obj as any)[key]);
      }
    });
  };

  rec(object);
  return values;
};
