/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/Auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
            // eslint-disable-next-line prettier/prettier
            // eslint-disable-next-line react/jsx-indent
            <Redirect to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location }
            }}
            />
          );
      }}
    />
  );
};

export default Route;
