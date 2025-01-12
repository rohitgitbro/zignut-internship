export default function GameCard({ game }) {
    if (!game || !game.title) {
        return null; // Prevent rendering if the game object is incomplete
    }
    return (
        <div className="border p-4 rounded bg-gray-100 shadow-md">
            <h2 className="text-xl font-bold">{game.title}</h2>
            <p><span className="bg-blue-200">Platform :</span> {game.platform}</p>
            <p><span className="bg-red-100">Score :</span> {game.score}</p>
            <p><span className="bg-purple-200">Genre :</span> {game.genre}</p>
            <p>
                <span className="bg-yellow-100">Editor's Choice:{" "} </span>
                <span className={game.editors_choice === "Y" ? "text-green-500" : "text-red-500"}>
                    {game.editors_choice === "Y" ? "Yes" : "No"}
                </span>
            </p>
        </div>
    );
}
