import Header from "../scripts/header";
import Footer from "../scripts/footer";
import DefImg from "../resources/logos/profile-def.jpg";
import ChangeuserData from "./changeData";
import "../styles/profile.css";
import Profile from "./profile";
import { useEffect, useState } from "react";
import axios from "axios";

function LoginForm({ updateState }) {
    const [isLogin, setLogin] = useState(false);
    const [isLogined, setLogined] = useState(false);

    const handleChangeState = () => {
        updateState(true);
    }

    function reloadPage() {
        window.location.reload(true);
    }

    const sendPostRequest = async (user) => {
        try {
          const response = await axios.post('https://127.0.0.1:9999/api/Users/',user, {
            headers:{
                'Content-Type': 'application/json'
            }
        });
          localStorage.setItem("user", JSON.stringify(response.data));
          reloadPage();
          handleChangeState();
        } catch (error) {
        }
    };

    const sendGetRequest = async (user) => {
        try {
          const response = await axios.get(`https://127.0.0.1:9999/api/Users/login`, {
            params:{
                "email": user.email,
                "password": user.password
            },  
            headers:{
                'Content-Type': 'application/json'
            }
        });
          localStorage.setItem("user", JSON.stringify(response.data));
          reloadPage();
          handleChangeState();
        } catch (error) {
        }
    };
    

    function registerUser(e) {
        e.preventDefault();
        if (!isLogin) {
            const user = {
                name : e.target[0].value,
                surname: e.target[1].value,
                phone: e.target[4].value,
                email: e.target[3].value,
                password: e.target[2].value
            }
            sendPostRequest(user)
        }else if (isLogin) {
            const user = {
                password: e.target[1].value,
                email: e.target[0].value,
            }
            sendGetRequest(user)
        }
    }

    

    return (
        <div className="loginform">
            <div>
                    <button
                        className="typeFormBtn"
                        onClick={() => setLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className="typeFormBtn"
                        onClick={() => setLogin(false)}
                    >
                        Registration
                    </button>
                </div>
            <form id="loginform" onSubmit={registerUser}>
                {!isLogin ? (
                    <div>
                        <input name="name" type="text" placeholder="Enter your name" />
                        <input name="surname" type="text" placeholder="Enter your surname" />
                        <input name="password" type="password" placeholder="Enter your password" />
                        <input name="email" type="email" placeholder="Enter your email" />
                        <input name="phone" type="tel" placeholder="Enter your phone number" />
                        <input type="submit" value="Register" />
                    </div>
                ) : (
                    <div>
                        <input type="email" placeholder="Enter your email" />
                        <input type="password" placeholder="Enter your password" />
                        <input type="submit" value="Login" />
                    </div>
                )}
            </form>
        </div>
    );
}

export default LoginForm;
