import { Link, Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import profileImg from "../resources/logos/header/profile.png"
import cartImg from "../resources/logos/header/cart.png"
import searchImg from "../resources/logos/header/search.png"
import MainLogo from "../resources/logos/mainLogo.png"
import '../styles/header.css';

function Header() {
    const navigate = useNavigate();

    const goTo = (e) =>{
        let idName = e.target.id;
        navigate ("/title-catalog", {state: {id:idName}});
    }
    return(  <div className='header'>
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
                    <p>Cart</p>
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
                <input type="search" placeholder='Which detail are you looking for?' />
                <img src={searchImg} alt="" />
            </div>
        </nav>
    </div>
    <div className='block'>
        <div className='bottom-nav'>
            <div className="top-search-block">
                <p id="TO">Details for technical service</p>
            </div>
            <div className="top-search-block">
                <p id="GS" onClick={goTo}>Braking system</p>
            </div>
            <div className="top-search-block">
                <p id="DV" onClick={goTo}>Engine and Exhaust System</p>
            </div>
            <div className="top-search-block">
                <p id="PDV" onClick={goTo}>Suspension and Steering</p>
            </div>
            <div className="top-search-block">
                <p id="KP" onClick={goTo}>Transmission</p>
            </div>
            <div className="top-search-block">
                <p id="OH" onClick={goTo}>Cooling and heating</p>
            </div>
            <div className="top-search-block">
                <p id="EL" onClick={goTo}>Electricity and lighting</p>
            </div>
            <div className="top-search-block">
                <p id="KZ" onClick={goTo}>Body and components</p>
            </div>
        </div>
    </div>
</div>);
}

export default Header;