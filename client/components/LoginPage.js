import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/authActions';


const LoginPage = props => {

  const dispatch = useDispatch();

  const onSuccess = googleUser => {
    console.log(googleUser);
    dispatch(loginSuccess(googleUser));
  }

  const onFailure = error => {
    console.log(error)
  }

  return (
    
    <Container className="d-flex h-66 justify-content-center align-items-center">
      
      {/* <Form>
        <h3>Please Sign In</h3>
        <Form.Group controlId="formUsername">
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        
        <Button className="w-100" variant="primary" type="submit">
          Sign In
        </Button>
      </Form> */}

      <GoogleLogin 
        clientId="591081752316-fisf1og4etovgh35bcg1l99kdo5bgd2r.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
      
    </Container>
    
  )
}

export default LoginPage;