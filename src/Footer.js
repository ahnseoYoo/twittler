import React from 'react';
import dummyTweets from './static/dummyData';

const Footer = () => {
  return (
    <footer className = "footer">
      <div>
      {`Total tweet count: ${dummyTweets.length}`}
      </div>
    </footer>
  );
};
// TODO : Footer 함수 컴포넌트를 작성합니다. 시멘틱 요소 footer가 포함되어야 합니다O.

export default Footer;
