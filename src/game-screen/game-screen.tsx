import { useEffect } from "react";
import "./game-screen.scss";

export function GameScreen() {
  useEffect(() => {
    console.log("game screen mounted");
  }, []);

  return <div className="game-screen"></div>;
}
