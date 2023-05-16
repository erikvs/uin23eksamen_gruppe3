import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import placeHolderImage from "../resources/placeHolderImage.avif"

function GameDetails({ favorites, setFavorites }) {
  const  { slug } = useParams();
  const  [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${slug}?key=58f53988e4e5435abcf085d18cffb058`);
        const data = await response.json();
        setGame(data);
      } 
      catch (error) {
        console.log(error);
      }
    };
    fetchGame();
  }, [slug]);

  const handleAddToFavorites = () => {
    if (!favorites.some((favorite) => favorite.id === game.id)) {
      setFavorites([...favorites, game]);
  }};

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='FrontpageMygames'>
      <article className='GameDetail'>
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.background_image_additional} onError={(e) => {
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
      <a href={game.website}>Game website</a>
      <button onClick={handleAddToFavorites}>Add to Favorites</button>
      </article>
      </div>
    </>
  );
}

export default GameDetails;