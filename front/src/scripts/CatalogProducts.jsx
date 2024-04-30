import axios from "axios";
import { useState, useEffect } from "react";


function CatalogProducts(props) {


    const [detali, setDetail] = useState([]);   
    const [podName, setName] = useState([]);    
    
    useEffect(()=>{
        let arr = props.state.detaly;
        if (arr) {
            setDetail(arr);
        }
        setName(props.state.pod_name);
    }, [props]);
    


    function Render() {
        const a = useEffect(() => {
            if (detali.length == 0) {
                const timer = setTimeout(() => {
                    return(
                        <div className="errorProd">
                            <h2>Нажаль, такого товару в наявності немає.</h2>
                        </div>
                    );
                }, 1000);
                return () => clearTimeout(timer);
            }
        }, []);
        // console.log(a);
        return a;
    }
    
    return(
        
        <div className="products-cont">
            {detali.map((item)=>{
                return(
                    <div className="prod-cont">
                        <div className="prod-img-cont">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="prod-info-cont">
                            <div className="prod-brand-cont">
                                <p>{item.brand}</p>
                            </div>
                            <div className="prod-name-cont">
                                <p className="prod-article">{item.articul}</p>
                                <p className="prod-name">{item.name}</p>
                            </div>
                        </div>
                        <div className="prod-pay-cont">
                            <div className="prod-price-cont">
                                <p>Ціна: {item.price} грн</p>
                            </div>
                            <div className="prod-buy-cont">
                                <p>Купити</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            <Render/>
        </div>
    );
    
}

export default CatalogProducts;