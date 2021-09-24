export const convertSlash = (type: string, origin: string) => {
  return origin.replace(/[/\\]+/g, type);
};
