import React from 'react';
import ProductImage from './productImage';
import BuyButton from './buyButton';

class ProductCard extends React.Component {
  render() {
    return (
      <div className="productCard col-sm-6 col-md-4" id={this.props.productDetail._id}>
        <div className="productName">
          <p> {this.props.productDetail.productName} </p>
        </div>

        <ProductImage className="productImage" image={this.props.productDetail.imageURL}/>
        
        <row>
          <div className="col-md-4 productTime">
            <p className="productinfo">Time Left: {this.props.productDetail.priceReduces}</p>
          </div>

          <div className="col-md-4 productQuantity">
            <p className="productinfo">Quantity: {this.props.productDetail.quantity}</p>
          </div>

          <div className="col-md-4 productPrice">
            <p className="productinfo">Price: ${this.props.productDetail.price}</p>
          </div>
        </row>
      </div>
    );
  }
};

export default ProductCard;
