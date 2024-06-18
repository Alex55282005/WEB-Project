import React from 'react';
import DefImg from "../resources/logos/profile-def.jpg";
import "../styles/profile.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Send from "../resources/logos/send.png"

function Profile({ data }) {
    const [messages, setMessages] = useState([]);

    function handleOrderState(data) {
        setMessages(data)
    }

    const getMessages = async () => {

        const userId = JSON.parse(localStorage.getItem("user")).user_id;

        try {
          const response = await axios.get(`https://localhost:9999/api/UserMessages/user/${userId}`, { 
            headers:{
                'Content-Type': 'application/json'
            }
        });
          handleOrderState(response.data);
          

        } catch (error) {
        }
    };

    useEffect(()=>{
        getMessages();
    },[1])
    const postNewMessage = async (text) => {
        const userId = JSON.parse(localStorage.getItem("user")).user_id;
        try {
            const response = await axios.post(`https://localhost:9999/api/UserMessages`, {
                "id": 0,
                "user_id": userId,
                "text": text,
                "status": "unread"
            } ,{ 
              headers:{
                  'Content-Type': 'application/json'
              }
          });
          } catch (error) {
          }
          window.location.reload(true);
    }

    function sendnewletter() {
        const letter = document.querySelector("#newuserletter").value;
        postNewMessage(letter);
    }

    function readMessage(e) {
        const cont = e.target;
        if (cont.className == "mess-text") {
            cont.className = "mess-text-read"
        }else if (cont.className == "mess-text-read") {
            cont.className = "mess-text"
        }
    }
    return (
        <div className="main-profile">
            <h1>My Profile</h1>
            <div className="prof-cont">
                <div className="prof-aside">
                    <div className="prof-logo">
                        <img src={DefImg} alt="Profile" />
                    </div>
                    <div className="user-info">
                        <div className="info-block">
                            <h3>Name</h3>
                            <p>{data.name}</p>
                        </div>
                        <div className="info-block">
                            <h3>Surname</h3>
                            <p>{data.surname}</p>
                        </div>
                        <div className="info-block">
                            <h3>Phone</h3>
                            <p>{data.phone}</p>
                        </div>
                        <div className="info-block">
                            <h3>Email</h3>
                            <p>{data.email}</p>
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
                                    <div className="th-col">Detail Articul</div>
                                    <div className="th-col">Price</div>
                                </div>
                            </div>
                            <div className="tbody">
                            </div>
                        </div>
                    </div>
                    <div className="messages-cont">
                        <div>
                            <h3 className='text-center'>Messages</h3>
                        </div>
                        <div className='mess-block'>
                            {messages.map((mes)=>{
                                return<div className='message-block' >
                                <div className='mess-img'>
                                    <img src={DefImg} alt="" />
                                </div>
                                <div>
                                    <p className='mess-text' onClick={readMessage}>{mes.text}</p>
                                </div>
                            </div>
                            })}
                        </div>
                        <div className='sendNewMes-cont'>
                            <input type="text" id='newuserletter' placeholder='Write your message' />
                            <img src={Send} className='sendBtn' onClick={sendnewletter} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
