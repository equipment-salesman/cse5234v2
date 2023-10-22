import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

const Purchase = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [products, setProducts] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    //order is the value and setOrder is a function to update the value
    const [order, setOrder] = useState({
        buyQuantity: [0,0,0,0,0], credit_card_number: '', expir_date: '', cvvCode: '', 
        card_holder_name: '', address_1: '', address_2: '', city: '', state: '', zip: '',
    });

    useEffect(() => {
        axios.get('https://3tcakfimxi.execute-api.us-east-2.amazonaws.com/prod/retrieve')
            .then(response => {    
                //setProducts(Object.entries(response.data.items));
                setProducts(response.data.items)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSubmit = (e) => {
        order.buyQuantity[e.currentTarget.value] += 1;
        navigate('/purchase/paymentEntry', {state: {order: order}})
    }
    
    const searchProduct = (e) => {
        var search = e.currentTarget.value;
        
    }

    return (
        <div className="container overflow-auto">
            <div className="my-3"><input type="text" value={searchTerm} placeholder="Search" className="w-40" onChange={(e) => setSearchTerm(e.target.value)}></input></div>
            <div className="container mt-2">
                {products && Object.keys(products).filter(itemId => products[itemId].title.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((itemId) => (
                    <div className="row d-flex justify-content-center gap-2">
                        {console.log("value: " + products[itemId])}
                        <div className="col-sm-5 d-flex border p-3">
                            <img className="col-sm-6" src={require(`../images/${products[itemId].image}`)} alt="Leopard 2 Tank"></img>
                            <div className="p-3 align-items-center w-100">
                                <h4>
                                    {products[itemId].title}
                                    {console.log(typeof(products[itemId].image))}
                                </h4>
                                <p>
                                    {products[itemId].description}
                                </p>
                                <button type="button" value={0} className="btn btn-primary mt-4" onClick={handleSubmit}>Purchase</button>
                            </div>
                        </div>
                    </div>
                ))}
               
            </div>
            
            <ul className="pagination col-2-6 d-flex justify-content-center pt-3">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabindex="-1">Previous</a>
                </li>
                <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item disabled">
                    <a className="page-link" href="#">2 </a>
                </li>
                <li className="page-item disabled">
                    <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item disabled">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
            
        </div>
    );
};

export default Purchase;