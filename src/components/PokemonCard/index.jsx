import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

const PokemonCard = ({ pokemon: { name, imageUrl, id } }) => {
  return (
    <Card className="pokemon-card" to={`/pokemons-info/${id}`} as={Link}>
      <Image src={imageUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export { PokemonCard };
