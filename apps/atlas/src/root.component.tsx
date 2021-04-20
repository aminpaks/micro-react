import loadable from '@loadable/component';
import { FC, Fragment } from 'react';
import { RouteComponentProps, Router } from '@reach/router';

const LazySomething = loadable(
  () => import(/* webpackChunkName: "something" */ './something'),
);

const Home: FC<RouteComponentProps> = () => {
  return (
    <div>
      <section>Hello! This is ATLAS Home!</section>
    </div>
  );
};

const RootPath: FC<RouteComponentProps> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

export default function Root(props: { name: string }) {
  console.log({ props });
  return (
    <Router>
      <RootPath path="/atlas">
        <Home default />
        <LazySomething path="something" />
      </RootPath>
    </Router>
  );
}
