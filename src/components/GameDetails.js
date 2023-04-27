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
      <article>
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} />
      <p>{game.description_raw}</p>
      <p>{game.metacritic}</p>
      <p>{game.released}</p>
      <p>{game.website}</p>
      <p>{game.rating}</p>
      <p>{game.playtime}</p>
      <p>{game.updated}</p>
      </article>
    </>
  );
}

export default GameDetails;