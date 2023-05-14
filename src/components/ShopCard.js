import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import placeHolderImage from "../resources/placeHolderImage.avif"

function ShopCard ({ game }) {
  const [website, setWebsite] = useState('');

  useEffect(() => {
    const fetchGameWebsite = () => {
      fetch(`https://api.rawg.io/api/games/${game.id}?key=58f53988e4e5435abcf085d18cffb058`)
        .then(response => response.json())
        .then(data => {
          setWebsite(data.website);
        })
        .catch(error => {
          console.log(error);
        });
    };

    fetchGameWebsite();
  }, [game.id]);

  const handleVisitWebsite = () => {
    window.open(website, '_blank');
  };

  return (
<div className='MygamesGames'>
<article >
<Link to={`/game/${game.slug}`}>
<img src={game.background_image} alt={game.name} onError={(e) => {
          e.target.src = placeHolderImage; 
        }}/>
</Link>
<h3>{game.name}</h3>
<p>{game.genres.map(genre => genre.name).join(', ')}</p>
{website ? (
          <button onClick={handleVisitWebsite}>Buy</button>
        ) : (
          <p>No website available</p>
        )}
</article>
</div>
);
}

export default ShopCard;
