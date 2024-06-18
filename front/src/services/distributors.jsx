import Header from "../scripts/header";
import Footer from "../scripts/footer";
import "../styles/services.css";

function Distributors() {
    return(
        <div className="container">
            <Header/>
            <div className="main-serv">
                <h1>For suppliers</h1>
                <p>Your proposals for the supply of auto parts, accessories, etc. you can send to email <a href="info@example.ua">info@example.lt</a>.</p>
                <p>We will certainly consider all offers and contact you.</p>
            </div>
            <Footer/>
        </div>
    );
}

export default Distributors;