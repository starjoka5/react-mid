import { Button } from "@nextui-org/react";
import { usePlayer, Action, playingReducer } from "../hooks/use-player";


const isAdmin = false;

export const Player = () => {
  const { tooglePlay, play, pause, isPlaying } = usePlayer({
    reducer: (state, action: Action) => {
      const stateUpdated = playingReducer(state, action);

      if (action.type === "PLAY" && !isAdmin) {
        return {
          isPlaying: false,
        };
      }

      return stateUpdated;
    },
  });

  return (
    <>
      <h1>Video Player</h1>

      <h1>
        Current status: <b>{isPlaying ? "playing" : "paused"}</b>
      </h1>
      <Button onClick={play}>Start</Button>
      <Button onClick={pause}>Pause</Button>
      <Button onClick={tooglePlay}>Toogle</Button>
    </>
  );
};
