import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { createComplaints } from '../redux/complaintsActions';
import { useDispatch } from 'react-redux';


const CreateComplaintPage = props => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState('');
   
  const getTimeStamp = () => { 
    let date = new Date();
    return date.toDateString();
  };

  // const complaint = {
  //   location: document.getElementById("formAddress").value,
  //   zipcode: document.getElementById("formZipcode").value,
  //   lat_lon: "37.97121, -122.35544",
  //   category: document.getElementById("formCategory").value,
  //   description: document.getElementById("formDescription").value,
  //   user_ip: "059",
  //   status: "Not checked",
  //   created_on: getTimeStamp()
  // }


  return (
    <Container>
      <h3>Enter Your Complaint Details</h3>
      <Form className="needs-validation">
        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" value={address} onChange={(event) => setAddress(event.target.value)} required/>
        </Form.Group>

        <Form.Group controlId="formZipcode">
          <Form.Label>Zipcode</Form.Label>
          <Form.Control type="text" placeholder="Zipcode" value="value" required/>
        </Form.Group>

      <Form.Group controlId="formCategory">
        <Form.Label>Choose Category</Form.Label>
        <Form.Control as="select">
          <option value="Roads">Roads</option>
          <option value="Waste Management">Waste Management</option>
          <option value="Water & Power">Water & Power</option>
          <option value="Animal Control">Animal Control</option>
          <option value="Other">Other</option>
        </Form.Control>
      </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" value="value" required/>
        </Form.Group>

        {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}

        <Button type= "submit" onClick={() => {dispatch(createComplaints({ address }))}}>Create complaint!</Button>
    </Form>
  </Container>
  )
}

export default CreateComplaintPage;

