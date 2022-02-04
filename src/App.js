import './App.css';
import { ChakraProvider, theme } from '@chakra-ui/react'
import ThemeToggler from './components/ThemeToggler';
import LoginForm from './components/LoginForm';
import Trending from './components/Trending';
// import Main from './components/Main';
import Header from './components/Header';

import { Routes, Route } from 'react-router-dom';

import './Trending.scss';

 
const App = () => {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <ThemeToggler />
        <Header></Header>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/main" element={<Header />} />
          </Routes>

    </ChakraProvider>
    </div>
  )
}

export default App;
