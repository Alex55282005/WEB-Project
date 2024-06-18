import "../styles/footer-catalog.css";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { API_URL } from "../constants/constants";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SubCat(props) {
    const {receivedState}  = props; 
    const [sub_cat, setSubCatrgories] = useState([]);

    const getSub = async () => {
        let {data} = await  axios.get(`https://localhost:9999/api/SubCategories`, {headers:{
            "Content-Type": "application/json"
        }});
        setSubCatrgories(data)
    }
    

    
    useEffect(()=>{
        getSub();
    }, []);
    const navigate = useNavigate();

    const goTo = (e) =>{
        let idName = e.target.name;
        navigate ("/catalog", {state: {id:idName}});
    }

    function SubCategory(props) {
        const {sub1} = props;
        if (sub1.id_category == receivedState.id) {
            
            return <div className="a-link-cont">
            <a href="" name={sub1.id} onClick={goTo}>{sub1.name}</a>
        </div>
        }else{
            return false;
        }
    }

    return <div>
        {
            sub_cat.map((sub)=>{
                return <SubCategory sub1={sub}/>
            })
        }
    </div>;
}

export default SubCat;