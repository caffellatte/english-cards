import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getLogin } from '../redux/actions';
import { useHistory } from 'react-router-dom';
import { AuthState } from '../redux/AuthState';

declare module 'react-redux' {
  interface DefaultRootState extends AuthState {}
}

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state.user);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(login && password) {
      if (state.login === login && state.pass === password) {
        setError(null);
        dispatch(getLogin());
        history.push("/")
      } else {
        setError('Credentials did not match');
      }
      console.log(login, password);
    } else {
      setError('Wrong Credentials');
    }
  }

  return(
    <section className='section bg-light'>
      <div
        className='container ht-100 d-flex justify-content-center align-items-center'
        style={{ height: '100vh'}}
      >
        <div className='card p-2 shadow-lg d-flex card-width-300 justify-content-center align-items-center'>
          <h4>
            Login
          </h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="login">
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="text"
                placeholder="Login"
                onChange={e => setLogin(e.target.value)}
              />
              <Form.Text className="text-muted">
                login/password: admin/admin
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
              />
              { error && <Form.Text className="text-danger">
                {error}
              </Form.Text>}
            </Form.Group>
            <Button variant="primary" type="submit">
              Sumbit
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
