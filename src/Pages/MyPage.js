import React, { useState, useInput } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './MyPage.css';
import dummyTweets from '../static/dummyData';

const MyPage = () => {

  let imageURL = "";

  const [showPopup, setShowPopup] = useState(false); 

  const [currentPicURL, setPicURL] = useState(dummyTweets[1].picture)

  const[currentPic, setPic] = useState(false);
  
  const[defaultPic, setDefaultPic] = useState("https://randomuser.me/api/portraits/lego/5.jpg");
  

  const togglePopup = (event) => {
    setShowPopup(event.target.value);
  };

  const changeURL = (event) => {
    console.log(event.target.value);
    imageURL = event.target.value;
  };

  const changePic = (event) => {
    dummyTweets[1].picture = imageURL;
    setShowPopup(event.target.value);
  }

  const setToDefault = (event) => {
    dummyTweets[1].picture = "https://randomuser.me/api/portraits/lego/5.jpg"
    setShowPopup(event.target.value);
  }







  const filteredTweets = dummyTweets.filter(item => item.username === "parkhacker");


  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={filteredTweets[0].picture} />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              안녕하세요, {filteredTweets[0].username}님!
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
          <div className='myInfo__changePic' onClick={setShowPopup}>Edit my profile</div>
          {showPopup ? (
            <div className="popup">
              <div className="popup_inner">
                <input className = "picURL" type="text" onChange = {changeURL} placeholder = "이미지 주소를 입력하세요."></input>
                <button className="change" onClick={changePic}>
                  Change
                </button>

                <button className="setToDefault" onClick={setToDefault}>
                  default
                </button>

                <button className="close" onClick={togglePopup}>
                  x
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <ul className="tweets__mypage">
        {filteredTweets.map(tweet => <Tweet tweet = {tweet}/>)}
      </ul>
      <Footer />
    </section>
  );
};

export default MyPage;
