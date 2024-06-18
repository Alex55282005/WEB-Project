import axios from "axios";
import { API_URL } from "../constants/constants";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import audi from "../resources/logos/mainLogo/audi_logo.png"
import renault from "../resources/logos/mainLogo/renault_logo.png"
import bmw from "../resources/logos/mainLogo/bmw_logo.png"
import honda from "../resources/logos/mainLogo/honda_logo.png"
import citroen from "../resources/logos/mainLogo/citroen_logo.png"
import kia from "../resources/logos/mainLogo/kia_logo.png"
import pegeout from "../resources/logos/mainLogo/pegeout_logo.png"
import ford from "../resources/logos/mainLogo/ford_logo.png"
import huindai from "../resources/logos/mainLogo/huindai_logo.png"
import mercedes from "../resources/logos/mainLogo/mercerdes_logo.png"
import subaru from "../resources/logos/mainLogo/subaru_logo.png"
import toyota from "../resources/logos/mainLogo/toyota_logo.png"


function ModelsMain() {
    const models = [
        {
            id: 1,
            name: "Pegeout",
            img: pegeout
        },
        {
            id: 2,
            name: "Renault",
            img: renault
        },
        {
            id: 3,
            name: "Audi",
            img: audi
        },
        {
            id: 4,
            name: "BMW",
            img: bmw
        },
        {
            id: 5,
            name: "Kia",
            img: kia
        },
        {
            id: 6,
            name: "Mercedes",
            img: mercedes
        },
        {
            id: 7,
            name: "Honda",
            img: honda
        },
        {
            id: 8,
            name: "Citroen",
            img: citroen
        },
        {
            id: 9,
            name: "Huindai",
            img: huindai
        },
        {
            id: 10,
            name: "Subaru",
            img: subaru
        },
        {
            id: 11,
            name: "Ford",
            img: ford
        },
        {
            id: 12,
            name: "Toyota",
            img: toyota
        }
    ];

    const navigate = useNavigate();

    const goTo = (e) =>{
        let idName = e.target.id;
        navigate ("/catalog");
    }

    return(
        <div className='all-brands-cont'>
            {models.map((model) => (
                <div className="brand-block">
                    <div className='brand-logo-cont'>
                        <img src={model.img} alt="" className="main-table-logos"/>
                    </div>
                    <div className='brand-name-cont'>
                        <p id={model.name} onClick={goTo}>{model.name}</p>
                    </div>
                </div>
            ))}
        </div>
        
    );

}

export default ModelsMain;