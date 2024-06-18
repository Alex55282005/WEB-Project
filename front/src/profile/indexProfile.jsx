import Header from "../scripts/header";
import Footer from "../scripts/footer";
import DefImg from "../resources/logos/profile-def.jpg";
import ChangeuserData from "./changeData";
import "../styles/profile.css";
import Profile from "./profile";
import LoginForm from "./loginform";
import { useEffect, useState } from "react";
import axios from "axios";

function ProfileIndex() {
    const [isLogin, setLogin] = useState(false);
    const [user, setUser] = useState(null);

    const updateState = (val) => {
        setLogin(val);
    }

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
            setLogin(true);
        }
    }, []);
    return (
        <div className="container">
            <ChangeuserData />
            <Header />
            {isLogin ? <Profile data={user} /> : <LoginForm updateState={updateState} />}
            <Footer />
        </div>
        
    );
}

export default ProfileIndex;
