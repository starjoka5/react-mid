import { useState, useSyncExternalStore } from "react";
import { now, subscribe } from "./store";
import { Button } from "@nextui-org/react";

export const ExternalExample = () => {
  const [showing, setShowing] = useState(true);

  return (
    <div className="flex flex-col gap-4">
      <Button color="primary" onClick={() => setShowing(!showing)}>Toggle</Button>

      {showing && <Component />}
      <Component />
    </div>
  );
};

function Component() {
  const store = useSyncExternalStore(subscribe, () => now);

  return <p>The time is: {store}</p>;
}
