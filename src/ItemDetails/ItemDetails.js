import React, { Component } from 'react';
import { Button, Collapse, Row, Col, Media } from 'react-bootstrap';

export default class ItemDetails extends Component {
  state = { open: false };
  render() {
    return (
      <>
        <Button
          className="item-details-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details
          {this.state.open === false ? ` + ` : ` - `}
        </Button>
        <Collapse in={this.state.open}>
          <Media>
            <img
              width={40}
              //   height={80}
              className="mr-3"
              src="https://cdn.aldi-digital.co.uk//Actifry-A.jpg?o=%24UOh4UWb4DoRlcB%401NTYwd992DUj&V=W3OC&w=1500&p=2&q=50"
              alt="thumbnail"
            />

            <Media.Body>
              <p>
                Make dinner time stress free and delicious with this low-fat
                Tefal Actifry Original.
              </p>
              <Row className="show-grid">
                <Col md={6}>
                  <strong>{`$${this.props.price}`}</strong>
                  <br />
                  <strong className="price-strike">{`$${this.props.price}`}</strong>
                </Col>
                <Col md={6}>Qty: 1</Col>
              </Row>
            </Media.Body>
          </Media>
        </Collapse>
      </>
    );
  }
}
