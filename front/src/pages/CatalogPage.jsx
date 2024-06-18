import axios from "axios";
import "../styles/catalog.css";
import Header from "../scripts/header";
import Footer from "../scripts/footer";
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback } from "react";
import CarCard from "./CarCard";

const CatalogPage = () => {
    const location = useLocation();
    const receivedState = location.state;

    const [data, setData] = useState([]);
    const [pricedData, setPricedData] = useState([]);
    const [oldData, setOldData] = useState([]);
    const [isLoading, setLoader] = useState(false);
    const [brands, setBrands] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const getCars = async () => {
        try {
            const { data } = await axios.get("https://127.0.0.1:9999/api/Detail", {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setData(data);
            setOldData(data);
            setLoader(true);
            const state = sortBrands(data);
            setBrands(state);
        } catch (error) {
            console.error("Error fetching cars:", error);
        }
    };

    useEffect(() => {
        getCars();
    }, []);

    const sortBrands = (data) => {
        const uniqueBrands = [...new Set(data.map(detail => detail.brand))];
        return uniqueBrands;
    };

    useEffect(() => {
        sortByBrand();
    }, [selectedBrands]);

    const sortByBrand = () => {
        if (selectedBrands.length === 0) {
            setData(pricedData.length ? pricedData : oldData);
        } else {
            const filteredData = (pricedData.length ? pricedData : oldData).filter(
                car => selectedBrands.includes(car.brand)
            );
            setData(filteredData);
        }
        setLoader(true);
    };

    const handleCheck = (e) => {
        const { name, checked } = e.target;
        setSelectedBrands(prevSelectedBrands => {
            if (checked) {
                return [...prevSelectedBrands, name];
            } else {
                return prevSelectedBrands.filter(brand => brand !== name);
            }
        });
    };

    const visible = (e) => {
        const btn = e.target;
        const elem = document.querySelector(`#${btn.id === "vyrob" ? "check-vyrob-scroll" : "check-brand-scroll"}`);

        if (elem.classList.contains("check-vyrob-hidden")) {
            elem.classList.replace("check-vyrob-hidden", "check-vyrob-scroll");
            btn.innerHTML = "Roll Up";
        } else {
            elem.classList.replace("check-vyrob-scroll", "check-vyrob-hidden");
            btn.innerHTML = "View All";
        }
    };

    const sortByPrice = () => {
        const min = document.querySelector("#priceMin").value;
        const max = document.querySelector("#priceMax").value;

        const newData = oldData.filter(datail => {
            return (!min || datail.price >= min) && (!max || datail.price <= max);
        });

        setData(newData);
        setPricedData(newData);
        setBrands(sortBrands(newData));
    };

    return (
        <div className="container">
            <Header />
            <div className="main-catalog-cont">
                <div className="filter-cont">
                    <div className="form">
                        <div>
                            <p id="first-p-filter">SELECTION BY PARAMETERS</p>
                        </div>
                        <div className="price-cont-filter">
                            <p>Price:</p>
                            <div className="input-price-filter">
                                <label htmlFor="priceMin">From</label>
                                <input name="priceMin" type="number" min="0" id="priceMin" className="price-input" />
                            </div>
                            <div className="input-price-filter">
                                <label htmlFor="priceMax">To</label>
                                <input type="number" name="priceMax" min="0" id="priceMax" className="price-input" />
                            </div>
                            <button id="btn-ok-filter" onClick={sortByPrice}>OK</button>
                        </div>
                        <div className="check-vyrob-cont">
                            <p>Brand:</p>
                            <div id="check-vyrob-scroll" className="check-vyrob-hidden">
                                {isLoading ? brands.map((brand, index) => (
                                    <div key={index} className="vyrob-block-filter">
                                        <input type="checkbox" name={brand} onClick={handleCheck} />
                                        <label>{brand}</label>
                                    </div>
                                )) : ""}
                            </div>
                            <p id="vyrob" onClick={visible} className="chekbtn">View all</p>
                        </div>
                    </div>
                </div>
                <div className="car-catalog-container">
                    {isLoading ? data.map((detail, index) => (
                        <CarCard key={index} props={detail} />
                    )) : ""}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CatalogPage;
