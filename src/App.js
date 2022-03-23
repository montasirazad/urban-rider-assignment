import { useState } from 'react';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import NavBar from './components/NavBar/NavBar';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    name:'',
    email:'',
    image:'',
    isLoggedIn:false
  })
 
  return (
    <UserContext.Provider value={[user,setUser]} >
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<LogIn />} />


      </Routes>
    </UserContext.Provider>
  );
}

export default App;
