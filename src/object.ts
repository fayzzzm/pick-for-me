import That from 'that-is';

const copyObject = (obj: Record<string, any>) => JSON.parse(JSON.stringify(obj));
const objectToString = (obj: Record<string, any>): string => JSON.stringify(obj);

type InterfaceType = {
  [index: string]: any;
};

const deepAssign = <T = InterfaceType, S = InterfaceType>(dest: T, src: S): T & S => {
  Object.keys(src).forEach((key: string) => {
    const srcValue = (src as InterfaceType)[key];

    if (Object.prototype.hasOwnProperty.call(dest, key)) {
      const destValue = (dest as InterfaceType)[key];
      if (That.isObject(destValue) && That.isObject(srcValue)) {
        deepAssign(destValue, srcValue);
      } else {
        (dest as InterfaceType)[key] = srcValue;
      }
    } else {
      (dest as InterfaceType)[key] = srcValue;
    }
  });

  return dest as T & S;
};

const objectKeysToString = <T = InterfaceType>(object: T): any => {
  const strKeys: any = [];
  const deepIntoKey = (obj: any, keys: string[]) => {
    Object.keys(obj).forEach((key: string) => {
      if (That.isObject(obj[key])) {
        deepIntoKey(obj[key], keys.concat(`${key}.`));
      } else if (That.isArray(obj[key])) {
        deepIntoKey(obj[key], keys.concat(`[${key}]`));
      } else {
        strKeys.push(keys.concat(key).join(''));
      }
    });
  };

  deepIntoKey(object, []);

  return strKeys;
};

const deepGetValue = (value: any, pattern: string): any => {
  if (pattern.length === 0) {
    return value;
  } else {
    if (/^\.?\w+/.test(pattern)) {
      const key = (pattern.match(/^\.?(\w+)/) || [])[1];
      return deepGetValue(value[key], pattern.replace(/^\.?\w+/, ''));
    } else if (/^\[\d+\]/.test(pattern)) {
      const index = (pattern.match(/^\[(\d)\]/) || [])[1];
      return deepGetValue(value[index], pattern.replace(/^\[\d+\]/, ''));
    } else {
      return 'invalid';
    }
  }
};

const objectByKeys = <T = InterfaceType>(object: T, keys: string[]) =>
  keys.reduce((t: Object, key: string) => {
    const value = deepGetValue(object, key);
    (t as InterfaceType)[key] = value;

    return t;
  }, {});

const copyDeep = <T = InterfaceType, S = InterfaceType>(dest: T, src: S): T => {
  Object.keys(dest).forEach((key: string) => {
    if ((src as InterfaceType)[key]) {
      const srcValue = (src as InterfaceType)[key];
      if (That.isObject(srcValue)) {
        (dest as InterfaceType)[key] = copyObject(srcValue);
      } else {
        (dest as InterfaceType)[key] = srcValue;
      }
    }
  });

  return dest;
};

interface Node {
  value: any;
  next: any;
}

class LinkedList {
  private head: Node | null = null;

  private tail: Node | null = null;

  public length: number = 0;

  constructor() {
    // SOmething will be here
  }

  private generateNode = (value: any): Node => ({
    value,
    next: null,
  });

  public isEmpty = (): boolean => this.length === 0;

  public push = (value: any): void => {
    const node = this.generateNode(value);
    if (That.isNull(this.head)) {
      this.head = node;
      this.tail = node;
      this.length++;
    }

    this.tail!.next = node;
    this.tail = node;
    this.length++;
  };
}

const objectToLinkedList = <T extends Object>(object: T): LinkedList => {
  const list = new LinkedList();
  const rec = (value: any): void => {
    Object.keys(value).forEach((key: string) => {
      if (That.isObject(value[key])) {
        rec(value[key]);
      } else {
        list.push(value[key]);
      }
    });
  };

  rec(object);
  return list;
};

const objectToMap = <T = InterfaceType>(object: T): Map<string, any> => {
  const map = new Map();
  const objectKeys = objectKeysToString(object);

  objectKeys.forEach((key: string) => map.set(key, deepGetValue(object, key)));
  return map;
};

const objectToArray = <T = InterfaceType>(object: T): any[] => {
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

export = {
  deepAssign,
  copyDeep,
  objectByKeys,
  objectKeysToString,
  objectToLinkedList,
  objectToArray,
  objectToMap,
  objectToString,
};
