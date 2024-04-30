import Header from "../scripts/header";
import Footer from "../scripts/footer";
import "../styles/services.css";

function History() {
    return(
        <div className="container">
            <Header/>
            <div className="main-serv">
                <h1>Історія</h1>
                <p>Компанія «Майтер деталей» розпочала своє існування у 2006 році в Дніпропетровську. Основним напрямком нашої діяльності є продаж автомобільних запасних частин в Інтернеті.</p>
                <p>Ми згуртована команда професіоналів, тому, зупинивши на нас свій вибір, ви отримаєте якісний і доступний сервіс і обов'язково зверніться до нас ще.</p>
            </div>
            <Footer/>
        </div>
    );
}

export default History;
