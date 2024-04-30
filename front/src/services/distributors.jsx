import Header from "../scripts/header";
import Footer from "../scripts/footer";
import "../styles/services.css";

function Distributors() {
    return(
        <div className="container">
            <Header/>
            <div className="main-serv">
                <h1>Постачальникам</h1>
                <p>Свої пропозиції щодо постачання автозапчастин, аксесуарів та ін. ви можете надіслати на електронну пошту <a href="info@example.ua">info@example.ua</a>.</p>
                <p>Ми обов'язково розглянемо всі пропозиції та зв'яжемося з вами.</p>
            </div>
            <Footer/>
        </div>
    );
}

export default Distributors;