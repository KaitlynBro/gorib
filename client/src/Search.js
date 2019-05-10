import React from 'react';
import searchIcon from './assets/search.png';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('You just searched for ' + this.state.value)
    document.getElementById('search-results').append(this.state.value);
    document.getElementById('search-results').classList.add('search-results')
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-form">
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} className="search-text" />
        </label>
        <label>
          <input type="submit" onSubmit={this.handleSubmit} value='' className="search-submit" />
          <img src={searchIcon} alt="" className="search-icon" />
        </label>
      </form>
    )
  }
}

export default Search


