import { Route } from "wouter";
import { Container } from "./shared/common/container";
import { Navbar } from "./shared/common/navbar";
import { LinkItem } from "./shared/common/linkItem";
import Compound from "./components/compound/compound";
import { StateReducer } from "./components/state-reducer/state-reducer";
import { ErrorExample } from "./components/error-boundary/error-example";
import { RenderProps } from "./components/render-props/render-props";
import { PropsGetters } from "./components/props-getter/props-getters";
import { ControlProps } from "./components/control-props/control-props";
//import { TooMuchText } from "./components/tooMuchText";
import { lazy, Suspense } from "react";
import { SuspenseExample } from "./components/suspense/suspense";
import { ConcurrencyExample } from "./components/concurrency/concurrency";
import { ExternalExample } from "./components/external-store/external";

const TooMuchText = lazy(() => import("./components/tooMuchText"));
function App() {
  return (
    <div className="flex">
      <Navbar>
        <LinkItem link="/">Home</LinkItem>
        <LinkItem link="/compound">Compound</LinkItem>
        <LinkItem link="/control-props">Control Props</LinkItem>
        <LinkItem link="/error-boundary">Error Boundary</LinkItem>
        <LinkItem link="/props-getter">Props Getter</LinkItem>
        <LinkItem link="/render-props">Render Props</LinkItem>
        <LinkItem link="/state-reducer">State Reducer</LinkItem>
        <LinkItem link="/long-text">Long text</LinkItem>
        <LinkItem link="/suspense">Suspense</LinkItem>
        <LinkItem link="/concurrency">Concurrency</LinkItem>
        <LinkItem link="/external">External Store</LinkItem>
      </Navbar>
      <Container>
        <Route path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/compound">
          <Compound subtitle={"My sub"} />
        </Route>
        <Route path="/state-reducer">
          <StateReducer />
        </Route>
        <Route path="/control-props">
          <ControlProps />
        </Route>
        <Route path="/error-boundary">
          <ErrorExample />
        </Route>
        <Route path="/props-getter">
          <PropsGetters />
        </Route>
        <Route path="/render-props">
          <RenderProps />
        </Route>
        <Route path="/long-text">
          <Suspense fallback={"Loading..."}>
            <TooMuchText />
          </Suspense>
        </Route>
        <Route path="/suspense">
          <SuspenseExample />
        </Route>
        <Route path="/concurrency">
          <ConcurrencyExample />
        </Route>
        <Route path="/external">
          <ExternalExample />
        </Route>
      </Container>
    </div>
  );
}

export default App;
