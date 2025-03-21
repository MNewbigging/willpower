import { appState } from "../app/app-state";
import "./start-screen.scss";

interface StartScreenProps {
  onStart: () => void;
}

/**
 * In order to play audio, there must first be a user interaction. So, we have a screen where the user must hit a start button.
 */
export function StartScreen({ onStart }: StartScreenProps) {
  const start = () => {
    // Perform any game setup
    appState.startAudio();
    // Tell parent it can re-render and draw the game screen now
    onStart();
  };

  return (
    <div className="start-screen">
      <div className="start-button" onClick={start}>
        Start
      </div>
    </div>
  );
}
