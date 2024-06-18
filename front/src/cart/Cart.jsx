import React from 'react';
import "../styles/cart.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../scripts/header';
import Footer from '../scripts/footer';
import CartCard from './CartCard';
import { useNavigate } from "react-router-dom";

function Cart() {
    const [cards, setCards] = useState([]);
    const navigate = useNavigate();

    const getCards = async (userId) => {
        try {
            const response = await axios.get(`https://localhost:9999/api/Cart/user/${userId}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Группируем товары по артикулу
            const itemsMap = response.data.reduce((acc, item) => {
                if (acc[item.articules]) {
                    acc[item.articules].quantity += 1;
                } else {
                    acc[item.articules] = { ...item, quantity: 1 };
                }
                return acc;
            }, {});

            setCards(Object.values(itemsMap));
        } catch (error) {
            console.error("Error fetching cards:", error);
        }
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user || user.user_id == null) {
            navigate("/profile");
        } else {
            getCards(user.user_id);
        }
    }, [navigate]);

    return (
        <div className="container">
            <Header />
            <div className="main-cart-cont">
                <div className='main-side'>
                    {cards.map((card) => (
                        <CartCard key={card.articules} item={card} />
                    ))}
                </div>
                <div className='payment-side'>
                    <div className='user-form'>
                        <div className='cart-inp-block'>
                            <label htmlFor="name">Name</label>
                            <input type="text" name='name' required />
                        </div>
                        <div className='cart-inp-block'>
                            <label htmlFor="surname">Surname</label>
                            <input type="text" name='surname' required />
                        </div>
                        <div className='cart-inp-block'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' required />
                        </div>
                        <div className='cart-inp-block'>
                            <label htmlFor="phone">Phone number</label>
                            <input type="tel" name='phone' required />
                        </div>
                        <div className='cart-inp-block'>
                            <label htmlFor="address">Shipping address</label>
                            <input type="text" name='address' required />
                        </div>
                    </div>
                    <div className='cart-form'>
                        <div className='cart-inp-block'>
                            <label htmlFor="card">Card number</label>
                            <input type="text" name='card' required />
                        </div>
                        <div className='cart-inp-block'>
                            <div className='pay-inp-block'>
                                <label htmlFor="date">Expires date</label>
                                <input type="month" name='date' required />
                            </div>
                            <div className='pay-inp-block'>
                                <label htmlFor="cvv">CVV</label>
                                <input type="password" name='cvv' maxLength={3} required />
                            </div>
                        </div>
                        <button className='cart-buy-btn'>Buy</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
