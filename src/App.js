import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import SubTotal from './SubTotal/SubTotal';
import Savings from './Savings/Savings';
import Taxfees from './Taxfees/Taxfees';
import EstimatedTotal from './EstimatedTotal/EstimatedTotal';
import ItemDetails from './ItemDetails/ItemDetails';
import PromoCode from './PromoCode/PromoCode';

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
        tax: (this.state.total + this.state.savings) * 0.8
      },
      function() {
        this.setState({
          estTotal: this.state.total + this.state.savings + this.state.tax
        });
      }
    );
  }

  giveDiscountHandler = () => {
    this.setState({
      estTotal: this.state.estTotal * 0.9
    });
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
export default App;
