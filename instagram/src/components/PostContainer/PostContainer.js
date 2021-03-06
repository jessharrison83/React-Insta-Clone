import React, { Component } from "react";
import CommentSection from "../CommentSection/CommentSection.js";
import Post from "../Post/Post.js";
import styled from "styled-components";

const Card = styled.div`
  width: 600px;
  margin: 0 auto;
  border: 1px solid whitesmoke;
  margin-bottom: 40px;
  border-radius: 3px;
`;

class PostContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      thumbnailUrl: props.thumbnail,
      username: props.username,
      imageUrl: props.imageUrl,
      likes: props.likes
    };
  }

  likeClickHandler = event => {
    event.preventDefault();
    const likes = event.target;
    if (likes.classList.contains("far")) {
      likes.classList.remove("far");
      likes.classList.add("fas");
      this.setState({ likes: this.state.likes + 1 });
    } else {
      likes.classList.remove("fas");
      likes.classList.add("far");
      this.setState({ likes: this.state.likes - 1 });
    }
  };
  commentClickHandler = event => {
    event.preventDefault();
    document.querySelector(".add-comment").focus();
  };
  render() {
    return (
      <Card>
        <Post
          thumbnail={this.state.thumbnailUrl}
          username={this.state.username}
          imageUrl={this.state.imageUrl}
          likes={this.state.likes}
          likeClickHandler={this.likeClickHandler}
          commentClickHandler={this.commentClickHandler}
        />
        <CommentSection comments={this.props.comments} time={this.props.time} />
      </Card>
    );
  }
}

export default PostContainer;
