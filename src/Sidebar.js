import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
// TODO : React Router DOM의 Link 컴포넌트를 import 합니다. O

const Sidebar = () => {
  const navigate = useNavigate();
  function clickBack(){
    navigate(-1);
  }
  function clickFront(){
    navigate(1);
  }
  return (
    <section className="sidebar">
      {/* TODO : Link 컴포넌트를 작성하고, to 속성을 이용하여 경로(path)를 연결합니다. O */}
      <Link to = "/">
        <i className="far fa-comment-dots"/>
      </Link>
      <Link to = "/about">
        <i className="far fa-question-circle"/> 
      </Link>
      <Link to = "/mypage">
        <i className="far fa-user"/>
      </Link>
      <p onClick = {clickBack}>
        <i className="far fa-hand-point-left"/>
      </p>
      <p onClick = {clickFront}>
        <i className="far fa-hand-point-right"/>
      </p>
    </section>
  );
};

export default Sidebar;
