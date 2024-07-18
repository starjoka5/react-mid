import { Route } from "wouter";
import { Container } from "./shared/common/container";
import { Navbar } from "./shared/common/navbar";
import { LinkItem } from "./shared/common/linkItem";
import { Compound } from "./components/compound/compound";
import { StateReducer } from "./components/state-reducer/state-reducer";
import { ErrorExample } from "./components/error-boundary/error-example";
import { RenderProps } from "./components/render-props/render-props";
import { PropsGetters } from "./components/props-getter/props-getters";
import { ControlProps } from "./components/control-props/control-props";
import { Todo } from "./components/todo-list/todo";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Effects } from "./components/effects/effects";

function App() {
  return (
    <div className="flex">
      <Navbar>
        <Accordion>
          <AccordionItem key="1" aria-label="React Mid Part 1" classNames={{
            heading: 'hover:bg-blue-700 px-2 py-0'
          }} title={<h1 className="text-white">React Mid Part 1</h1>}>
            <div className="flex flex-col">
              <LinkItem link="/todo">Todo</LinkItem>
              <LinkItem link="/compound">Compound</LinkItem>
              <LinkItem link="/compound">Compound</LinkItem>
              <LinkItem link="/error-boundary">Error Boundary</LinkItem>
              <LinkItem link="/control-props">Control Props</LinkItem>
              <LinkItem link="/render-props">Render Props</LinkItem>
              <LinkItem link="/props-getter">Props Getter</LinkItem>
              <LinkItem link="/state-reducer">State Reducer</LinkItem>
            </div>
          </AccordionItem>
          <AccordionItem aria-label="React Mid Part 2" classNames={{
            heading: 'hover:bg-blue-700 px-2 py-0'
          }} key="2" title={<h1 className="text-white">React Mid Part 2</h1>}>
            <LinkItem link="/effects">Effects</LinkItem>
          </AccordionItem>
        </Accordion>
      </Navbar>
      <Container>
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="/compound">
          <Compound />
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
        <Route path="/effects">
          <Effects />
        </Route>
      </Container>
    </div>
  );
}

export default App;
