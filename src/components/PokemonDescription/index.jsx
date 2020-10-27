import React from 'react';
import { List, Divider } from 'semantic-ui-react';
import shortid from 'shortid';

const PokemonDescription = ({
  description: { name, types, evolvesFrom, subtype, attacks },
}) => {
  return (
    <>
      <List>
        <List.Item>{`Name: ${name}`}</List.Item>
        {types && <List.Item>{`Type: ${types}`}</List.Item>}
        <List.Item>{`Subtype: ${subtype}`}</List.Item>
      </List>
      <Divider />
      {attacks && (
        <List>
          {attacks.map(({ name, damage }) => (
            <div key={shortid.generate()}>
              <List.Item>{`Ability: ${name}`}</List.Item>
              <List.Item>{`Damage: ${damage}`}</List.Item>
              <Divider />
            </div>
          ))}
          {evolvesFrom && (
            <List.Item>{`Evolves from: ${evolvesFrom}`}</List.Item>
          )}
        </List>
      )}
    </>
  );
};

export default PokemonDescription;
