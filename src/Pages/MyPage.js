import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './MyPage.css';
import dummyTweets from '../static/dummyData';

export let imageURL = dummyTweets[1].picture;

const MyPage = () => {

  const [showPopup, setShowPopup] = useState(false); 

  // const [currentPicURL, setPicURL] = useState(dummyTweets[1].picture)

  // const[currentPic, setPic] = useState(false);
  
  // const[defaultPic, setDefaultPic] = useState('https://art.pixilart.com/21360253eb15ad9.png');
  

  const togglePopup = (event) => {
    setShowPopup(event.target.value);
  };

  const changeURL = (event) => {
    imageURL = event.target.value;
  };

  const changePic = (event) => {
    dummyTweets[1].picture = imageURL;
    setShowPopup(event.target.value);
  }

  const setToDefault = (event) => {
    imageURL = "https://art.pixilart.com/21360253eb15ad9.png"
    setShowPopup(event.target.value);
  }







    const filteredTweets = dummyTweets.filter(item => {
    item.username === "parkhacker" ? item.picture = imageURL : item.picture = item.picture;
    return item.username === "parkhacker"});


  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={imageURL} />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              안녕하세요, {filteredTweets[0].username}님!
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
          <div className='myInfo__changePic' onClick={setShowPopup}>사진 변경하기</div>
          {showPopup ? (
            <div className="popup">
              <div className="popup_inner">
                <div className="close_wrapper">
                  <button className="close" onClick={togglePopup}>
                    x
                  </button>

                </div>
                <div className="input_wrapper">
                  <input className = "picURL" type="text" onChange = {changeURL} placeholder = "이미지 주소를 입력하세요."></input>
                  
                  <button className="change" onClick={changePic}>
                    바꾸기
                  </button>

                  <button className="setToDefault" onClick={setToDefault}>
                    디폴트 사진
                  </button>
                </div>
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
