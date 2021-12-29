import './App.css';
import { ChakraProvider, theme } from '@chakra-ui/react'
import ThemeToggler from './components/ThemeToggler';
import LoginForm from './components/LoginForm';
import Trending from './components/Trending';
import SampleComponent from "./components/SampleComponent";

import { Link, Route, Switch } from 'react-router-dom';
 
function App() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <ThemeToggler />
        <SampleComponent />
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
