const initState = {
  err: null
};

const bookReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_BOOK_SUCCESS":
      return {
        ...state,
        err: null
      };

    case "DELETE_BOOK_ERROR":
      return {
        ...state,
        err: action.err
      };

    case "ADD_BOOK_SUCCESS":
      return {
        ...state,
        err: null
      };

    case "ADD_BOOK_ERROR":
      return {
        ...state,
        err: action.err
      };

    case "UPDATE_BOOK_SUCCESS":
      return {
        ...state,
        err: null
      };

    case "UPDATE_BOOK_ERROR":
      return {
        ...state,
        err: action.err
      };

    default:
      return state;
  }
};

export default bookReducer;
