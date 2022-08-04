export const throwCustomError = () => {
  const err = new Error();
  //   err.code = "not.found";
  throw err;
};
