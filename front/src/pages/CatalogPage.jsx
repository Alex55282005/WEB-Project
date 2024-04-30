import axios from "axios";
import "../styles/catalog.css"
import Header from "../scripts/header";
import Footer from "../scripts/footer";
import { API_URL, API1_URL } from "../constants/constants";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import CatalogProducts from "../scripts/CatalogProducts";


const CatalogPage = () =>{
    const location = useLocation();
    const receivedState = location.state;

    const [items, setItems] = useState([]);      

    const getDetails = async () => {
        let {data} = await  axios.get(API_URL+ "categories/");
        data.map(item=>{
            let podCat = item.pod_categories;
            podCat.map((cat)=>{
                if (cat.pod_name == receivedState.name) {
                    return setItems(cat);
                }else{
                    return null;
                }
            });
           
        });
    }    
    const getCar = async () => {
        let {data} = await  axios.get(API1_URL+ "cars/");
        data.map(item=>{
            if (item.brand == receivedState.name) {
                return setItems(item);
            }else{
                return null;
            }
        });
    }    
    useEffect(()=>{
        if (receivedState.id == "car") {
            getCar();
        }else if (receivedState.id == "detal") {
            getDetails();
        }
        
    }, [receivedState]);


    function chek(e) {
        if (e.target.checked == true) {
            console.log(true);
        }else if (e.target.checked == false) {
            console.log(false);
        }
    }
    function visible(e) {
        let elem;
        
        const btn = e.target;

        if (btn.id == "vyrob") {
            elem  = document.querySelector("#check-vyrob-scroll");
        }else if (btn.id == "car") {
            elem  = document.querySelector("#check-brand-scroll");
        }

        if (elem.classList == "check-vyrob-hidden") {
            elem.classList = "check-vyrob-scroll";
            btn.innerHTML = "Згорнути";
        }else if (elem.classList == "check-vyrob-scroll") {
            elem.classList = "check-vyrob-hidden"
            btn.innerHTML = "Переглянути всі";
        }
    }
    
    return(
        <div className="container">
            <Header/>
            <div className="main-catalog-cont">
                <div className="filter-cont">
                    <div className="form">
                        <div>
                            <p id="first-p-filter">ПІДБІР ЗА ПАРАМЕТРАМИ</p>
                        </div>
                        <div className="price-cont-filter">
                            <p>Ціна:</p>
                            <div className="input-price-filter">
                                <label htmlFor="priceMin">Від</label>
                                <input name="priceMin" type="number" min="0" id="priceMin"  className="price-input"/>
                            </div>
                            <div className="input-price-filter">
                                <label htmlFor="priceMax">До</label>
                                <input type="number" name="priceMax" min="0" id="priceMax" className="price-input"/>
                            </div>
                            <button id="btn-ok-filter">OK</button>
                        </div>
                        <div className="check-vyrob-cont">
                            <p>Виробник:</p>
                            <div id="check-vyrob-scroll" className="check-vyrob-hidden">
                                <div className="vyrob-block-filter">
                                    <input type="checkbox" name="" id="" />
                                    <label>Febi</label>
                                </div>
                                <div className="vyrob-block-filter">
                                    <input type="checkbox" name="" id="" />
                                    <label>Febi</label>
                                </div>
                                <div className="vyrob-block-filter">
                                    <input type="checkbox" name="" id="" />
                                    <label>Febi</label>
                                </div>
                                <div className="vyrob-block-filter">
                                    <input type="checkbox" name="" id="" />
                                    <label>Febi</label>
                                </div>
                                <div className="vyrob-block-filter">
                                    <input type="checkbox" name="" id="" />
                                    <label>Febi</label>
                                </div>
                                <div className="vyrob-block-filter">
                                    <input type="checkbox" name="" id="" />
                                    <label>Febi</label>
                                </div>
                                <div className="vyrob-block-filter">
                                    <input type="checkbox" name="" id="" />
                                    <label>Febi</label>
                                </div>
                                <div className="vyrob-block-filter">
                                    <input type="checkbox" name="" id="" />
                                    <label>Febi</label>
                                </div>
                                <div className="vyrob-block-filter">
                                    <input type="checkbox" name="" id="" />
                                    <label>Febi</label>
                                </div>
                                <div className="vyrob-block-filter">
                                    <input type="checkbox" name="" id="" />
                                    <label>Febi</label>
                                </div>
                            </div>
                            <p id="vyrob" onClick={visible} className="chekbtn">Переглянути всі</p>
                        </div>
                        <div className="car-brand-cont-filter">
                            <p>Бренд:</p>
                            <div id="check-brand-scroll" className="check-vyrob-hidden">
                                <div className="vyrob-block-filter">
                                    <input type="checkbox" name="" id="" />
                                    <label>Ranault</label>
                                </div>
                                <div className="vyrob-block-filter">
                                    <input type="checkbox" name="" id="" />
                                    <label>Pegeot</label>
                                </div>
                                <div className="vyrob-block-filter">
                                    <input type="checkbox" name="" id="" />
                                    <label>Citroen</label>
                                </div>
                                <div className="vyrob-block-filter">
                                    <input type="checkbox" name="" id="" />
                                    <label>Nissan</label>
                                </div>
                                <div className="vyrob-block-filter">
                                    <input type="checkbox" name="" id="" />
                                    <label>Toyota</label>
                                </div>
                                <div className="vyrob-block-filter">
                                    <input type="checkbox" name="" id="" />
                                    <label>Porsche</label>
                                </div>
                                <div className="vyrob-block-filter">
                                    <input type="checkbox" name="" id="" />
                                    <label>Ferrari</label>
                                </div>
                                <div className="vyrob-block-filter">
                                    <input type="checkbox" name="" id="" />
                                    <label>Lamborgini</label>
                                </div>
                                <div className="vyrob-block-filter">
                                    <input type="checkbox" name="" id="" />
                                    <label>Hiundai</label>
                                </div>
                                <div className="vyrob-block-filter">
                                    <input type="checkbox" name="" id="" />
                                    <label>Sang Yong</label>
                                </div>
                                
                            </div>
                            <p id="car" onClick={visible} className="chekbtn">Переглянути всі</p>
                        </div>
                    </div>
                </div>                
                <CatalogProducts state={items}/>
            </div>
            <Footer/>
        </div>
    );
};

export default CatalogPage;