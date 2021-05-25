const quizSetup = (state = {}, action) => {
  switch (action.type) {
    case "SETCATEGORY": {
      return {
        ...state,
        category: action.payload.category,
      };
    }
    case "SETQ": {
      return {
        ...state,
        numquest: action.payload.numquest,
      };
    }
    case "START": {
      return {
        ...state,
        isStarted: true,
      };
    }
    default:
      return state;
  }
};

export default quizSetup;
