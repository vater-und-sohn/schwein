import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import loadable, { LoadableComponent } from '@loadable/component';

type RouteType = {
  path: string;
  component: LoadableComponent<unknown>;
  route?: RouteType;
};

const router: RouteType[] = [
  { path: '/', component: loadable(() => import('@/pages/index')) },
  { path: '*', component: loadable(() => import('@/404')) },
];

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        {router.map((item) => {
          const Component = item.component;

          return (
            <Route
              path={item.path}
              key={item.path}
              exact={item.route ? false : true}
            >
              <Component />
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
