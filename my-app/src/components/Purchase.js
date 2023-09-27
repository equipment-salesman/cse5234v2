import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Purchase = () => {
    // order is the value and setOrder is a function to update the value
    const [order, setOrder] = useState({
        buyQuantity: [0,0,0,0,0], credit_card_number: '', expir_date: '', cvvCode: '', 
        card_holder_name: '', address_1: '', address_2: '', city: '', state: '', zip: '',
    
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        navigate('/purchase/paymentEntry', {order: order, setOrder: setOrder});
    }

    console.log('order: ', order);

    return (
        <div>
            {/* when form is submitted handleSubmit will trigger and nav to payEntry */}
            <form onSubmit={handleSubmit}>
                <label>Product 1</label>
                <input
                    type="number"
                    required
                    onChange={(e) =>
                        {order.buyQuantity[0] = e.target.value;}}
                />
                <br/>
                <label>Product 2</label> 
                <input
                    type="number"
                    required
                    onChange={(e) =>
                        {order.buyQuantity[1] = e.target.value;}}
                />
                <br/>
                <button className="button">Pay</button>
            </form>
        </div>
    );
};

export default Purchase;