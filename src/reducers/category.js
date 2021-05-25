const categoryReducer = (state = "", action) => {
  switch (action.type) {
    case "SETCATEGORY": {
      console.log(action.payload);
      return action.payload.category;
    }

    default:
      return state;
  }
};

export default categoryReducer;
