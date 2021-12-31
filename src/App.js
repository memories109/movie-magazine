import './App.css';
import { ChakraProvider, theme } from '@chakra-ui/react'
import ThemeToggler from './components/ThemeToggler';
import LoginForm from './components/LoginForm';
import Trending from './components/Trending';
import Swibc from "./components/Swibc";

import { Link, Route, Switch } from 'react-router-dom';
 
function App() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <ThemeToggler />
        <Swibc />
          <Switch>
            <Route path="/login">
              <LoginForm></LoginForm>
            </Route>  
            <Route path="/trending">
              <Trending></Trending>
            </Route>
           </Switch>

              

    </ChakraProvider>
    </div>
  );
}

export default App;
