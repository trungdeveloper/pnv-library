const initState = {
    bookErr: null
  };
  
  const bookReducer = (state = initState, action) => {
    switch (action.type) {
      case "DELETE_BOOK_SUCCESS":
        console.log("delete book ok");
        return {
          ...state,
          err: null
        };
  
      case "DELETE_BOOK_ERROR":
        return {
          ...state,
          err: action.err
        };
  
      default:
        return state;
    }
  };
  
  export default bookReducer;