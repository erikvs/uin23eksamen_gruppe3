import React, { useState, useEffect }  from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import MyGames from './components/MyGames';
import Favorites from './components/Favorites';
import Nav from './components/Nav';
import GameDetails from './components/GameDetails';
import GameShop from './components/GameShop'
import './styles/App.css';
import Footer from './components/Footer';

export default function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <>
  <Nav />
    <Routes>
      <Route index element={<Dashboard favorites={favorites}/>} />
      <Route path="my-games" element={<MyGames />} />
      <Route path="favorites" element={<Favorites favorites={favorites}/>} />
      <Route path="game/:slug" element={<GameDetails favorites={favorites} setFavorites={setFavorites}/>} />
      <Route path="GameShop" element={<GameShop />} />
    </Routes>
  <Footer/>     
    </>  

  );
}