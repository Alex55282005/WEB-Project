import Header from "../scripts/header";
import Footer from "../scripts/footer";
import "../styles/services.css";

function Delivery() {
    return(
        <div className="container">
            <Header/>
            <div className="main-serv">
                <h1>Доставка</h1>
                <p>Доставка або отримання може бути трьома способами</p>
                <ol>
                    <li>Самовивозом у нас з офісу по адресу - вул. Вулиця , м. Дніпро.</li>
                    <li>Доставкою Нової пошти (сплата за доставку проводиться отримувачем за тарифами перевезника).</li>
                </ol>
            </div>
            <Footer/>
        </div>
    );
}

export default Delivery;