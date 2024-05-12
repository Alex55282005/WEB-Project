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
                        <label>Name</label>
                        <input name="name" type="text" id="name" required/>
                    </div>
                    <div className="form-block">
                        <label>Surname</label>
                        <input name="surname" type="text" id="surname" required/>
                    </div>
                    <div className="form-block">
                        <label>Phone number</label>
                        <input type="number" name="phone" id="phone" required/>
                    </div>
                    <div className="form-block">
                        <label>Email</label>
                        <input name="email" type="email" id="email" required/>
                    </div>
                    <div className="form-block">
                        <label>Describe your problem</label>
                        <textarea name="discr" id="discription" cols="30" rows="10" required></textarea>
                    </div>
                    <div className="submit-cont">
                        <input type="reset" value="Clear the form"/>
                        <div id="submit" onClick={send}>
                            Send
                        </div>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default Help;