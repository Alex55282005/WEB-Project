import Header from "../scripts/header";
import Footer from "../scripts/footer";

function Refound() {
    return(
        <div className="container">
            <Header/>
            <div className="main-serv">
                <h1>Product return</h1>
                <p>It is possible to return the product only in case of a factory defect of the product.</p>
                <p>If the item was damaged already after purchase, then the item cannot be returned or exchanged.</p>
            </div>
            <Footer/>
        </div>
    );
}

export default Refound;