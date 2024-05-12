import Header from "../scripts/header";
import Footer from "../scripts/footer";
import "../styles/services.css"

function AboutUs() {
    return(
        <div className="container">
            <Header/>
            <div className="main-serv">
                <h1>About our store</h1>
                <p>We offer a wide range and a large number of original car parts and accessories for cars, as well as products produced by the world's leading manufacturers under license.</p>
                <p>Our customers can order and receive a spare part for their car directly at home (or in another convenient place for you) at an affordable price.</p>
                <p>There is a discount program for wholesale buyers.</p>
                <p>Thank you for visiting our site, we look forward to your emails <a href="info@example.lt">info@example.lt</a> or phone calls <a href="370687673434">+37(068)767-34-34</a>, <a href="370631490643">+37(063)149-06-43</a>.</p>
            </div>
            <Footer/>
        </div>
    );
}

export default AboutUs;