import '../styles/main.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";
import Header from '../scripts/header';
import ModelsMain from '../scripts/mainModels';
import Footer from '../scripts/footer';
import DeliverImg from "../resources/logos/mainIcons/delivery.png";
import SecureImg from "../resources/logos/mainIcons/secure.png";
import GearImg from "../resources/logos/mainIcons/gear.png";
import CallImg from "../resources/logos/mainIcons/call.png";

function MainScreen() {

    // axios.get('http://localhost:80/users', {params} ).then((res)=>{
    //     console.log(res.data);
    // });

    // axios.post('http://localhost:80/postUser', {
    //     password: 'myPasWord',
    //     name: 'John', 
    //     surname: 'Nevski',
    //     phone: 9, 
    //     email : 'his.email@gmail.com'
    // }).then((res)=>{
    //     console.log(res.data);
    // });

    return(
        <div className="container">
            <Header/>
            <div className='main'>
                <div className='main-block'>
                    <div className='title-block'>
                        <h2 className='main-h2'></h2>
                    </div>
                    <div className='form-cont'>

                    </div>
                </div>
                <div className='main-block'>
                    <div>
                        <h2 className='main-h2'>Ми продаємо запчастини на такі автомобілі:</h2>
                    </div>
                    <ModelsMain/>
                </div>
                <div className='main-block'>
                    <div>
                        <h2 className='main-h2'>Наші переваги</h2>
                    </div>
                    <div className='adv-block-cont'>
                        <div className="advantage-block">
                            <div className='logo-cont'>
                                <img src={DeliverImg} alt="" />
                            </div>
                            <div className='adv-text-cont'>
                                <p>Зручна доставка до будь-якої точки країни без передоплати</p>
                            </div>
                        </div>
                        <div className="advantage-block">
                            <div className='logo-cont'>
                                <img src={SecureImg} alt="" />
                            </div>
                            <div className='adv-text-cont'>
                                <p>Гарантія повернення/обміну при неправильному підборі</p>
                            </div>
                        </div>
                        <div className="advantage-block">
                            <div className='logo-cont'>
                                <img src={GearImg} alt="" />
                            </div>
                            <div className='adv-text-cont'>
                                <p>Величезний асортимент: понад 500 тис. запчастин та автотоварів</p>
                            </div>
                        </div>
                        <div className="advantage-block">
                            <div className='logo-cont'>
                                <img src={CallImg} alt="" />
                            </div>
                            <div className='adv-text-cont'>
                                <p>Відповідь на дзвінки: Пн-Сб з 9:00 до 19:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}


export default MainScreen;