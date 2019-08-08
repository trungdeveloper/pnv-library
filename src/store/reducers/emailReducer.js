const initState = {
    err: null
  };
  
  const emailReducer = (state = initState, action) => {
    switch (action.type) {
      case "SEND_SUCCESS":
        console.log("send mail ok");
        return {
          ...state,
          err: null
        };
  
      case "SEND_ERROR":
        return {
          ...state,
          err: "Login failed"
        };
  
      default:
        return state;
    }
  };
  
  export default emailReducer;