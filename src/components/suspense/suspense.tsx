import { Suspense } from "react";
import { CountryList } from "./countryList";
import { ErrorBoundary } from "../../shared/errorBoundary";
import { Button } from "@nextui-org/react";

export const SuspenseExample = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-4">Countries</h1>
      <div>
        <ErrorBoundary
          renderOnError={({ error,resetError }) => {
            return <div className="flex flex-col gap-4">
              <h2 className="text-4xl">Ocurrio un error: {error?.message}</h2>
              <Button onClick={resetError}>Reset</Button>
            </div>;
          }}
        >
          <Suspense fallback={"Loading..."}>
            <CountryList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
