import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Delicon from "../resources/logos/bin.png";
import "../styles/cart.css";

function CartCard({ item }) {
    const [details, setDetails] = useState(null);
    const [loader, setLoader] = useState(false);

    const getDetail = async () => {
        try {
            const response = await axios.get(`https://localhost:9999/api/Detail/SearchByArticul/${item.articules}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setDetails(response.data[0]);
            setLoader(true);
        } catch (error) {
            console.error(`Error fetching details for ${item.articules}:`, error);
        }
    };

    useEffect(() => {
        getDetail();
    }, [item.articules]);

    const deleteCart = async () => {
        try {
            const response = await axios.get(`https://localhost:9999/api/Cart`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const items = response.data.filter(cartItem => cartItem.articules === item.articules);
            if (items.length > 0) {
                await axios.delete(`https://localhost:9999/api/Cart/${items[0].id}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                window.location.reload(true);
            }
        } catch (error) {
            console.error(`Error deleting item:`, error);
        }
    };

    if (!loader) return null;

    return (
        <div className='cart-det-cont'>
            <div className='det-cont'>
                <p>Name: {details.name}</p>
                <p>Brand: {details.brand}</p>
            </div>
            <div className='det-cont'>
                <p>Articul: {details.articul}</p>
                <p>Quantity: {item.quantity}</p>
            </div>
            <div className='det-del-cont'>
                <img src={Delicon} id={details.articul} onClick={deleteCart} alt="Delete" />
            </div>
        </div>
    );
}

export default CartCard;
