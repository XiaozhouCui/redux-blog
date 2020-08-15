import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';

class PostList extends Component {
  componentDidMount() {
    // call action creatoor
    this.props.fetchPosts();
  }
  render() {
    console.log(this.props.posts);
    return (
      <div>
        Post List
      </div>
    );
  }
}

// reducer will update store state with action.payload
// map state.posts to this.props.posts
const mapStateToProps = (state) => {
  return { posts: state.posts };
}

export default connect(
  // null, // if we don't have mapStateToProps(), then pass "null" as first argument
  mapStateToProps,
  { fetchPosts } // add action creator to this.props
)(PostList);