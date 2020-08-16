// Action creators
import _ from "lodash";
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
  // instead of returning an action boject, fetchPosts() can return a function which will be pucked up by redux-thunk
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

    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};

// // UserHeaders fetch their own data separately once mounted
// // get user by id, passing 2 parameters by Currying
// export const fetchUser = (id) => {
//   return (dispatch) => {
//     _fetchUser(id, dispatch);
//   }
// }

// // to prevent making repeative api calls (10 times for each user ID), use lodash memoize funcion to wrap the action
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   // dispatch the fetch user action
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

// Fetch both posts data and user data in one mega action
// Calling action creators inside another action creator
export const fetchPostsAndUsers = () => async (dispatch, getState) => { // redux-thunk automatically call dispatch and getState arguments
  // instead of dispatching an action boject, this can dispatch a function which will be picked up by redux-thunk
  await dispatch(fetchPosts()); // wait until all posts are fetched
  
  // return an array with unique userIds
  // const userIds = _.uniq(_.map(getState().posts, "userId")); // [1,2,3...10]
  // userIds.forEach(id => dispatch(fetchUser(id)));
  
  // Alternative approach using Lodash chainning
  _.chain(getState().posts) // get state.posts array
    .map("userId") // get array of repeated userIds for every 10 posts
    .uniq() // get unique userIds [1,2,3...10]
    .forEach((id) => dispatch(fetchUser(id))) // dispatch fetchUser function for each userId
    .value(); // execute the above methods
};
