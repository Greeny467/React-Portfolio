import { useState, useEffect} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import  Navigation from './components/nav';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <header>
        <h1>Dawson Claybrook</h1>
        <div className='container'>
          <Navigation/>
        </div>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <a href='https://github.com/Greeny467'>GitHub: https://github.com/Greeny467</a>
        <a href='https://www.linkedin.com/in/dawson-claybrook-91439129b/'>LinkedIn: https://www.linkedin.com/in/dawson-claybrook-91439129b/</a>
        <a href='https://stackoverflow.com/users/22900618/dawson-claybrook'>Stack Overflow: https://stackoverflow.com/users/22900618/dawson-claybrook</a>
      </footer>
    </>
  )
};

export default App;
