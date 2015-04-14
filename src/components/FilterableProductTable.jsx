import React from 'react';

import NewProductForm from './NewProductForm';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleUserInput(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  }
  render() {
    return (
      <section>
        <NewProductForm categories={this.props.categories}
          countries={this.props.countries}
          products={this.props.products}
        />
        <SearchBar filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput}
        />
        <ProductTable categories={this.props.categories}
          countries={this.props.countries}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          products={this.props.products}
        />
      </section>
    );
  }
}

FilterableProductTable.propTypes = {
  categories: React.PropTypes.object.isRequired,
  countries: React.PropTypes.object.isRequired,
  products: React.PropTypes.object.isRequired
};

export default FilterableProductTable;
