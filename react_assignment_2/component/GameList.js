import GameCard from './GameCard';

export default function GameList({ games }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {games.map((game, index) => (
        <GameCard key={index} game={game} />
      ))}
    </div>
  );
}
