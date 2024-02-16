import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handlePlayerTurns() {
    setActivePlayer((currActivePlayer) => (currActivePlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onPlayerTurns={handlePlayerTurns} activePlayerSymbol={activePlayer} />
      </div>
    </main>
  );
}

export default App;
