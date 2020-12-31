import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/authActions';
import { Alert, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import { manualLoginSuccess, manualLogoutSuccess } from '../redux/authActions';

const SignupPage = props => {
  const dispatch = useDispatch();
  const onSuccess = googleUser => {
    console.log(googleUser);
    dispatch(loginSuccess(googleUser));
  }
  const onFailure = error => {
    console.log(error)
  }

  const history = useHistory();

  const handleClick = () => {
    dispatch()
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <Container>
      <Row>
        <Col>
          <Alert variant="info">
            <h1>Welcome to Citizen Report!</h1>
            <hr />
            <h6>Please register below to begin submitting complaints.</h6>
            <div>
              <Form className="needs-validation">
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address:</Form.Label>
                  <Form.Control type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" placeholder="Keep it secret, keep it safe" value={password} onChange={(event) => setPassword(event.target.value)} required />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <Button onClick={() => {
                    handleClick();
                  }}>Login!</Button>
                  <GoogleLogin clientId="591081752316-fisf1og4etovgh35bcg1l99kdo5bgd2r.apps.googleusercontent.com"
                  buttonText="Continue with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  />
                </div>
              </Form>
            <hr />
            </div>
            <hr />
            <div>
              <h5>Already registered?</h5>
              <Button onClick={() => {
                // redirect to Registration
                history.push("/login")
              }}>Log In Page</Button>
            </div>
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}

export default SignupPage;