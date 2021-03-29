import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { RouteType } from '@/interfaces/route';

interface SelfRouteProps {
  router?: RouteType[];
  route?: RouteType;
}

const SelfRoute: React.FC<SelfRouteProps> = ({ router }) => {
  const location = useLocation();

  return (
    <Switch>
      {router?.map((item) => {
        if (item.redirect) {
          return <Redirect path={item.path} to={item.redirect} exact={true} />;
        }
        const Component = item.component;
        return (
          <Route
            key={location.pathname}
            path={item.path}
            exact={item.route ? false : true}
          >
            {Component ? <Component route={item} router={item.route} /> : null}
          </Route>
        );
      })}
    </Switch>
  );
};

export default SelfRoute;
