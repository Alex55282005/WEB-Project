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
                                <a href="">+37(068)767-34-34</a> <br /> <a href="">+37(063)149-06-43</a>
                            </div>
                        </div>
                        <div className='contact-footer-cont'>
                            <div className='foot-logo-cont'>
                                <img src={mailImg} alt="" />
                            </div>
                            <div className='left-text-cont'>
                                <p><a href="">info@example.lt</a> - technical support</p>
                            </div>
                        </div>
                        <div className='contact-footer-cont'>
                            <div className='foot-logo-cont'>
                                <img src={locatImg} alt="" />
                            </div>
                            <div className='left-text-cont'>
                                <p>Vilnius, J. Jasinskio g.15 <br /><a href="">view the map</a></p>
                            </div>
                        </div>
                    </div>
                    <div className='right-side-footer'>
                        <div className='right-block'>
                            <a href="/about-us">About us</a>
                            <a href="/history">History</a>
                            <a href="/help">Help</a>
                        </div>
                        <div className='right-block'>
                            <a href="/delivery">Receipt and payment</a>
                            <a href="/refound">Returns and Exchanges</a>
                            <a href="/zgoda">User agreement</a>
                        </div>
                        <div className='right-block'>
                            <a href="distributors">For suppliers</a>
                            <a href="help">Customer support</a>
                            <a href="/">Brands</a>
                        </div>  
                    </div>
                </div>
                <div className='bottom-footer'>
                    <div className='bottom-footer-cont'>
                        <p>dm.lt @2024. All rights reserved</p>
                        <a href="/">Online store of car details</a>
                    </div>
                </div>
            </div>
    );
}

export default Footer;