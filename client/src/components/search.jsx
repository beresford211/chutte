import React, {Component} from 'react';
import ProductCard from './../components/productCard';

export default class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = { searchVal : '' };
  }

  onChangeFunc(inputVal){
    this.setState({searchVal : inputVal});
  }

  searchProductCards(value){
    console.log(value, "this is the value");
    if(this.props.products){
      return this.props.products.map((product, index) => {
        if(product === value){
          return <ProductCard key={index} productDetail={product} />
        }
      })
    }
  }

  render() {
    return (
      <div className="col-sm-10 col-sm-offset-2 col-md-10 col-md-offset-2">
        <div className="input-group">
        <input type="text"
          className="form-control" 
          placeholder="Search for..." 
          value = {this.state.searchVal}
          onChange={(event) => this.onChangeFunc(event.target.value)} />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button"
            onClick={(this.state.searchVal) => this.searchProductCards(event.target.value)}>Search</button>
          </span>
        </div>
      </div>
    )
  }
};

