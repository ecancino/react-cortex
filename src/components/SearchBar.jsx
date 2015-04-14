import React from 'react/addons';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  valueChange(field, property, event) {
    this.props[field] = event.target[property];
    this.props.onUserInput(
      this.props.filterText,
      this.props.inStockOnly
    );
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <form className="well well-small" onSubmit={this.handleSubmit.bind(this)}>
        <input className="form-control"
          onChange={this.valueChange.bind(this, 'filterText', 'value')}
          placeholder="Search..."
          type="text"
          value={this.props.filterText}
        />
        <br />
        <fieldset className="form-inline">
          <label className='checkbox'>
            <input checked={this.props.inStockOnly}
              onChange={this.valueChange.bind(this, 'inStockOnly', 'checked')}
              type="checkbox"
            />
            &nbsp;Only show products in stock
          </label>
        </fieldset>
      </form>
    );
  }
}

SearchBar.propTypes = {
  filterText: React.PropTypes.string.isRequired,
  inStockOnly: React.PropTypes.bool.isRequired,
  onUserInput: React.PropTypes.func.isRequired
};

export default SearchBar;
