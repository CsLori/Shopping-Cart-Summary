import React, { Component } from 'react';
import {
  Button,
  Collapse,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl
} from 'react-bootstrap';

class PromoCode extends Component {
  state = {
    open: false,
    value: ''
  };
  render() {
    return (
      <>
        <Button
          className="promo-code-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply` : `Hide`} promo code
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Row className="show-grid">
              <Col md={12}>
                <Form>
                  <FormGroup controlId="formInlineName">
                    <FormControl
                      type="text"
                      placeholder="Type your Promo code"
                      value={this.props.promoCode}
                      onChange={this.handleChange}
                    ></FormControl>
                  </FormGroup>
                  <Button
                    block
                    variant="success"
                    className="btn-round"
                    disabled={this.props.isDisabled}
                    onClick={this.props.giveDiscount}
                  >
                    Apply
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </Collapse>
      </>
    );
  }
}

export default PromoCode;
