export const extractArrayFromKeys = (data: any, keyWord: string) => {
  return Object.keys(data)
    .filter((key) => key.includes(keyWord))
    .map((key) => data[key])
    .filter((value) => value);
};
