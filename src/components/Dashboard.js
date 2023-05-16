import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GameCard from './GameCard'
import ShopCard from './ShopCard';

function Dashboard({favorites}) {

  const [myGames, setMyGames] = useState([]);
  const [shopGames, setShopGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.rawg.io/api/games?key=58f53988e4e5435abcf085d18cffb058&genres=adventure&page_size=4');
        const data = await response.json();
        setMyGames(data.results); 
      } 
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.rawg.io/api/games?key=58f53988e4e5435abcf085d18cffb058&genres=racing&page_size=3');
        const data = await response.json();
        setShopGames(data.results); 
      } 
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='FrontpageMygames'>
      <h1>Dashboard</h1>
      <section className='MygamesGames'>
        <h2>My Games-Library</h2>
      {myGames.map(game => <GameCard key={game.id} game={game} />)}
      <Link to="/my-games"><button>Go to My Games</button></Link>
      </section>
      
      <section className='MygamesGames'>
        <h2>Game Shop</h2>
      {shopGames.map(game => <ShopCard key={game.id} game={game} />)}
      <Link to="/GameShop"><button>Go to Game Shop</button></Link>
      </section>

      <section className='MygamesGames'>
      <h2>My Favorites</h2>
      {favorites && favorites.slice(0,2).map(game => <GameCard key={game.id} game={game} />)}
      <Link to="/Favorites"><button>Go to Favorites</button></Link>
      </section>
    </div>
  );
}

export default Dashboard;