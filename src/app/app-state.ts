export class AppState {
  private track = new Audio("/Willpower-v2.mp3");

  startAudio() {
    this.track.play();
  }
}

export const appState = new AppState();
