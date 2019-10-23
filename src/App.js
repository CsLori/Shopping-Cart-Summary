import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import SubTotal from './Components/SubTotal/SubTotal';
import Savings from './Components/Savings/Savings';
import Taxfees from './Components/Taxfees/Taxfees';
import EstimatedTotal from './Components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import PromoCode from './Components/PromoCode/PromoCode';
import { connect } from 'react-redux';
import { handleChange } from './actions/promoCodeActions';

class App extends Component {
  state = {
    total: 100,
    savings: -3.85,
    tax: 0,
    estTotal: 100,
    disabledPromoButton: false
  };

  componentDidMount() {
    this.setState(
      {
        tax: (this.state.total + this.state.savings) * 0.2
      },
      function() {
        this.setState({
          estTotal: this.state.total + this.state.savings + this.state.tax
        });
      }
    );
  }

  giveDiscountHandler = () => {
    if (this.props.promoCode === 'DISCOUNT') {
      this.setState(
        {
          estTotal: this.state.estTotal * 0.9
        },
        function() {
          this.setState({
            disabledPromoButton: true
          });
        }
      );
    }
  };
  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
          <Savings price={this.state.savings} />
          <Taxfees tax={this.state.tax.toFixed(2)} />
          <hr />
          <EstimatedTotal total={this.state.estTotal.toFixed(2)} />
          <ItemDetails price={this.state.estTotal.toFixed(2)} />
          <hr />
          <PromoCode
            isDisabled={this.state.disabledPromoButton}
            giveDiscount={() => this.giveDiscountHandler()}
          />
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  { handleChange }
)(App);
