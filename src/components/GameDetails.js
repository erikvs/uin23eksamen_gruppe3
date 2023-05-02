import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function GameDetails() {
  const  { slug } = useParams();
  const  [game, setGame] = useState(null);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${slug}?key=58f53988e4e5435abcf085d18cffb058`)
      .then(response => response.json())
      .then(data => setGame(data))
      .catch(error => console.log(error));
  }, [slug]);

  if (!game) {
    return <div>Loading...</div>;
  }

  //TODO: Maybe make this a card? - there is also a bunch of more information to get out of the API, but idk if we want all that.
  return (
    <>
      <div className='FrontpageMygames'>
      <article className='GameDetail'>
      <h1>{game.name}</h1>
      <div className='ImgCont'>
      <img src={game.background_image} alt={game.name} />
      <p className='AboutGame'>{game.description_raw}</p>
      </div>
      <p>Metacritic score: {game.metacritic}</p>
      <p>Released: {game.released}</p>
      <p>{game.rating}/5</p>
      <p>Hours played: {game.playtime}</p>
      <p>Last updated: {game.updated}</p>
      <a href={game.website}>Game website</a>
      </article>
      </div>
    </>
  );
}

export default GameDetails;