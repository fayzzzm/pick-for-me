type IObject = Record<string, any>;

export const pickForMe = (object: IObject, keys: string[]): string => {
    const stringify = JSON.stringify(object);
    const regex: RegExp = new RegExp(`${keys.join('|')}`, 'gi');

    return stringify.replace(regex, '');
}