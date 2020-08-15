export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      // add action payload to the state array
      return [...state, action.payload];
    default:
      return state;
  }
};
