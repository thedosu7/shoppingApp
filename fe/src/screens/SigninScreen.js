import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import Axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { CartStore } from '../pages/CartStore';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaste, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { handleError } from '../utils';

export default function SigninScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, dispatch: ctxDispatch } = useContext(CartStore);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/users/signin', {
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(handleError(err));
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <div className="appForm">
        <NavLink
          to="/signin"
          activeClassName="formTitleLink-active"
          className="formTitleLink"
        >
          Sign In
        </NavLink>{' '}
        or{' '}
        <NavLink
          exact
          to="/signup"
          activeClassName="formTitleLink-active"
          className="formTitleLink"
        >
          Sign Up
        </NavLink>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mt-3" controlId="email">
            <Form.Label className="formFieldLabel" htmlFor="email">
              <FontAwesomeIcon icon={faUserAstronaut} size="1x" /> Email
            </Form.Label>
            <Form.Control
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mt-3" controlId="password">
            <Form.Label className="formFieldLabel" htmlFor="password">
              <FontAwesomeIcon icon={faPaste} size="1x" /> Password
            </Form.Label>
            <Form.Control
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="mb-3">
            <Button className="formFieldButton" type="submit">
              Sign In
            </Button>
          </div>
          <div className="mb-3">
            New customer?{' '}
            <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
          </div>
        </Form>
      </div>
    </Container>
  );
}
