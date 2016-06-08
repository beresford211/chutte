import React from 'react';
import {Popover, Tooltip, OverlayTrigger, Button, Modal} from 'react-bootstrap';
import ProductDetail from './productDetail';

class ProductDetailModal extends React.Component {
  constructor(props){
    super(props);
    this.state = { showModal: false };
  }

  close(){
    this.setState({ showModal: false });
    this.props.resetBuyMsg();
  }

  open(){
    this.setState({ showModal: true });
  }

  render() {

    return (
      <div>
        <div className="buy-btn" onClick={this.open.bind(this)}>
          Buy Now!
        </div>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Item Checkout</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ProductDetail item={this.props.items}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
};



export default ProductDetailModal;
