import { Button } from "@nextui-org/react";
import React from "react";

interface RenderOnErrorParams {
  hasError: boolean;
  error?: Error;
  resetError: () => void;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  renderOnError?: ({
    hasError,
    error,
    resetError,
  }: RenderOnErrorParams) => React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = { hasError: false, error: undefined };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  resetError = () => {
    this.setState({ hasError: false });
  };

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  render() {
    if (this.state.hasError && !this.props.renderOnError) {
      return (
        <div>
          <h1>Algo ha salido mal D:</h1>
          <Button onClick={this.resetError}>Reiniciar</Button>
        </div>
      );
    }

    if (this.state.hasError && this.props.renderOnError) {
      return this.props.renderOnError({
        error: this.state.error,
        hasError: this.state.hasError,
        resetError: this.resetError,
      });
    }

    return this.props.children;
  }
}
