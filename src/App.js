import './App.css';

import Header from './components/Header';
import Main from './components/Main';


import { Link, Route, Switch } from 'react-router-dom';
 
const Nav = () => (
  <nav>
       
      <ul className="nav">
        <li className="active">movies</li>
        <li>celebs & photos</li>
        <li>community</li>
        <li>news</li>
      </ul>
      <div className="user">
        <i className="fa fa-gear user-settings"></i>
        <img className="user-icon" src="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"/>
      </div>
      
    </nav>
);

const LoadingIcon = () => (
  <div className="loading">
    <i className="fa fa-spinner fa-spin"></i>
  </div>
);

const Footer = () => (
  <footer>
    <div>
      <h3>IMDb</h3>
      
      <div className="social-links">
        <i className="fa fa-twitter social-link"></i>
        <i className="fa fa-facebook social-link"></i>
        <i className="fa fa-instagram social-link"></i>
      
      </div>
      <p>1990-2017 imdb.com, inc</p>
    </div>
    <a href="#">show menu</a>
  </footer>
);

function App() {
  return (
    <div>
     
      <div id="wrapper">
          <Nav />
          <Header />
          <Main />
          <LoadingIcon />
          <Footer />
      </div>

    </div>


  );
}

export default App;
