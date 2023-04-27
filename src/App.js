import React from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import MyGames from './components/MyGames';
import Favorites from './components/Favorites';
import Nav from './components/Nav';
import GameDetails from './components/GameDetails';

export default function App() {

  return (
    <>
  <Nav />
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="my-games" element={<MyGames />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="game/:slug" element={<GameDetails />} />
    </Routes>
    </>
  );

}