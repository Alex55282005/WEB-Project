import Header from "../scripts/header";
import Footer from "../scripts/footer";

function Refound() {
    return(
        <div className="container">
            <Header/>
            <div className="main-serv">
                <h1>Повернення товару</h1>
                <p>Повернення товару можливо реалізувати тільки за заводскій несправності продукту.</p>
                <p>Якщо деталь була пошкодженна вже після покупки - тоді деталь поверненню або обміну не підлягає.</p>
            </div>
            <Footer/>
        </div>
    );
}

export default Refound;