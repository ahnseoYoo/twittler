import React from 'react';
import dummyTweets from './static/dummyData';

const Footer = () => {
  return (
    <footer className = "footer">
      <div>
        {window.location.href[window.location.href.length-1] === "/" ? //regex 활용은 어떻게 하지?
        `Total tweet count: ${dummyTweets.length}` :
        window.location.href.includes("about") === true ? "Twittler info" :
        `Total tweet count: ${dummyTweets.filter(item =>
          item.username === "parkhacker").length}`}
      </div>
    </footer>
  );
};



// TODO : Footer 함수 컴포넌트를 작성합니다. 시멘틱 요소 footer가 포함되어야 합니다O.

export default Footer;
