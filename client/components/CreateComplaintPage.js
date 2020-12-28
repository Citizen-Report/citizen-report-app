import React from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


const CreateComplaintPage = props => {
  return (
    <Container>
      <h3>Enter Your Complaint Details</h3>
      <Form className="needs-validation">
        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" required/>
        </Form.Group>

        <Form.Group controlId="formZipcode">
          <Form.Label>Zipcode</Form.Label>
          <Form.Control type="text" placeholder="Zipcode" required/>
        </Form.Group>

      <Form.Group controlId="formCategory">
        <Form.Label>Choose Category</Form.Label>
        <Form.Control as="select">
          <option>Roads</option>
          <option>Waste Management</option>
          <option>Water & Power</option>
          <option>Animal Control</option>
          <option>Other</option>
        </Form.Control>
      </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" required/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  </Container>
  )
}

export default CreateComplaintPage;
