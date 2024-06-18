import Header from "../scripts/header";
import Footer from "../scripts/footer";
import "../styles/services.css";

function History() {
    return(
        <div className="container">
            <Header/>
            <div className="main-serv">
                <h1>History</h1>
                <p>The company "Maiter details" began its existence in 2006 in Vilnius. The main direction of our activity is the sale of car spare parts on the Internet.</p>
                <p>We are a close-knit team of professionals, therefore, choosing us, you will receive high-quality and affordable service and be sure to contact us again.</p>
            </div>
            <Footer/>
        </div>
    );
}

export default History;
