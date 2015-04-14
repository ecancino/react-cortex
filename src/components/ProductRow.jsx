import React from 'react/addons';
import classNames from 'classnames';
import slugify from 'slugify';

class ProductRow extends React.Component {
  render() {
    var product = this.props.product,
      category = this.props.category,
      country = this.props.country,
      categoryClasses = classNames(slugify(category.val().name)),
      stockClasses = classNames({
        'alert-danger': !product.stock.val(),
        'alert-warning': product.stock.val() <= 10,
        'alert-success': product.stock.val() > 10
      }),
      flag = `/img/${country.val().alpha}.svg`;
    return (
      <tr key={product.id} title={product.name.val()}>
        <td>{product.name.val()}</td>
        <td className={categoryClasses}>{category.val().name}</td>
        <td><img src={flag} height="20" /> {country.val().name}</td>
        <td>${product.price.val()}</td>
        <td className={stockClasses}>{product.stock.val()}</td>
      </tr>
    );
  }
}

ProductRow.propTypes = {
  category: React.PropTypes.object.isRequired,
  product: React.PropTypes.object.isRequired
};

export default ProductRow;
