export default function PlatformSort({ onSort, games }) {
    const platforms = [...new Set(games.map((game) => game.platform))];
  
    return (
      <select
        className="border rounded p-2 my-4"
        onChange={(e) => onSort(e.target.value)}
      >
        <option value="">Sort by Platform</option>
        {platforms.map((platform) => (
          <option key={platform} value={platform}>{platform}</option>
        ))}
      </select>
    );
  }
  