import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GameCard from './GameCard'
import ShopCard from './ShopCard';

function Dashboard() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=58f53988e4e5435abcf085d18cffb058&genres=adventure&page_size=4')
      .then(response => response.json())
      .then(data => setGames(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='FrontpageMygames'>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <section className='MygamesGames'>
        <h2>My Games-Library</h2>
      {games.map(game => <GameCard key={game.id} game={game} />)}
      <Link to="/my-games"><button>Go to My Games</button></Link>
      </section>
      
      <section className='MygamesGames'>
        <h2>Game Shop</h2>
      {games.map(game => <ShopCard key={game.id} game={game} />)}
      <Link to="/GameShop"><button>Go to Game Shop</button></Link>
      </section>
    </div>
  );
}

export default Dashboard;


//TODO: This project made possible by using https://rawg.io/apidocs - attribution-link to API