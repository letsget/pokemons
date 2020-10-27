import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import shortid from 'shortid';
import PokemonDescription from '../PokemonDescription';

const PokemonInfo = ({ pokemon }) => {
  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Image size="large" src={pokemon.imageUrlHiRes} />
        </Grid.Column>
        <Grid.Column>
          <PokemonDescription description={pokemon} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        {pokemon.attacks && (
          <Grid.Column>
            {pokemon.attacks.map(({ text }) => (
              <span key={shortid.generate()}>{text}</span>
            ))}
          </Grid.Column>
        )}
      </Grid.Row>
    </Grid>
  );
};

export default PokemonInfo;
