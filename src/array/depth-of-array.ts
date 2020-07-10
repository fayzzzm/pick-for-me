export const depthOfArray = (array: any[]) => {
  let max = 1;
  const rec = (t: number, arr: any) => {
    const { length } = arr;
    for (let i = 0; i < length; i += 1) {
      if (Array.isArray(arr[i])) {
        rec(t + 1, arr[i]);
      } else {
        max = Math.max(max, t);
      }
    }
  };

  rec(0, array);
  return max;
};
