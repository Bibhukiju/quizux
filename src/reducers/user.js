const userReducer = (state = "", action) => {
  switch (action.type) {
    case "SETNAME": {
      return action.payload.name;
    }
    default:
      return state;
  }
};

export default userReducer;
