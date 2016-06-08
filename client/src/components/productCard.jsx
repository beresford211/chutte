import React from 'react';
import {Link} from 'react-router';
import {Grid, Thumbnail, Button,Row, Col } from 'react-bootstrap';
import numeral from 'numeral';
import ProductImage from './productImage';
import Timer from './timer';
import BuyButton from './buyButton';
import ProductDetailModal from './productDetailModal';
import { featureItem, unfeatureItem } from './../actions/actionsProducts';
import { connect } from 'react-redux';

class ProductCard extends React.Component {
  render() {
    return (
        <Col xs={12} sm={6} md={4} className="portfolio-item">
          <div className="productCard" id={this.props.productDetail._id}>
            <ProductImage className="productImage" image={this.props.productDetail.image}/>
            <row>
              <div className="productName">
                 {this.props.productDetail.productName}
              </div>
              
              <div className="productTime buyModalDetails">
                <Timer nextUpdateTime={this.props.productDetail.timeRemaining}/>
              </div>

              <div className="productQuantity">
                <p className="productinfo">Qty: {this.props.productDetail.quantity}</p>
              </div>

              <div className="productPrice">
                <p className="productinfo">Price: {numeral(this.props.productDetail.price).format('$0,0[.]00')}</p>
              </div>
            </row>

            <row>
              <div className="text-center">
                <ProductDetailModal items={this.props.productDetail._id} resetBuyMsg={this.props.resetBuyMsg}/>
              </div>
            </row>
          </div>
        </Col>
    );
  }
};

// function mapStateToProps(state){
//   console.log(state, "does this occur?")
//   return {
//     isOpen : true
//   }
// }
// isOpen={this.props.isOpen} openModel={ ()=> this.props.featureItem(this.props.productDetail._id) }
 // connect(null, {featureItem: featureItem})(ProductCard);
export default ProductCard;
