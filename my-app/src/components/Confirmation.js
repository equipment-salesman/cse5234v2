import React from "react";
import {useLocation} from "react-router-dom";

const Confirmation = () => {
    
    let title = "Confirmation";
    
    const location = useLocation();

    
        return (
            <div>
                <div className="card">
                <div className="card-header">
                    <h1>{title}</h1>
                </div>
                <div className="card-body">
                    <h3>Your Order Summary:</h3>
                    <ul>
                        <li>{location.state?.order?.itemName}</li>
                        <li>Quantity: {location.state.order.quantity}</li>
                    </ul>
                    <p>Thank you for your business!</p>
                    <p>Confirmation Number: 9935</p>
                </div>
                </div>
          </div>
    );
};

export default Confirmation;