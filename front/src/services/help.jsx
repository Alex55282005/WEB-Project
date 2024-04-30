import Header from "../scripts/header";
import Footer from "../scripts/footer";
import { useEffect } from "react";
import axios from "axios";

function Help() {
       
    function send(){
        const userName = document.querySelector("#name").value;
        const userSurame = document.querySelector("#surname").value;
        const userPhone = document.querySelector("#phone").value;
        const userEmail = document.querySelector("#email").value;
        const userDiscription = document.querySelector("#discription").value;

        


        const userLetter = {
            name: userName,
            surname: userSurame,
            phone: userPhone,
            email: userEmail,
            discription: userDiscription
        };
        let arr = [];
        arr.push(userLetter);
        function sendData() {
            axios.post("https://6595741d04335332df82c4a6.mockapi.io/help/", arr[0]).then((resp)=>{
                    console.log(resp);
            });
        }
        sendData();
        console.log(arr);
        // window.location.reload(true);
    }
    
    

    return(
        <div className="container">
            <Header/>
            <div className="main-serv">
                <form>
                    <div className="form-block">
                        <label>Ім'я</label>
                        <input name="name" type="text" id="name" required/>
                    </div>
                    <div className="form-block">
                        <label>Прізвище</label>
                        <input name="surname" type="text" id="surname" required/>
                    </div>
                    <div className="form-block">
                        <label>Номер телефону</label>
                        <input type="number" name="phone" id="phone" required/>
                    </div>
                    <div className="form-block">
                        <label>Електронна пошта</label>
                        <input name="email" type="email" id="email" required/>
                    </div>
                    <div className="form-block">
                        <label>Опишіть свою проблему</label>
                        <textarea name="discr" id="discription" cols="30" rows="10" required></textarea>
                    </div>
                    <div className="submit-cont">
                        <input type="reset" value="Очистити форму"/>
                        <div id="submit" onClick={send}>
                            Відправити
                        </div>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default Help;