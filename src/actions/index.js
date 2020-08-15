// Action creators

import jsonPlaceholder from "../apis/jsonPlaceholder";

// Bad approach with axios alone!!!
// export const fetchPosts = async () => {
//   const response = await jsonPlaceholder.get("/posts");
//   // NOT WORKING: async/await will not return a plain object, but return a request!
//   return {
//     type: "FETCH_POSTS",
//     payload: response
//   };
// };

// redux-thunk approach (need to hookup first at root level)
export const fetchPosts = () => {
  // instead of returning an action boject, fetchPosts() can return a function thanks to redux-thunk
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");
    // manually call the dispatch function
    dispatch({ type: "FETCH_POSTS", payload: response.data }); // "FETCH_POSTS" action will be dispatched to postsReducer
  };
};

// get user by id, passing 2 parameters by Currying
export const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    // dispatch the fetch user action
    dispatch({ type: "FETCH_USER", payload: response.data });
  }
}
