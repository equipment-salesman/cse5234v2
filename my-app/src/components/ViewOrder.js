import React from "react";
import { useState, useEffect } from "react";
import {useLocation, useNavigate} from "react-router-dom";

const ViewOrder = () => {
    let title = "view order page";
    const location = useLocation();
    const navigate = useNavigate();

    // const submitForm = (e) => {
    //     navigate('/purchase/Confirmation', {state: {order: location.state.order}});
    // }

    const submitForm = async (e) => {
        e.preventDefault(); // prevent the default form submission behavior
        console.log(JSON.stringify(location.state.order))
        try {
            const response = await fetch('https://i8i1po0091.execute-api.us-east-2.amazonaws.com/order-post-v2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(location.state.order) // sending the order as JSON
            });
    
            if (!response.ok) {
                console.log(response.status);
                throw new Error('Network response was not ok');
            }
    
            const responseData = await response.json();
            //console.log("API Response:", responseData); // log the API response
    
            // Navigate only after a successful fetch call
            navigate('/purchase/Confirmation', {state: {order: location.state.order}});
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error.message);
        }
    }
    


    return (
        <div>
            <div class="card">
                <div class="card-header">
                <h3>Your Order Summary</h3>
                </div>
                <div class="card-body">
                <h4>Products:</h4>
                <ul>
                    <li>{location.state.order.itemName}</li>
                    <li>Quantity: {location.state.order.quantity}</li>
                </ul>

                <h4>Payment Information:</h4>
                <p>Credit Card Number: {location.state.order.credit_card_number}</p>

                <h4>Shipping Address:</h4>
                <p>Address 1: {location.state.order.address_1}</p>
                <p>Address 2: {location.state.order.address_2}</p>
                <p>City: {location.state.order.city}</p>
                <p>State: {location.state.order.state}</p>
                <p>Zipcode: {location.state.order.zip}</p>
                </div>
                <div class="card-footer">
                <form onSubmit={submitForm}>
                    <div className="form-check d-flex justify-content-center">
                        <label className="form-check-label mx-1" for="confirmationCheckbox">
                            Everything looks good?
                        </label>
                        <input
                            type="checkbox"
                            className="form-check-input mx-1"
                            id="confirmationCheckbox"
                            required
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">
                    Confirm Order
                    </button>
                </form>
                </div>
            </div>
        </div>

    );
};

export default ViewOrder;