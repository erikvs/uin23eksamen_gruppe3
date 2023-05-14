import React from 'react';
import { Link } from 'react-router-dom';
import placeHolderImage from "../resources/placeHolderImage.avif"

function ShopCard ({ game }) {
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
<button href={game.website}>Buy</button>
</article>
</div>
);
}

export default ShopCard;
