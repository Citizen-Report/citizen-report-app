import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/authActions';
import { Alert, Button } from 'react-bootstrap';
import { getComplaints, createComplaints, updateComplaints } from '../redux/complaintsActions';

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
    <Container>
      <Row>
        <Col>
          <Alert variant="info">
            <h1>Welcome to Citizen Report!</h1>
           <h1>Hey!</h1>
            <hr />
            <p>Login to access your city management dashboard.</p>
            <p>If you have trouble accessing the dashboard, contact your IT support representative.</p>
            <GoogleLogin
            clientId="591081752316-fisf1og4etovgh35bcg1l99kdo5bgd2r.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
          />
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage;