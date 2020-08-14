import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';

class PostList extends Component {
  componentDidMount() {
    // call action creatoor
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        Post List
      </div>
    );
  }
}


export default connect(
  null, // if we don't have mapStateToProps(), then pass "null" as first argument
  { fetchPosts } // add action creator to this.props
)(PostList);