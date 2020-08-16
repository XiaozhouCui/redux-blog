export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      // add action payload to the state array
      return action.payload;
    default:
      return state;
  }
};
