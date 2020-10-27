import React from 'react';
import { withRouter } from 'react-router-dom';
import TemporaryPasswordForm from '../../components/TemporaryPasswordForm';
import shortid from 'shortid';
import { Grid } from 'semantic-ui-react';

const TemporaryPasswordPage = ({ history }) => {
  const handleSubmit = () => {
    const token = shortid.generate();
    localStorage.setItem('authToken', token);
    history.push('/pokemons');
  };
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <TemporaryPasswordForm onSubmit={handleSubmit} />
      </Grid.Column>
    </Grid>
  );
};

export default withRouter(TemporaryPasswordPage);
