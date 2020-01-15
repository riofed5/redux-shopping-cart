import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

import './App.css';

import Subtotal from './components/Subtotal';
import PickupSavings from './components/PickupSavings';
import TaxFees from './components/TaxFees';
import EstimateTotal from './components/EstimateTotal';
import ItemDetails from './components/ItemDetails';
import PromoCodeDiscount from './components/PromoCode';

import { handleChange } from './actions/promoCodeAction';

class App extends Component {
  constructor(){
    super();
    this.state={
      total:100,
      pickupSavings: -3.85,
      taxes: 0,
      estimatedTotal:0,
      disabledPromoButton: false,
    }
  }
  
  giveDiscountHandler=()=>{
    //Check the inputted promoCode.If true -> disable the button apply promoCode, else -> total price is NOT discounted
    if(this.props.promoCode ==="DISCOUNT"){
      this.setState({
        estimatedTotal: (this.state.estimatedTotal * 0.9)
      },()=>{
        this.setState({disabledPromoButton: true})
      })
    }
  }

  componentDidMount=()=>{
    this.setState({
      taxes: (this.state.total + this.state.pickupSavings)* 0.0875 
    }, ()=>{
      this.setState({
        estimatedTotal: (this.state.total + this.state.pickupSavings + this.state.taxes)
      })
    })
  }

  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.pickupSavings.toFixed(2)} />
          <TaxFees taxes={this.state.taxes.toFixed(2)} />
          <hr /> 
          <EstimateTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
          <hr /> 
          <PromoCodeDiscount 
          giveDiscount={()=>this.giveDiscountHandler()}
          isDisabled={this.state.disabledPromoButton} />
        </Container>
      </div>
    )
  }
}

//Use redux to pass state, action to props => lately using as props.state... and props.handleChange
const mapStateToProps=state=>({
  promoCode: state.promoCode.value
})

const mapDispatchToProps={
  handleChange : handleChange
}

export default connect(mapStateToProps, mapDispatchToProps)(App);