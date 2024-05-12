import Header from "../scripts/header";
import Footer from "../scripts/footer";
import "../styles/profile.css";

function ChangeuserData() {

    const closeForm = () => {
        const form = document.querySelector("#pop-up");
        form.className = "pop-up-dis";
    }

    return(
        <div id="pop-up" className="pop-up-dis">
            <div className="pop-up-cont">
                <form action="#">
                    <h2>Change your name</h2>
                    <div className="pop-form-block">
                        <input type="text" placeholder="User name"/>
                    </div>  
                    <div className="pop-form-block">
                        <button className="pop-can-btn" onClick={closeForm}>Cancel</button>
                        <button className="pop-sub-btn">Change</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChangeuserData;