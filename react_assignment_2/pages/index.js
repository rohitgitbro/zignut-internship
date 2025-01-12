import { useEffect, useState } from 'react';
import GameList from '../component/GameList';
import SearchBar from '../component/SearchBar';
import PlatformSort from '../component/PlateformSort';

export default function Home() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json')
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        setFilteredGames(data);
      });
  }, []);

  const handleSearch = (query) => {
    const filtered = games.filter((game) => game.title?.toLowerCase().includes(query.toLowerCase()));
    setFilteredGames(filtered);
  };


  const handleSort = (platform) => {
    const sorted = games.filter((game) => game.platform === platform);
    setFilteredGames(sorted);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-4 text-center ">Games Listing</h1>
      <SearchBar onSearch={handleSearch} />
      <PlatformSort onSort={handleSort} games={games} />
      <GameList games={filteredGames} />
    </div>
  );
}
