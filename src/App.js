import logo from './logo.svg';
import './App.css';
import login from './Components/login';
import {react} from 'react';
import Navbar from './Components/Navbar';
import Carosel from './Components/Carosel';

function App() {
  return (
    <div>

    <Navbar />
    <Carosel />

    <h1>Login</h1>
    <h1>Register</h1>

    </div>
  );
}

export default App;
