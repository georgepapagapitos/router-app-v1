import React from 'react';
import { useHistory } from 'react-router';
import { Input, Button } from '../styled-components';

const Login = (props) => {
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    props.onLogin('gpapagapitos');
    history.push('/');
  };

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={onSubmit}>
        <div>
          <Input />
        </div>
        <div>
          <Input type="password" />
        </div>
        <div>
          <Button primary="" type="submit">
            login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;