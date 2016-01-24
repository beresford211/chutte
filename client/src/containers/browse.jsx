import React from 'react';
import {connect} from 'react-redux';
import NavBar from './../components/navbar';
import SearchBar from './../components/search';
import ProductCard from './../components/productCard';
import BrowseSideBar from './../components/BrowseSideBar';
import {fetchProducts} from './../actions/actionsProducts';

class BrowsePage extends React.Component {
  componentDidMount(){
    this.props.fetchAllProducts();
  }

  render(){
    let productCards;
    this.props.products ? productCards = this.props.products.map(product => {
      return <ProductCard productDetail={product} />
    }) : [];


    return (
      <div>
        <NavBar/>
        <div className="container-fluid">
          <SearchBar className="serach-bar col-sm-10"/>
          <div className="row">
            {productCards}
          </div>
          <BrowseSideBar />

        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchAllProducts: function() {
      dispatch(fetchProducts());
    }
  }
}

function mapStateToProps(state){
  return {products: state.productStore.products.productList};
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePage);