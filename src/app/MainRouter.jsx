import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { Preloader } from '../components/Preloader';

import { PrivateRoute } from './PrivateRouter';
import { NotLoggedRoute } from './NotLoggedRoute';
import TemporaryPasswordPage from '../pages/TemporaryPasswordPage';
import { PokemonsPage } from '../pages/PokemonsPage';
import PokemonInfoPage from '../pages/PokemonInfoPage';

const MainRouter = () => {
  const isLoading = useSelector(({ app: { isLoading } }) => isLoading);

  return (
    <>
      <Switch>
        <NotLoggedRoute exact path="/" component={LoginPage} />
        <NotLoggedRoute
          path="/confirm-code"
          component={TemporaryPasswordPage}
        />
        <PrivateRoute path="/pokemons" component={PokemonsPage} />
        <PrivateRoute path="/pokemons-info/:id" component={PokemonInfoPage} />
        <Route component={NotFoundPage} />
      </Switch>
      {isLoading && <Preloader />}
    </>
  );
};

export { MainRouter };
