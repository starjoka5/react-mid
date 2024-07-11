import { Route } from "wouter";
import { Container } from "./shared/common/container";
import { Navbar } from "./shared/common/navbar";
import { LinkItem } from "./shared/common/linkItem";
import { Compound } from "./components/compound/compound";
import { StateReducer } from "./components/state-reducer/state-reducer";
import { ErrorExample } from "./components/error-boundary/error-example";

function App() {
  return (
    <div className="flex">
      <Navbar>
        <LinkItem link="/compound">Compound</LinkItem>
        <LinkItem link="/error-boundary">Error Boundary</LinkItem>
        <LinkItem link="/control-props">Control Props</LinkItem>
        <LinkItem link="/render-props">Render Props</LinkItem>
        <LinkItem link="/state-reducer">State Reducer</LinkItem>
      </Navbar>
      <Container>
        <Route path="/compound">
          <Compound />
        </Route>
        <Route path="/state-reducer">
          <StateReducer />
        </Route>
        <Route path="/error-boundary">
          <ErrorExample />
        </Route>
      </Container>
    </div>
  );
}

export default App;
