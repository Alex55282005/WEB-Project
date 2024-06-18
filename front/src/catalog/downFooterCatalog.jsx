import "../styles/footer-catalog.css";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { API_URL } from "../constants/constants";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../scripts/header";
import Footer from "../scripts/footer";
import SubCat from "./SubCat"

function DownFooterCatalog() {
    
    const location = useLocation();
    const receivedState = location.state;
    const [items, setItems] = useState([]);      


    const getItems = async () => {
        let {data} = await  axios.get(`https://127.0.0.1:9999/api/Category/section/${receivedState.id}`);
        setItems(data)
    }

    
    useEffect(()=>{
        getItems();
    }, [receivedState]);

    return(
        <div className="container">
            <Header/>
            <div className="main-cont">
                
                <div className="link-main-cont">
                    <div className="title-cont">
                    </div>
                    <div className="strong-cont">
                    {items.map((item)=>{
                            return(
                                <div className="item-cont">
                                    <div className="item-link-cont">
                                        <div className="h3-cont">
                                            <h3>{item.name}</h3>
                                        </div>
                                        <SubCat receivedState={item}/>
                                    </div>
                                </div>
                            );                        
                        })
                    }
                   </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default DownFooterCatalog;