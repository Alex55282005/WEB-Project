import Header from "../scripts/header";
import Footer from "../scripts/footer";
import "../styles/services.css";

function Delivery() {
    return(
        <div className="container">
            <Header/>
            <div className="main-serv">
                <h1>Delivery</h1>
                <p>Delivery or collection can be done in two ways</p>
                <ol>
                    <li>Pickup from our office to the address - Vilnius, J. Jasinskio g.15.</li>
                    <li>By Lithuanian Post delivery (payment for delivery is made by the recipient at the carrier's rates).</li>
                </ol>
            </div>
            <Footer/>
        </div>
    );
}

export default Delivery;