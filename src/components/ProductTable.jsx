import React from 'react/addons';

import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  render() {
    var products = this.props.products || [],
        categories = this.props.categories,
        countries = this.props.countries,
        inStockOnly = this.props.inStockOnly,
        filterText = this.props.filterText;

    if (inStockOnly) {
      products = products.filter((product) => {
        return product.stock.val() > 0;
      });
    }

    if (filterText) {
      products = products.filter((product) => {
        return product.name.val().indexOf(filterText) >= 0;
      });
    }

    var rows = products.map((product, id) => {
      var category = categories.find((element, index) => {
        return (index === product.category.val());
      });
      var country = countries.find((element, index) => {
        return (element.id.val() === product.country.val());
      });
      return (
        <ProductRow category={category}
          country={country}
          key={id}
          product={product}
        />
      );
    });
    return (
      <table className="table table-condensed table-bordered">
        <thead>
          <tr>
            <th className="col-xs-4">Product</th>
            <th className="col-xs-3">Category</th>
            <th className="col-xs-3">Country</th>
            <th className="col-xs-1">Price</th>
            <th className="col-xs-1">Stock</th>
          </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
      </table>
    );
  }
}

ProductTable.propTypes = {
  categories: React.PropTypes.object.isRequired,
  countries: React.PropTypes.object.isRequired,
  filterText: React.PropTypes.string.isRequired,
  inStockOnly: React.PropTypes.bool.isRequired,
  products: React.PropTypes.object.isRequired
};

export default ProductTable;
