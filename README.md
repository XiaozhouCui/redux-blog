This simple project uses react-redux, axios and redux-thunk middleware to handle async requests on JsonPlaceholder.


General data loading with Redux:

Components gets rendered onto the screen
Component's "componentDidMount" lifecycle method gets called
We call action creator from "componentDidMount"
Action creator runs code to make an API request (Redux-Thunk comes into play)
API responds with data
Action Creator returns an "action" with the fetched data on the "payload" property
Some reducer sees the action, returns the data off the "payload"
Because we generated some new state obgject, redux/react-redux cause our React app to be rerendered