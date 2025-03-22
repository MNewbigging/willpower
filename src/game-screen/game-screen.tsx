import "./game-screen.scss";

export function GameScreen() {
  return (
    <div className="game-screen">
      <div className="background"></div>
      <div className="typing-area" contentEditable></div>
    </div>
  );
}
