import React, { useState, useEffect } from 'react';
import GameCard from './GameCard'


function MyGames() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=58f53988e4e5435abcf085d18cffb058&genres=adventure&page_size=20')
      .then(response => response.json())
      .then(data => setGames(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='FrontpageMygames'>
      <section className='MygamesGames'>
      <h1>My Games</h1>
      {games.map(game => <GameCard key={game.id} game={game} />)}
      </section>
    </div>
  );
}

export default MyGames;