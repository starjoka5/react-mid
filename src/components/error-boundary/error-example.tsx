import { ErrorBoundary } from "../../shared/errorBoundary";
import { CrashExample } from "../render-props/crashExample";

export const ErrorExample = () => {

  return (
    <div className="flex flex-col gap-8">
      <h1>Error Example</h1>
      <ErrorBoundary>
        <CrashExample />
      </ErrorBoundary>
    </div>
  );
};
