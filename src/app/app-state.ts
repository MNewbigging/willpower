import { getPath } from "../get-path";

export class AppState {
  private track = new Audio(getPath("Willpower-v2.mp3"));

  startAudio() {
    this.track.play();
  }
}

export const appState = new AppState();
