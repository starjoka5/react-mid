import { Button } from "@nextui-org/react";
import { ErrorBoundary } from "../../shared/errorBoundary";
import { CrashExample } from "./crashExample";

export const RenderProps = () => (
  <ErrorBoundary
    renderOnError={({ error, resetError }) => (
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl">Ocurrio un error: {error?.message}</h2>
        <Button onClick={resetError}>Reset</Button>
      </div>
    )}
  >
    <CrashExample />
  </ErrorBoundary>
);
