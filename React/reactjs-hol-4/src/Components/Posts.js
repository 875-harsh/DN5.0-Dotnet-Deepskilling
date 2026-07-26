import React, { Component } from "react";
import axios from "axios";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  loadPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({
          posts: response.data
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert(error);
    console.log(info);
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>

        {this.state.posts.slice(0, 10).map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;