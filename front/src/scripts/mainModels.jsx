import axios from "axios";
import { API_URL } from "../constants/constants";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function ModelsMain() {
    const [models, setModels] = useState([]);        

    const getModels = async () => {
        const {data} = await  axios.get(API_URL+ "logos/");
        setModels(data);
    }
    useEffect(()=>{
        getModels();
    }, []);

    const navigate = useNavigate();

    const goTo = (e) =>{
        let idName = e.target.id;
        navigate ("/catalog", {state: {id:"car", name:idName}});
    }

    return(
        <div className='all-brands-cont'>
            {models.map((model) => (
                <div className="brand-block">
                    <div className='brand-logo-cont'>
                        <img src={"data:image/jpeg;base64," +model.code} alt="" className="main-table-logos"/>
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