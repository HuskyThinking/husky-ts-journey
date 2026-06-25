import { NavLink, Outlet, useNavigate } from 'react-router';
import About from './components/About';
import Home from './components/Home';
import { use, useState } from 'react';

function App() {

  const navigate = useNavigate();

  return (
    <>
      <button type='button' onClick={() => navigate('/')}>Go Home</button>
      <br />
      <button type='button' onClick={() => navigate('/about')}>Go About</button>
      {/* <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/about">About</NavLink> */}
      <Outlet />
    </>
  );
}
export default App;
