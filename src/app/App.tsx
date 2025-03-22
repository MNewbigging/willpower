import "./app.scss";

import { StartScreen } from "../start-screen/start-screen";
import { GameScreen } from "../game-screen/game-screen";
import { useState } from "react";

export function App() {
  const [started, setStarted] = useState(false);

  const screen = started ? (
    <GameScreen />
  ) : (
    <StartScreen onStart={() => setStarted(true)} />
  );

  return <div className="app">{screen}</div>;
}
