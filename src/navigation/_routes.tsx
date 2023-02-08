import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashPage from './../pages/splash';
import HomePage from './../pages/home';
import Splash from './../components/Splash';

const Navigation = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="splash" element={<SplashPage />} />
      <Route index element={<Splash><HomePage /></Splash>} />
    </Routes>
  </BrowserRouter>;
}

export default Navigation;
