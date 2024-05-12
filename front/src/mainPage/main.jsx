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
                        <h2 className='main-h2'>We sell details for the following cars:</h2>
                    </div>
                    {/* <ModelsMain/> */}
                </div>
                <div className='main-block'>
                    <div>
                        <h2 className='main-h2'>Our advantages</h2>
                    </div>
                    <div className='adv-block-cont'>
                        <div className="advantage-block">
                            <div className='logo-cont'>
                                <img src={DeliverImg} alt="" />
                            </div>
                            <div className='adv-text-cont'>
                                <p>Convenient delivery to any part of the country without prepayment</p>
                            </div>
                        </div>
                        <div className="advantage-block">
                            <div className='logo-cont'>
                                <img src={SecureImg} alt="" />
                            </div>
                            <div className='adv-text-cont'>
                                <p>Return/exchange guarantee in case of incorrect selection</p>
                            </div>
                        </div>
                        <div className="advantage-block">
                            <div className='logo-cont'>
                                <img src={GearImg} alt="" />
                            </div>
                            <div className='adv-text-cont'>
                                <p>Huge assortment: more than 500,000 details and auto goods</p>
                            </div>
                        </div>
                        <div className="advantage-block">
                            <div className='logo-cont'>
                                <img src={CallImg} alt="" />
                            </div>
                            <div className='adv-text-cont'>
                                <p>Answering calls: Mon-Sat from 9:00 a.m. to 7:00 p.m</p>
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