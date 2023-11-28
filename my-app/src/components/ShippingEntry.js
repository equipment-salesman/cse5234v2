import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ShippingEntry = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        e.preventDefault();

        const {name, value} = e.target;
        
        switch (name) {
            case 'address1':
                location.state.order.address_1 = value;
                break;
            case 'address2':
                location.state.order.address_2 = value;
                break;
            case 'city':
                location.state.order.city = value;
                break;
            case 'state':
                location.state.order.state = value;
                break;
            case 'zip':
                location.state.order.zip = value;
                break;
            default:
                break;
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        navigate('/purchase/ViewOrder', {state: {order: location.state.order}});
    }

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
                        {location.state.order.itemName}
                        <br />
                        Quantity: {location.state.order.quantity}
                    </h4>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={submitForm}>
                        {/* Address line 1 */}
                        <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"></span>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Address line 1"
                            aria-label="Address line 1"
                            aria-describedby="basic-addon1"
                            name="address1"
                            onChange={handleInputChange}
                            required
                        />
                        </div>

                        {/* Address line 2 */}
                        <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"></span>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Address line 2"
                            aria-label="Address line 2"
                            aria-describedby="basic-addon1"
                            name="address2"
                            onChange={handleInputChange}
                        />
                        </div>

                        {/* City */}
                        <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"></span>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="City"
                            aria-label="City"
                            aria-describedby="basic-addon1"
                            name="city"
                            onChange={handleInputChange}
                            required
                        />
                        </div>

                        {/* State */}
                        <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"></span>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="State"
                            aria-label="State"
                            aria-describedby="basic-addon1"
                            name="state"
                            onChange={handleInputChange}
                            required
                        />
                        </div>

                        {/* Zipcode */}
                        <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"></span>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Zipcode"
                            aria-label="Zipcode"
                            aria-describedby="basic-addon1"
                            name="zip"
                            onChange={handleInputChange}
                            required
                        />
                        </div>

                        <button type="submit">Next</button>
                    </form>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default ShippingEntry;