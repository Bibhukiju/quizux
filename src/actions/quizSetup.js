export const setCategory = (data) => {
  return {
    type: "SETCATEGORY",
    payload: data,
  };
};

export const setqnum = (data) => {
  const numquest = parseInt(data.numquest);
  data = { numquest };
  return {
    type: "SETQ",
    payload: data,
  };
};
export const startQuiz = (data) => {
  return {
    type: "START",
    payload: data,
  };
};
