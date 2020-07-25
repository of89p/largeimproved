import React, { Component } from "react";
import axios from "axios";

import Articledata from "./layout/article/articledata";
import Notfound from "./layout/article/notfound";

class Article extends Component {
  state = {
    articleDetails: [],
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get(`https://thejosephian.000webhostapp.com/ajax/large/fetch?id=${id}`)
      .then((res) => this.setState({ articleDetails: res.data }));
  }

  render() {
    console.log(this.state.articleDetails);
    return this.state.articleDetails != "Article not found" ? (
      <Articledata data={this.state.articleDetails} />
    ) : (
      <Notfound />
    );
  }
}

export default Article;
