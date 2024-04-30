import "../styles/footer-catalog.css";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { API_URL } from "../constants/constants";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../scripts/header";
import Footer from "../scripts/footer";

function DownFooterCatalog() {
    
    const location = useLocation();
    const receivedState = location.state;

    const [items, setItems] = useState([]);      

    const getItems = async () => {
        let {data} = await  axios.get(API_URL+ "categories/");
        setItems(data)
        data.map(item=>{
            if (item.catalogId == receivedState) {
                console.log(item);
                return setItems(...items, item);
            }else{
                return null;
            }
        });
    }

    
    useEffect(()=>{
        getItems();
    }, []);

    const navigate = useNavigate();

    const goTo = (e) =>{
        let idName = e.target.innerHTML;
        console.log(idName);
        navigate ("/catalog", {state: {id:"detal", name:idName}});
    }

    return(
        <div className="container">
            <Header/>
            <div className="main-cont">
                
                <div className="link-main-cont">
                    <div className="title-cont">
                        {/* <h1>{title}</h1> */}
                    </div>
                    <div className="strong-cont">
                    {items.map((item)=>{
                        if (item.catalogId == receivedState.id) {
                            return(
                                <div className="item-cont">
                                    <div className="item-link-cont">
                                        <div className="h3-cont">
                                            <h3>{item.category_name}</h3>
                                        </div>
                                        {
                                         item.pod_categories.map((item1)=>(
                                            <div className="a-link-cont">
                                                <a href="" onClick={goTo}>{item1.pod_name}</a>
                                            </div>
                                         ))
                                        }
                                    </div>
                                </div>
                            );
                        }
                        
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