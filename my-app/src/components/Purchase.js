import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Purchase = () => {

    const location = useLocation();
    const navigate = useNavigate();

    //order is the value and setOrder is a function to update the value
    const [order, setOrder] = useState({
        buyQuantity: [0,0,0,0,0], credit_card_number: '', expir_date: '', cvvCode: '', 
        card_holder_name: '', address_1: '', address_2: '', city: '', state: '', zip: '',
    });
    
    const handleSubmit = (e) => {
        order.buyQuantity[e.currentTarget.value] += 1;
        navigate('/purchase/paymentEntry', {state: {order: order}})
    }

    return (
        <div className="container overflow-auto">
            <div className="container mt-2">
                <div className="row d-flex justify-content-center gap-2">
                    <div className="col-sm-5 d-flex border p-3">
                        <img className="col-sm-6" src={require("../images/leopard.JPG")} alt="Leopard 2 Tank"></img>
                        <div className="p-3 align-items-center w-100">
                            <h4>
                                Leopard 2 Tank
                            </h4>
                            <p>
                                Cool Tank. Big Tank.
                            </p>
                            <button type="button" value={0} className="btn btn-primary mt-4" onClick={handleSubmit}>Purchase</button>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center gap-2">
                    <div className="col-sm-5 d-flex border p-3">
                        <img className="col-sm-6" src={require("../images/blackbird.jpg")} alt="Blackbird"></img>
                        <div className="p-3 align-items-center w-100">
                            <h4>
                                Lockheed SR-71 Blackbird
                            </h4>
                            <p>
                                Fastest plane
                            </p>
                            <button type="button" value={1} className="btn btn-primary mt-4" onClick={handleSubmit}>Purchase</button>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center gap-2">
                    <div className="col-sm-5 d-flex border p-3">
                        <img className="col-sm-6" src={require("../images/soltamk6.jpg")} alt="Soltam K6"></img>
                        <div className="p-3 align-items-center w-100">
                            <h4>
                                Soltam K6 Mortar
                            </h4>
                            <p>
                                Mortar with great range and fire rate.
                            </p>
                            <button type="button" value={2} className="btn btn-primary mt-4" onClick={handleSubmit}>Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <ul className="pagination col-2-6 d-flex justify-content-center pt-3">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabindex="-1">Previous</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item active">
                    <a className="page-link" href="#">2 </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
            {/* when form is submitted handleSubmit will trigger and nav to payEntry */}
            {/* <form onSubmit={handleSubmit}>
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
                </form> */}
        </div>
    );
};

export default Purchase;