export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      // return an array of users
      return [...state, action.payload];
    default:
      return state;
  }
};
