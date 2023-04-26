import React from 'react';

const GameCard = ({ game })=> {
    return (
<div>
<article>
<img src={game.background_image} alt={game.name} />
<h3>{game.name}</h3>
<p>{game.genres.map(genre => genre.name).join(', ')}</p>
</article>
</div>
  );
}

export default GameCard;