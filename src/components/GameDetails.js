import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import placeHolderImage from "../resources/placeHolderImage.avif"

function GameDetails({ favorites, setFavorites }) {
  const  { slug } = useParams();
  const  [game, setGame] = useState(null);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${slug}?key=58f53988e4e5435abcf085d18cffb058`)
      .then(response => response.json())
      .then(data => setGame(data))
      .catch(error => console.log(error));
  }, [slug]);

  const handleAddToFavorites = () => {
    if (!favorites.some((favorite) => favorite.id === game.id)) {
      setFavorites([...favorites, game]);
  }};

  if (!game) {
    return <div>Loading...</div>;
  }

  //TODO: consider reworking details into a details card?
  return (
    <>
      <div className='FrontpageMygames'>
      <article className='GameDetail'>
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} onError={(e) => {
          e.target.src = placeHolderImage; 
        }}/>
      <div className='ImgCont'>
      <p className='AboutGame'>{game.description_raw}</p>
      </div>
      <p>Metacritic score: {game.metacritic}</p>
      <p>Released: {game.released}</p>
      <p>{game.rating}/5</p>
      <p>Hours played: {game.playtime}</p>
      <p>Last updated: {game.updated}</p>
      <button href={game.website}>Game website</button>
      <button onClick={handleAddToFavorites}>Add to Favorites</button>
      </article>
      </div>
    </>
  );
}

export default GameDetails;