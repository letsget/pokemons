import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPokemons } from '../../actions/app';
import { Container, Grid } from 'semantic-ui-react';
import Header from '../../components/Header';
import { PokemonsList } from '../../components/PokemonsList';
import Pagination from '../../components/Pagination';

const PokemonsPage = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(({ app: { pokemons } }) => pokemons);
  const [activePage, setActivePage] = useState(1);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
  };

  const handlePageChange = (e, { activePage }) => {
    setActivePage(activePage);
  };

  useEffect(() => {
    loadPokemons(dispatch, activePage);
  }, [dispatch, activePage]);

  return (
    <Container>
      <Header handleLogout={handleLogout} />
      <Grid doubling columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Grid doubling columns={4}>
              {pokemons && <PokemonsList pokemons={pokemons} />}
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid textAlign="center" columns={1}>
            <Grid.Column>
              <Pagination
                activePage={activePage}
                onPageChange={handlePageChange}
              />
            </Grid.Column>
          </Grid>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export { PokemonsPage };
