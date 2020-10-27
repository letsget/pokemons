import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Segment } from 'semantic-ui-react';

import { renderInputField } from '../../common/formTools';

const TemporaryPasswordForm = ({ handleSubmit }) => {
  return (
    <Form size="large" onSubmit={handleSubmit}>
      <Segment stacked>
        <Field
          name="confirmationCode"
          type="text"
          placeholder="Code from sms"
          component={renderInputField}
        />
        <Button color="teal" fluid size="large">
          Submit
        </Button>
      </Segment>
    </Form>
  );
};

export default reduxForm({
  form: 'temporary-password-form',
})(TemporaryPasswordForm);
