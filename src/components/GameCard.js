import React from 'react';

const GameCard = ({ game })=> {
    return (
<div>
<article>
<img src={game.Poster} alt={game.Title} />
<h3>{game.Title}</h3>
<p className='CardType'>Type: {game.Type}</p>
</article>
</div>
  );
}

export default GameCard;