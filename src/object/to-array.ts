export const objectToArray = <T extends { [key: string]: any }>(
    object: T,
): any[] => {
    return Object.keys(object).reduce((values: any[], key: string) => {
        if (typeof object[key] === 'object') {
            values.push(objectToArray(object[key]));
        } else {
            values.push(object[key]);
        }

        return values;
    }, []);
};
