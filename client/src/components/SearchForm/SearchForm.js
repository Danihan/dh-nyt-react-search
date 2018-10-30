import React, { Component } from 'react';
import Panel from '../Panel/Panel';

class SearchForm extends Component {
  state = {
    topic: '',
    startYear: '',
    endYear: ''
  }

  onChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  onSubmit = () => {
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <Panel title="Search">
        <div className="field">
          <label className="label">Topic</label>
          <div className="control">
            <input className="input" type="text" name="topic" placeholder="" value={this.state.topic} onChange={this.onChange} />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">Start year</label>
              <div className="control">
                <input className="input" type="text" name="startYear" placeholder="" value={this.state.startYear} onChange={this.onChange} />
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <label className="label">End year</label>
              <div className="control">
                <input className="input" type="text" name="endYear" placeholder="" value={this.state.endYear} onChange={this.onChange} />
              </div>
            </div>
          </div>
        </div>

        <div className="control">
          <button className="button is-primary is-fullwidth" onClick={this.onSubmit}>Search</button>
        </div>
      </Panel>
    );
  }
}

export default SearchForm;
