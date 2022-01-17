import './App.css';
import { ChakraProvider, theme } from '@chakra-ui/react'
import ThemeToggler from './components/ThemeToggler';
import LoginForm from './components/LoginForm';
import Trending from './components/Trending';
import Main from './components/Main';
import Header from './components/Header';

import { Link, Route, Switch } from 'react-router-dom';

import './Trending.scss';

 
function App() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <ThemeToggler />
        <Header></Header>
          <Switch>
            <Route path="/login">
              <LoginForm></LoginForm> 
            </Route>  
            <Route path="/trending">
              <Trending></Trending> 
            </Route>
            <Route path="/main">
              <Header></Header> 
            </Route> 

           </Switch>

              

    </ChakraProvider>
    </div>
  );
}

export default App;
