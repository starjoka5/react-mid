import { ErrorBoundary } from "../../shared/errorBoundary";
import { CrashExample } from "../render-props/crashExample";

export const ErrorExample = () => {
  return (
    <>
      <h1>Error Example</h1>
      <ErrorBoundary>
        <CrashExample />
      </ErrorBoundary>
    </>
  );
};
