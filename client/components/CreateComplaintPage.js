import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { createComplaints } from '../redux/complaintsActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import apiKey from '../../config';

const CreateComplaintPage = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [category, setCategory] = useState('Roads');
  const [description, setDescription] = useState('');

  const getTimeStamp = () => { 
    let date = new Date();
    return date.toDateString();
  };

  const history = useHistory();
  
  const handleClick = async () => {
    //get lat and long from zipcode entry
    let latitude;
    let longitude;
    const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURI(address) + '&key=' + apiKey);
    const data = await response.json();
    latitude = data.results[0].geometry.location.lat;
    longitude = data.results[0].geometry.location.lng;

    //get city from zipcode entry -> look into googleapi
    let city = 'Defaultington';

    //send dispatch once we have all data
    dispatch(createComplaints(
      {
        email: email,
        address: address,
        city: city,
        zipcode: zipcode,
        latitude: latitude,
        longitude: longitude,
        category: category,
        description: description,
        status: "Not checked",
        created_on: getTimeStamp()
      }
    ));
      //redirect to root after submitting new complaint
    history.push("/")
  };
    
  return (
    <Container>
      <h3>Enter Your Complaint Details</h3>
      <Form className="needs-validation">
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
        </Form.Group>
        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address, City, and State" value={address} onChange={(event) => setAddress(event.target.value)} required/>
        </Form.Group>
        <Form.Group controlId="formZipcode">
          <Form.Label>Zipcode</Form.Label>
          <Form.Control type="text" placeholder="Zipcode" value={zipcode} onChange={(event) => setZipcode(event.target.value)} required/>
        </Form.Group>
        <Form.Group controlId="formCategory">
          <Form.Label>Choose Category</Form.Label>
            <Form.Control as="select" value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="Roads">Roads</option>
            <option value="Waste Management">Waste Management</option>
            <option value="Water & Power">Water & Power</option>
            <option value="Animal Control">Animal Control</option>
            <option value="Other">Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="A Short Description" value={description} onChange={(event) => setDescription(event.target.value)} required/>
        </Form.Group>
        <Button onClick={() => {
          handleClick();
        }}>Create complaint!</Button>
      </Form>
    </Container>
  )
};

export default CreateComplaintPage;

