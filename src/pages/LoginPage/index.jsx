import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm';
import { Grid, Message } from 'semantic-ui-react';

const LoginPage = ({ history }) => {
  const [isVisibleError, setVisibleError] = useState(false);

  const handleSubmit = ({ username, password }) => {
    // Логин — kode@kode.ru
    // Пароль — Enk0deng
    const isValidCredentials =
      username === 'kode@kode.ru' && password === 'Enk0deng';
    if (isValidCredentials) {
      history.push('/confirm-code');
    } else {
      setVisibleError(true);
    }
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <LoginForm onSubmit={handleSubmit} />
        {isVisibleError && (
          <Message
            negative
            header="Authorization failed"
            content="Please try again"
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default LoginPage;
