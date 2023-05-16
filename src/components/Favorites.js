import GameCard from './GameCard'

function Favorites({ favorites }) {
  return (
    <div className='FrontpageMygames'>
      <section className='MygamesGamesFav'>
      <h1>Favorites</h1>
      {favorites?.map(game => <GameCard key={game.id} game={game} />)}
      </section>
    </div>
  );
}

export default Favorites;