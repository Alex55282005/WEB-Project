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
                <a href="/about-us">Про нас</a>
                <a href="/delivery">Отримання й оплата</a>
                <a href="/refound">Повернення та обмін</a>
                <a href="/distributors">Постачальникам</a>
            </div>
            <div className='personal-cont'>
                <div className='profile-cont'>
                    <img src={profileImg} alt="" />
                    <a href="">Особистий кабінет</a>
                </div>
                <div className='cart-cont'>
                    <img src={cartImg} alt="" />
                    <p>Кошик</p>
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
                <a href="">+38(066)794-34-55</a>
                <a href="">+38(067)139-06-57</a>
            </div>
            <div className='nav-search-cont'>
                <input type="search" placeholder='Яку саме запчастину шукаєте?' />
                <img src={searchImg} alt="" />
            </div>
        </nav>
    </div>
    <div className='block'>
        <div className='bottom-nav'>
            <div className="top-search-block">
                <p id="TO">Запчастини для ТО</p>
            </div>
            <div className="top-search-block">
                <p id="GS" onClick={goTo}>Гальмівна система</p>
            </div>
            <div className="top-search-block">
                <p id="DV" onClick={goTo}>Двигун і Система вихлопу</p>
            </div>
            <div className="top-search-block">
                <p id="PDV" onClick={goTo}>Підвіска та Кермове</p>
            </div>
            <div className="top-search-block">
                <p id="KP" onClick={goTo}>Коробка передач</p>
            </div>
            <div className="top-search-block">
                <p id="OH" onClick={goTo}>Охолодження та опалювання</p>
            </div>
            <div className="top-search-block">
                <p id="EL" onClick={goTo}>Електрика та освітлення</p>
            </div>
            <div className="top-search-block">
                <p id="KZ" onClick={goTo}>Кузов і складові</p>
            </div>
        </div>
    </div>
</div>);
}

export default Header;