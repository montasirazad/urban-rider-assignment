import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import NavBar from './components/NavBar/NavBar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RideConfirmation from './components/RideConfirmation/RideConfirmation';

export const UserContext = createContext();

function App() {
  const [users, setUsers] = useState({
    name: '',
    email: '',
    image: '',
    isLoggedIn: false
  })



  return (
    <UserContext.Provider value={[users, setUsers]}  >
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />

        <Route path='/ride/confirmation' element={<PrivateRoute>

          <RideConfirmation />

        </PrivateRoute>} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<LogIn />} />


      </Routes>
    </UserContext.Provider>
  );
}

export default App;
