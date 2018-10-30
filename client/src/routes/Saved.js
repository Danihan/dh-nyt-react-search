import React, { Component } from 'react';
import articlesApi from '../api/articles';
import ArticleList from '../components/ArticleList';
import Panel from '../components/Panel/Panel';

class Saved extends Component {

  state = {
    articles: []
  }

  componentDidMount() {
    this.fetchSavedArticles();
  }

  async fetchSavedArticles() {
    const articles = await articlesApi.get();

    this.setState({ articles });
  }

  onArticleDelete = async (index) => {
    const article = this.state.articles[index];

    articlesApi.remove(article._id);

    this.setState({
      articles: this.state.articles.filter(a => a._id !== article._id)
    });
  }

  render() {
    return (
      <Panel title="Saved articles">
        <ArticleList items={this.state.articles} icon="trash" onSave={this.onArticleDelete} />
      </Panel>
    );
  }
}

export default Saved;
