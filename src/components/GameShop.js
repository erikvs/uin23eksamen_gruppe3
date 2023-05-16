import React, { useState, useEffect } from 'react';
import ShopCard from './ShopCard';

function GameShop() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.rawg.io/api/games?key=58f53988e4e5435abcf085d18cffb058&page_size=20&dates=2022-09-01,2023-05-05')
        const data = await response.json();
        setGames(data.results); 
      } 
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='FrontpageMygames'>
      <section className='MygamesGames'>
      <h1>Game Shop</h1>
      <h3>Newest released games</h3>
      {games.map(game => <ShopCard key={game.id} game={game} />)}
      </section>
    </div>
  );
}

export default GameShop;