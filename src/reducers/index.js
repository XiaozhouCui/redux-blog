import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

// Rules of Reducers:
// 1. Must return any value besides "undefined"
// 2. Produces "state", or data to be used inside of your app using only previous state and action
// 3. Must not return reach "out of itself" to decide what value to return
// 4. Must not mutate its input "state" argument (mutated state is NOT considered as a different new state, "=" sign)

// store state is defined here
export default combineReducers({
  posts: postsReducer,
});
