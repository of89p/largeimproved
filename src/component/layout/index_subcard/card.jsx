import React, { Component } from "react";
import { Link } from "react-router-dom";

class Subcard extends Component {
  state = {};
  render() {
    return (
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-danger">
            The Large Editorial
          </strong>
          <h3 className="mb-0">Write for/to us</h3>
          <div className="mb-1 text-muted">July 12, 2020</div>
          <p className="card-text mb-auto">
            Write to or for us, in any category we offer. If impactful and
            meaningful, it will be published.
          </p>
          <Link to="/article/write-to-us" className="stretched-link">
            Continue reading
          </Link>
        </div>
        <div className="col-auto d-none d-lg-block">
          <svg
            className="bd-placeholder-img"
            width="200"
            height="250"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Thumbnail"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
              Thumbnail
            </text>
          </svg>
        </div>
      </div>
    );
  }
}

export default Subcard;
