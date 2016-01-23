import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {postListing} from './../actions/actionsCreateListing';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class CreateListing extends React.Component {
  constructor(props){
    super(props);
    
    this.state = { categorySelected: '', value: 2, startDate: moment(), endDate: moment() };
  }


  _handleChange(event, index, value){ 
    console.log(event, "event", index, "index", value, "value");
    this.setState({value});
  }
  
  _startDate(firstDate) {
    this.setState({startDate: firstDate.format("YYYY-MM-DD H").valueOf()});
  }

  _endDate(lastDate) {
    this.setState({endDate: lastDate.format("YYYY-MM-DD H").valueOf()});
  }

  submitForm(){
    var itemDetails = {
      productName: this.refs.name.value,
      createdBy : this.refs.name.value,
      category : this.state.categorySelected,
      startdate : this.state.startDate,
      enddate : this.state.endDate,
      hour: 17,
      quantity : this.refs.quantity.value,
      price: this.refs.price.value,
      minPrice: this.refs.minPrice.value
    };
    this.props.submitListing(itemDetails);
  }

  render() {
    return (
      <form role="form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" ref="name" className="form-group col-md-4"/>
        </div>

        <div className="form-group">
          <label>Quantity</label>
          <input type="text" ref="quantity" className="form-group col-md-4"/>
        </div>

        <div className="form-group">
          <DatePicker
            placeholderText="Start date"
            selected={this.state.startDate}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this._startDate.bind(this)} />

          <DatePicker
            placeholderText="End date"
            selected={this.state.endDate}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this._endDate.bind(this)} />
          </div>

        <SelectField value={this.state.value} onChange={this._handleChange.bind(this)}>
          <MenuItem value={2} primaryText="Art"/>
          <MenuItem value={1} primaryText="Collectibles"/>
          <MenuItem value={3} primaryText="Clothing"/>
          <MenuItem value={4} primaryText="Entertainment"/>
          <MenuItem value={5} primaryText="Jewelry"/>
          <MenuItem value={6} primaryText="Travel"/>
        </SelectField>

        <div className="form-group">
          <label>Price</label>
          <input type="text" ref="price" className="form-group col-md-2"/>
        </div>

        <div className="form-group">
          <label>Minimum Sales Price</label>
          <input type="text" ref="minPrice" className="form-group col-md-2"/>
        </div>

        <RaisedButton label="List Item" onClick={this.submitForm.bind(this)} ></RaisedButton> 
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    submitListing: function(itemDetails){
      bindActionCreators(postListing(itemDetails), dispatch)
    }
  }
}

export default connect(mapDispatchToProps)(CreateListing);
