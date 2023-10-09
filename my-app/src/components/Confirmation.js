import React from "react";
import {useLocation} from "react-router-dom";

const Confirmation = () => {
    
    let title = "confirmation page";
    
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
                    <li>Product 1: {location.state?.order?.buyQuantity[0]}</li>
                    <li>Product 2: {location.state?.order?.buyQuantity[1]}</li>
                    </ul>
                    <p>Thank you for your business!</p>
                    <p>Confirmation Number: 9935</p>
                </div>
                </div>
          </div>
    );
};

export default Confirmation;