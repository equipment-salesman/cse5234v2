import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentEntry = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    navigate('/purchase/ShippingEntry', { state: { order: location.state.order } });
  };

  const handleInputChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    switch (name) {
      case 'cardholder':
        location.state.order.card_holder_name = value;
        break;
      case 'creditcard':
        location.state.order.credit_card_number = value;
        break;
      case 'expiration':
        location.state.order.expir_date = value;
        break;
      case 'ccv':
        location.state.order.ccvCode = value;
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h3>Enter your payment information:</h3>
        </div>
        <div className="card-body">
          <h4>
            Your order:
            <br />
            Product 1: {location.state.order.buyQuantity[0]} Product 2: {location.state.order.buyQuantity[1]}
          </h4>

          <form onSubmit={submitForm}>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"></span>
              {/* Cardholder Name */}
              <input
                type="text"
                className="form-control"
                placeholder="Cardholder"
                aria-label="Cardholder"
                aria-describedby="basic-addon1"
                name="cardholder"
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Credit Card Number */}
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Credit Card Number"
                aria-label="Credit Card Number"
                aria-describedby="basic-addon1"
                name="creditcard"
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Expiration Date */}
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Expiration Date (MM/YY)"
                aria-label="Expiration Date"
                aria-describedby="basic-addon1"
                name="expiration"
                onChange={handleInputChange}
                required
              />
            </div>

            {/* CVV */}
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"></span>
              <input
                type="text"
                className="form-control"
                placeholder="CVV"
                aria-label="CVV"
                aria-describedby="basic-addon1"
                name="ccv"
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">Next</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentEntry;
