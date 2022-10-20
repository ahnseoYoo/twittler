// TODO : useState를 react로 부터 import 합니다. O
import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';
import { imageURL } from './MyPage';



const getRandomNumber = (min, max) => {
  return parseInt(Math.random() * (Number(max) - Number(min) + 2));
};

const Tweets = () => {

  const [userNameInput, setUser] = useState("parkhacker");
  const [messageInput, setMsg] = useState("");
  const [dataInput, setData] = useState(dummyTweets);
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요. O
  let textarea = document.querySelector('textarea');

  const handleButtonClick = (event) => {

    if(messageInput.length === 0) {
      alert('내용을 입력해주세요')
    }
    else {
      const tweet =   {
        id: dataInput.length + 1,
        username: userNameInput,
        picture: dummyTweets.find(item=>item.username === 'parkhacker').picture
        ,
        content: messageInput,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      const newData = [tweet, ...dataInput]
      setData(newData);
  
      dummyTweets.unshift(tweet);
      setMsg('');
      textarea.value = "";
    }
    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.
  };

  const handleChangeUser = (event) => {
    setUser(event.target.value);
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
  };

  const handleChangeMsg = (event) => {
    setMsg(event.target.value);
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src = {userNameInput === "parkhacker" ? imageURL : `https://randomuser.me/api/portraits/lego/${getRandomNumber(
          1,
          9
        )}.jpg`} />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  defaultValue="parkhacker"
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  onChange = {handleChangeUser}
                ></input>
                <textarea placeholder="트윗을 작성하세요" onChange = {handleChangeMsg}
                className="tweetForm__input--message" />

              </div>
              {/* <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {`Total: ${dataInput.length}`}
                </span>
              </div> */}
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              <button className = "tweetForm__submitButton" onClick = {handleButtonClick} 
              >Tweet</button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser"></div>
      <ul className="tweets" >
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
        {dataInput.map((tweet) => <Tweet tweet={tweet}/> )}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
