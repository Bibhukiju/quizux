export const getUserName = (data) => {
  return {
    type: "SETNAME",
    payload: data,
  };
};
