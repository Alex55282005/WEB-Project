import Header from "../scripts/header";
import Footer from "../scripts/footer";
import DefImg from "../resources/logos/profile-def.jpg"
import ChangeuserData from "./changeData";
import "../styles/profile.css";

function Profile() {
    return(
        <div className="container">
            <ChangeuserData/>
            <Header/>
            <div className="main-profile">
                <h1>My Profile</h1>
                <div className="prof-cont">
                    <div className="prof-aside">
                        <div className="prof-logo">
                            <img src={DefImg} alt="" />
                        </div>
                        <div className="user-info">
                            <div className="info-block">
                                <h3>Name</h3>
                                <p>User name</p>
                            </div>
                            <div className="info-block">
                                <h3>Surname</h3>
                                <p>User surname</p>
                            </div>
                            <div className="info-block">
                                <h3>Phone</h3>
                                <p>+370680000001</p>
                            </div>
                            <div className="info-block">
                                <h3>Email</h3>
                                <p>example@gmail.com</p>
                            </div>
                            <div className="info-block">
                                <h3>Password</h3>
                                <p>******************</p>
                            </div>
                        </div>
                    </div>
                    <div className="prof-info">
                        <div className="orders-cont">
                            <div className="table">
                                <div className="thead">
                                    <div className="tb-row">
                                        <div className="th-col">Id</div>
                                        <div className="th-col">Detail Name</div>
                                        <div className="th-col">Quantity</div>
                                        <div className="th-col">Price</div>
                                    </div>
                                </div>
                                <div className="tbody">
                                    <div className="tb-row">
                                        <div className="tb-col">Id</div>
                                        <div className="tb-col">Detail Name</div>
                                        <div className="tb-col">Quantity</div>
                                        <div className="tb-col">Price</div>
                                    </div>
                                    <div className="no-orders-cont">
                                        <p>You don't have any order</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="masseges-cont">

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Profile;