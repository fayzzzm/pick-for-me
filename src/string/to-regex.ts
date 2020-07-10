export const stringToRegex = (pattern: string, flags?: string[]) => {
  const regex = new RegExp(`${pattern}`, (flags || []).join(''));
  return regex;
};
