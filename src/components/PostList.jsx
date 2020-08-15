import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount() {
    // call action creatoor
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} /> {/* pass in post.userId for further get requests */}
          </div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.posts);
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

// reducer will update store state with action.payload
// map state.posts to this.props.posts
const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(
  // null, // if we don't have mapStateToProps(), then pass "null" as first argument
  mapStateToProps,
  { fetchPosts } // add action creator to this.props
)(PostList);
