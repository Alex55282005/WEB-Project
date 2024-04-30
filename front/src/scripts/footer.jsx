import '../styles/footer.css';
import phoneImg from "../resources/logos/footer/smart.png";
import mailImg from "../resources/logos/footer/mail.png";
import locatImg from "../resources/logos/footer/locat.png";

function Footer() {
    return(
        <div className='footer'>
                <div className='top-footer'>
                    <div className='left-side-footer'>
                        <div className='contact-footer-cont'>
                            <div className='foot-logo-cont'>
                                <img src={phoneImg} alt="" />
                            </div>
                            <div className='left-text-cont'>
                                <a href="">+38(066)794-34-55</a> <br /> <a href="">+38(067)139-06-57</a>
                            </div>
                        </div>
                        <div className='contact-footer-cont'>
                            <div className='foot-logo-cont'>
                                <img src={mailImg} alt="" />
                            </div>
                            <div className='left-text-cont'>
                                <p><a href="">info@example.ua</a> - тех підтримка</p>
                            </div>
                        </div>
                        <div className='contact-footer-cont'>
                            <div className='foot-logo-cont'>
                                <img src={locatImg} alt="" />
                            </div>
                            <div className='left-text-cont'>
                                <p>м.Дніпро, вул. Луговська 144а <a href="">переглянути карту проїзду</a></p>
                            </div>
                        </div>
                    </div>
                    <div className='right-side-footer'>
                        <div className='right-block'>
                            <a href="/about-us">Про нас</a>
                            <a href="/history">Історія</a>
                            <a href="/help">Допомога</a>
                        </div>
                        <div className='right-block'>
                            <a href="/delivery">Отримання і оплата</a>
                            <a href="/refound">Повернення та обмін</a>
                            <a href="/zgoda">Угода користувача</a>
                        </div>
                        <div className='right-block'>
                            <a href="distributors">Постачальникам</a>
                            <a href="help">Клієнтська підтримка</a>
                            <a href="/">Бренди</a>
                        </div>  
                    </div>
                </div>
                <div className='bottom-footer'>
                    <div className='bottom-footer-cont'>
                        <p>dm.ua @2023. Всі права захищині</p>
                        <a href="/">Інтернет-магазин автозапчастин</a>
                    </div>
                </div>
            </div>
    );
}

export default Footer;