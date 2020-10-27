import React from 'react';
import { Form } from 'semantic-ui-react';

export const renderInputField = ({
  input,
  icon,
  type,
  placeholder,
}) => (
  <Form.Input
    {...input}
    icon={icon}
    placeholder={placeholder}
    type={type}
    required
    fluid
  />
);
