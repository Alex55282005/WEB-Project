import "../styles/catalog.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CarCard({ props }) {
    const navigate = useNavigate();

    const setCart = async (art) => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user || !user.user_id) {
            navigate("/profile");
            return;
        }

        const userId = user.user_id;

        const card = {
            id: 0,
            user_id: userId,
            articules: art
        };

        try {
            await axios.post(`https://localhost:9999/api/Cart`, card, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    function addToCart(e) {
        setCart(e.target.id);
    }

    return (
        <div className="car-card">
            <div className="car-cat-img" style={{ backgroundImage: `url(${props.image})` }}>
            </div>
            <div className="car-cat-info">
                <div className="car-cat-info-brand">
                    <p>Brand: {props.brand} <br /> Articul: {props.articul}</p>
                </div>
                <p>{props.name}</p>
            </div>
            <div className="car-cat-price">
                <p><b>Price:</b> {props.price} eur</p>
                <button id={props.articul} onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    );
}

export default CarCard;
