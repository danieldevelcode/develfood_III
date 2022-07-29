export const isEmail = (text: string) => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return reg.test(text);
};