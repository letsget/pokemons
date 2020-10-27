import React from 'react';
import { Grid } from 'semantic-ui-react';
import shortid from 'shortid';

import { PokemonCard } from '../PokemonCard';

const PokemonsList = ({ pokemons }) => {
  return pokemons.map((pokemon) => {
    return (
      <Grid.Column key={shortid.generate()}>
        <PokemonCard pokemon={pokemon} />
      </Grid.Column>
    );
  });
};

export { PokemonsList };
