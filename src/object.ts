// eslint-disable-next-line spaced-comment
/// <reference path="../types/index.d.ts" />

import That from 'that-is';

const copyObject = <T extends Object>(obj: T) => JSON.parse(JSON.stringify(obj));
const objectToString = <T extends Object>(obj: T): string => JSON.stringify(obj);

const deepAssign = <T extends Object, S extends Object>(dest: T, src: S): T & S => {
  if (objectToString(dest) === objectToString(src)) {
    return dest as any;
  }
  Object.keys(src).forEach((key: string) => {
    const srcValue = (src as any)[key];
    if ((dest as any)[key]) {
      const destValue = (dest as any)[key];
      if (That.isObject(destValue) && That.isObject(srcValue)) {
        deepAssign(destValue, srcValue);
      } else {
        // eslint-disable-next-line no-param-reassign
        (dest as any)[key] = srcValue;
      }
    } else {
      // eslint-disable-next-line no-param-reassign
      (dest as any)[key] = srcValue;
    }
  });
  return dest as any;
};

const objectKeysToString = <T extends Object>(object: T): any => {
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

const objectByKeys = <T extends Object>(object: T, keys: string[]) => {
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

  return keys.reduce((t: Object, key: string) => {
    const value = deepGetValue(object, key);
    // eslint-disable-next-line no-param-reassign
    (t as any)[key] = value;

    return t;
  }, {});
};

const copyDeep = <T extends Object, S extends Object>(dest: T, src: S): T => {
  if ((dest as any) === src) {
    return dest as any;
  }

  Object.keys(dest).forEach((key: string) => {
    if ((src as any)[key]) {
      const srcValue = (src as any)[key];
      if (That.isObject(srcValue)) {
        // eslint-disable-next-line no-param-reassign
        (dest as any)[key] = copyObject(srcValue);
      } else {
        // eslint-disable-next-line no-param-reassign
        (dest as any)[key] = srcValue;
      }
    }
  });

  return dest as any;
};

const objectValues = <T extends Object>(object: T): any[] => {
  const values: any = [];
  const rec = (obj: T): void => {
    Object.keys(obj).forEach((key: string) => {
      if (That.isObject((obj as any)[key])) {
        rec((obj as any)[key]);
      } else {
        values.push((obj as any)[key]);
      }
    });
  };

  rec(object);
  return values;
};

interface Node {
  value: any;
  next: any;
}

class LinkedList {
  private head: Node | null = null;
  // eslint-disable-next-line lines-between-class-members
  private tail: Node | null = null;
  // eslint-disable-next-line lines-between-class-members
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

const linkedListObject = <T extends Object>(object: T): LinkedList => {
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

export = {
  deepAssign,
  copyDeep,
  objectByKeys,
  objectKeysToString,
  objectValues,
  linkedListObject,
};
