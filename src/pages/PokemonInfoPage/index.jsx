import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PokemonInfo from '../../components/PokemonInfo';
import Header from '../../components/Header';
import { Container } from 'semantic-ui-react';
import { loadPokemonById } from '../../actions/app';
import { useParams } from 'react-router-dom';

const PokemonInfoPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pokemonInfo = useSelector(({ app: { pokemonInfo } }) => pokemonInfo);

  useEffect(() => {
    loadPokemonById(dispatch, id);
  }, [dispatch, id]);

  return (
    <Container>
      <Header visibleGoBack />
      {pokemonInfo && <PokemonInfo pokemon={pokemonInfo} />}
    </Container>
  );
};

export default PokemonInfoPage;
