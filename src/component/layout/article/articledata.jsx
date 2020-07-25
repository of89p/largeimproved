import React, { Component } from "react";
import { Link } from "react-router-dom";

class Articledata extends Component {
  render() {
    const {
      title,
      content,
      author,
      authorClass,
      date_added,
      cat,
    } = this.props.data;
    return (
      <React.Fragment>
        <section className="nav">
          <Link to="/" className="mx-auto">
            <h1 className="branding">Large</h1>
          </Link>
        </section>
        <div className="container-custom">
          <h2 className="blog-post-title">{title}</h2>
          <p>{content}</p>
          <br />
          <p style={{ marginBottom: 0 }} className="text-secondary">
            {author}, {authorClass}
          </p>
          <p className="text-secondary">{date_added}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Articledata;
