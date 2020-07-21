import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <Link className="text-muted" to="#">
                Subscribe
              </Link>
            </div>
            <div className="col-4 text-center">
              <a className="blog-header-logo text-dark" href="/">
                Large
              </a>
              <p className="brandingDes">SJI's (unofficial) editorial</p>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="text-muted" href="#" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="mx-3"
                  role="img"
                  viewBox="0 0 24 24"
                  focusable="false"
                >
                  <title>Search</title>
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <path d="M21 21l-5.2-5.2" />
                </svg>
              </a>
              <Link className="btn btn-sm btn-outline-secondary" to="#">
                Sign up
              </Link>
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <Link className="p-2 text-muted" to="#">
              Life
            </Link>
            <Link className="p-2 text-muted" to="#">
              School
            </Link>
            <Link className="p-2 text-muted" to="#">
              Human interest
            </Link>
            <Link className="p-2 text-muted" to="#">
              Reviews
            </Link>
            <Link className="p-2 text-muted" to="#">
              From teachers
            </Link>
            <Link className="p-2 text-muted" to="#">
              Compliments
            </Link>
            <Link className="p-2 text-muted" to="#">
              CCA
            </Link>
            <Link className="p-2 text-muted" to="#">
              Suggestions
            </Link>
            <Link className="p-2 text-muted" to="#">
              Opinion
            </Link>
            <Link className="p-2 text-muted" to="#">
              Snippets
            </Link>
            <Link className="p-2 text-muted" to="/article/about">
              About us
            </Link>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
