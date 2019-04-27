import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const displayShow = document.getElementById('show');
    displayShow.style.display = "none";
    displayShow.classList.add('test')
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('You just searched for' + this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" id="show" onClick={this.handleClick} value={this.state.value} onChange={this.handleChange} />
          <i className="fas fa-search"  ></i>
        </label>
        <label>
          <input type="submit" value="" onSubmit={this.handleSubmit} />
        </label>
      </form>
    )
  }
}

export default Search


