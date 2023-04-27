import React from 'react';

function ShopCards(props) {
  const { Games } = props;

  return (
    <section className='PosterCard'>
      {Games.map(game => (
        <article key={game.id}>
          <img src={game.Poster} alt={game.Title} />
          <div>
            <h3>{game.Title}</h3>
            <p className='CardYear'>Year: {game.Year}</p>
            <p className='CardType'>Type: {game.Type}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default ShopCards;
