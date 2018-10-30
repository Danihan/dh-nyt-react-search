import React, { Component } from 'react';
import Panel from '../Panel/Panel';
import SearchForm from '../SearchForm/SearchForm';
import ArticleList from '../ArticleList';
import nytApi from '../../api/nyt';
import articlesApi from '../../api/articles';

class Search extends Component {
  state = {
    articles: []
  }

  onFormSubmit = async ({ topic, startYear, endYear }) => {
    const resp = await nytApi.search(topic, startYear, endYear);
    const articles = resp.response.docs;

    this.setState({ articles });
  }

  onArticleSave = async (index) => {
    const article = this.state.articles[index];

    const articles = this.state.articles.slice();
    articles[index] = { ...articles[index], icon: false };
    this.setState({ articles });

    try {
      await articlesApi.post({
        url: article.web_url,
        headline: article.headline.main,
        date: article.pub_date
      });
    } catch (err) {
      alert(`Failed to save article: ${err}`);
    }
  }

  render() {
    return (
      <div>
        <SearchForm onSubmit={this.onFormSubmit} />

        <Panel title="Search results">
          <ArticleList items={this.state.articles} onSave={this.onArticleSave} />
        </Panel>
      </div>
    );
  }
}

export default Search;
