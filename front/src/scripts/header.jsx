import { Link, Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import profileImg from "../resources/logos/header/profile.png"
import cartImg from "../resources/logos/header/cart.png"
import searchImg from "../resources/logos/header/search.png"
import MainLogo from "../resources/logos/mainLogo.png"
import '../styles/header.css';
import { useEffect, useState } from "react";
import axios from "axios";

function Header() {
    const navigate = useNavigate();

    const [details, setDetails] = useState([]);

    const goTo = (e) =>{
        let idName = e.target.id;
        navigate ("/title-catalog", { state: { id: idName } });
    }

    const getDetails = async () => {
        try {
            const { data } = await axios.get("https://127.0.0.1:9999/api/Detail", {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setDetails(data);
        } catch (error) {
            console.error("Error fetching cars:", error);
        }
    };

    useEffect(() => {
        getDetails();
    }, []);

    const searchDetails = (e) => {
        let arr = [];
        const val = e.target.value;
        const menu = document.querySelector("#dropdownmenu");

        menu.innerHTML = ""; // Clear the menu before adding new items

        if (val === "") {
            menu.className = "drop"; // Close menu if input is empty
            return;
        }

        for (let i = 0; i < details.length; i++) {
            const elem = details[i];
            const state = elem.name.toLowerCase().includes(val.toLowerCase());
            if (state) {
                arr.push(elem);
            }
        }

        if (arr.length > 0) {
            menu.className = "drop-active";
            arr.forEach((dt) => {
                menu.innerHTML += `
                    <div className="drop-item">
                        <span id="${dt.name}">${dt.name}</span> <span id="${dt.articul}">${dt.articul}</span>
                    </div>
                `;
            });
        } else {
            menu.className = "drop";
        }
    }

    const handleBlur = () => {
        const menu = document.querySelector("#dropdownmenu");
        menu.className = "drop";
    }

    return (
        <div className='header'>
            <div className='block'>
                <nav className='top-nav'>
                    <div className='top-nav-links-cont'>
                        <a href="/about-us">About us</a>
                        <a href="/delivery">Receipt and payment</a>
                        <a href="/refound">Returns and Exchanges</a>
                        <a href="/distributors">For suppliers</a>
                    </div>
                    <div className='personal-cont'>
                        <div className='profile-cont'>
                            <img src={profileImg} alt="" />
                            <a href="/profile">Profile</a>
                        </div>
                        <div className='cart-cont'>
                            <img src={cartImg} alt="" />
                            <a href="/cart">Cart</a>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='block'>
                <nav className='main-nav'>
                    <div className='main-nav-logo'>
                        <Link to={"/"} component={RouterLink} className="Link">
                            <img src={MainLogo} alt="" />
                        </Link>
                    </div>
                    <div className='main-nav-contacts'>
                        <a href="">+37(068)767-34-34</a>
                        <a href="">+37(063)149-06-43</a>
                    </div>
                    <div className='nav-search-cont'>
                        <input type="search" placeholder='Which detail are you looking for?' onChange={searchDetails} onBlur={handleBlur} />
                        <img src={searchImg} alt="" />
                        <div id="dropdownmenu" className="drop"></div>
                    </div>
                </nav>
            </div>
            <div className='block'>
                <div className='bottom-nav'>
                    <div className="top-search-block">
                        <p id="TO">Details for technical service</p>
                    </div>
                    <div className="top-search-block">
                        <p id="BS" onClick={goTo}>Braking system</p>
                    </div>
                    <div className="top-search-block">
                        <p id="ES" onClick={goTo}>Engine and Exhaust System</p>
                    </div>
                    <div className="top-search-block">
                        <p id="SS" onClick={goTo}>Suspension and Steering</p>
                    </div>
                    <div className="top-search-block">
                        <p id="TR" onClick={goTo}>Transmission</p>
                    </div>
                    <div className="top-search-block">
                        <p id="CH" onClick={goTo}>Cooling and heating</p>
                    </div>
                    <div className="top-search-block">
                        <p id="EL" onClick={goTo}>Electricity and lighting</p>
                    </div>
                    <div className="top-search-block">
                        <p id="BD" onClick={goTo}>Body and components</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
