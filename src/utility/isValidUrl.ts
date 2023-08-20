export const isValidUrl = (url: string) => {
  const regx = new RegExp(/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/);
  return regx.test(url);
};
