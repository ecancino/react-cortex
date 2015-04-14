import React from 'react/addons';

class NewProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: null,
      productCategory: null,
      productCountry: null,
      productPrice: null,
      productStock: null
    };
    this.save = this.save.bind(this);
  }
  save() {
    this.props.products.push({
      name: this.state.productName,
      category: Number(this.state.productCategory),
      country: this.state.productCountry,
      price: Number(this.state.productPrice),
      stock: Number(this.state.productStock)
    });
    this.setState({
      productName: '',
      productCategory: '',
      productCountry: '',
      productPrice: '',
      productStock: ''
    });
  }
  update(field, event) {
    var state = {};
    state[field] = event.target.value;
    this.setState(state);
  }
  render() {
    var categories = this.props.categories.map((category, id) => {
      return (<option key={id} value={id}>{category.name.val()}</option>);
    });
    var countries = this.props.countries.map((country, id) => {
      return (<option key={country.id.val()} value={country.id.val()}>{country.name.val()}</option>);
    });
    return (
      <form className="well well-small clearfix">
        <fieldset>
          <section className="form-group pull-left col-xs-6">
            <label htmlFor="name">Name</label>
            <input className="form-control" name="productName" onChange={this.update.bind(this, 'productName')} type="text" value={this.state.productName} />
          </section>
          <section className="form-group pull-left col-xs-6">
            <label htmlFor="category">Category</label>
            <select className="form-control" name="productCategory" onChange={this.update.bind(this, 'productCategory')} value={this.state.productCategory}>
              {categories}
            </select>
          </section>
          <section className="form-group pull-left col-xs-3">
            <label htmlFor="name">Price</label>
            <input className="form-control" name="productPrice" onChange={this.update.bind(this, 'productPrice')} type="number" value={this.state.productPrice} />
          </section>
          <section className="form-group pull-left col-xs-3">
            <label htmlFor="name">Price</label>
            <input className="form-control" name="productStock" onChange={this.update.bind(this, 'productStock')} type="number" value={this.state.productStock} />
          </section>
          <section className="form-group pull-left col-xs-6">
            <label htmlFor="name">Country</label>
            <select className="form-control" name="productCountry" onChange={this.update.bind(this, 'productCountry')} value={this.state.productCountry}>
              {countries}
            </select>
          </section>
          <input className="btn btn-primary pull-right" onClick={this.save} type="button" value="Save" />
        </fieldset>
      </form>
    );
  }
}

NewProductForm.propTypes = {
  categories: React.PropTypes.object.isRequired,
  countries: React.PropTypes.object.isRequired,
  products: React.PropTypes.object.isRequired
};

export default NewProductForm;
