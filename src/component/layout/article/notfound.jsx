import React, { Component } from "react";
import { Link } from "react-router-dom";

class Notfound extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <h2 className="blog-post-title">
          The post you were searching for could not be found.
        </h2>
        <p>It could have been deleted, or is a system error.</p>
        <Link to="/">
          <button className="btn btn-outline-secondary">
            Go back to home page
          </button>
        </Link>
      </div>
    );
  }
}

export default Notfound;
