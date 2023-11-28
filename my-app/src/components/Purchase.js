import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./purchase.css";

const Purchase = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [products, setProducts] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const [quantities, setQuantities] = useState({});
    const itemsPerPage = 3;
    //order is the value and setOrder is a function to update the value
    const [order, setOrder] = useState({
        itemName: '', quantity: 0, credit_card_number: '', expir_date: '', cvvCode: '', 
        card_holder_name: '', address_1: '', address_2: '', city: '', state: '', zip: '',
    });

    useEffect(() => {
        axios.get(`https://3tcakfimxi.execute-api.us-east-2.amazonaws.com/prod/retrieve${searchTerm ? "?search=" + searchTerm : ''}`)
            .then(response => {
                setProducts(response.data.items)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

    }, [searchTerm]); 


    const handleSubmit = (quantity, product) => {
        order.itemName = product;
        order.quantity = quantity;
        navigate('/purchase/paymentEntry', {state: {order: order}})
    }

    const paginate = (newPage) => {
        setPage(newPage);
        
    }

    const handleQuantityChange = (productId, newQuantity) => {
        setQuantities((prevQuantities) => ({
          ...prevQuantities,
          [productId]: newQuantity,
        }));
      };    

    return (
        <div className="container overflow-auto">
            <div className="my-3"><input type="text" value={searchTerm} placeholder="Search" className="w-40" onChange={(e) => setSearchTerm(e.target.value)}></input></div>
            <div className="container mt-2">
                {products && Object.keys(products)
                .map((itemId) => (
                    <div className="row d-flex justify-content-center gap-2">
                        <div className="col-sm-5 d-flex border p-3">
                            <img className="col-sm-6" src={require(`../images/${products[itemId].image}`)} alt="Leopard 2 Tank"></img>
                            <div className="p-3 align-items-center w-100">
                                <h4>
                                    {products[itemId].title}
                                </h4>
                                <p>
                                    {products[itemId].description}
                                </p>
                                <div className="d-flex justify-content-center mt-4">
                                    <button type="button" value={products[itemId].title} className="btn btn-primary h-auto" onClick={(e) => handleSubmit(quantities[products[itemId].id], e.target.value)}>Purchase</button>
                                    <label for="quantity"></label>
                                    <input type="number" id={"quantity" + products[itemId]} name="quantity" value={quantities[products[itemId].id] || 1} min="1" onChange={(e) => handleQuantityChange(products[itemId].id, e.target.value)} className="quantity mx-1 h-auto"/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
            
            <ul className="pagination col-2-6 d-flex justify-content-center pt-3">
                <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                    <a className="page-link" onClick={() => paginate(page - 1)} tabindex="-1">Previous</a>
                </li>
                {/* {Array.from(Array(Math.ceil(Object.keys(products).length / itemsPerPage)).keys()).map((_, index) => ( */}
                <li key={1} className='page-item active'>
                    <a className="page-link" >1</a>
                </li>
                {/* ))} */}
                <li className='page-item disabled'>
                    <a className="page-link">Next</a>
                </li>
            </ul>
            
        </div>
    );
};

export default Purchase;