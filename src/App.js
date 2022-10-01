import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import './App.css';
import ReactDom from 'react-dom';

import Sidebar from './Sidebar';
import Tweets from './Pages/Tweets';
import MyPage from './Pages/MyPage';
import About from './Pages/About';


import './App.css';
import './global-style.css';


const App = (props) => {
  return (
    <BrowserRouter>
    <div>
      <div>
      <Link to = "/">
        <div className = "title__wrapper">
          <div className='Title'>TWITTLER<br/></div>
          <img className = "gif" src = "greenGlobe2.gif" width = "200"/>
        </div>
      </Link>
        <div className="App">
          <main>
            <Sidebar />
            <section className="features">
                <Routes>
                  <Route path = "/" element = {<Tweets />}/>
                  <Route path = "/mypage" element = {<MyPage />} />
                  <Route path = "/about" element = {<About />}/>
                </Routes>
            </section>
          </main>
        </div>
      </div>
    </div>
    </BrowserRouter>

    
  );
  
};


// ! 아래 코드는 수정하지 않습니다.
export default App;
