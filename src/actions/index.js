import jsonPlaceholder from '../apis/jsonPlaceholder';

// Action creators

// Bad approach with axios!!!
// export const fetchPosts = async () => {
//   const response = await jsonPlaceholder.get("/posts");
//   // Not working: async/await will not return a plain object, but return a request!
//   return {
//     type: "FETCH_POSTS",
//     apyload: response
//   };
// };

// manually dispatch an action
export const fetchPosts = () => {
  // instead of returning an action boject, it returns a function
  return function(dispatch, getState) {
    const promise = jsonPlaceholder.get("/posts");
    return {
      type: "FETCH_POSTS",
      apyload: promise
    };
  }
};