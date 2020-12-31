import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button, DropdownButton, Dropdown  } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker,
    InfoWindow
} from 'react-google-maps';
// import ComplaintModal from './UpdateComplaintPage';
import { getComplaints } from '../redux/complaintsActions';
import apiKey from '../../config';

const HomePage = props => {
  const dispatch = useDispatch();
  //useSelector to retrive state from redux store -> similar to mapStateToProps
  //state.complaints.complaints -> refers to state(store) - complaints(initial state in reducer) - complaints(actual property complaints)
  const complaintsArray = useSelector(state => state.complaints.complaints);

  const [show, setShow] = useState(false);
  const [currentForm, setCurrentForm] = useState({});

  //after initial rendering, useEffect will invoke dispatch action getComplaints
  //state is updated via succesfulGetComplaints w/ complaints Reducer
  useEffect(() => {
    dispatch(getComplaints());
  }, []);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function ComplaintModal({ currentForm }) {
    // const currComplaint = JSON.stringify(currentForm)
  
    return (
      <>
      <Modal
        size={'lg'}
        show={true}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Current Complaint Details</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Table>
            <thead>
              <tr>
                <th>Address</th>
                <th>Zip Code</th>
                <th>Category</th>
                <th>Description</th>
                <th>Current Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{currentForm.address}</td>
                <td>{currentForm.zipcode}</td>
                <td>{currentForm.category}</td>
                <td>{currentForm.description}</td>
                <td>{currentForm.status}</td>
              </tr>
            </tbody>
          </Table>
          <div className='d-flex justify-content-around'>
            <DropdownButton id="dropdown-basic-button" title="Category">
              <Dropdown.Item href="#/action-1">Undefined</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Water and Power</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Street Repair</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Status">
              <Dropdown.Item href="#/action-1">Not Checked</Dropdown.Item>
              <Dropdown.Item href="#/action-2">In Progress</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Resolved</Dropdown.Item>
            </DropdownButton>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
        </Modal.Footer>
        </Modal>
        </>
      );
    }
  
  function Map() {
    //value of the state and the setter of the state
    const [selectedComplaint, setSelectedComplaint] = useState(null);
    return <GoogleMap
      defaultZoom={10} 
      defaultCenter={{lat: 34.052235, lng: -118.243683}}
    >
      {complaintsArray.map((complaint) =>
        <Marker
          key={complaint.id}
          position={{
            lat: +(complaint.latitude), 
            lng: +(complaint.longitude)
          }}
          onClick={() => {
          //when you click on the complaint it sets selected to that complaint
          setSelectedComplaint(complaint);
          }}
        />
      )}
      {selectedComplaint && (
        <InfoWindow 
          position={{
            lat: +(selectedComplaint.latitude), 
            lng: +(selectedComplaint.longitude)
          }}
          onCloseClick={() => {
            //sets selected complaint to null
            setSelectedComplaint(null);
          }}
        >
          <div>
            <h2>{selectedComplaint.description}</h2>
            <p>{selectedComplaint.status}</p>
            <p>{selectedComplaint.address}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map));
  const onSelectComplaintHandler = (id) => {
    console.log(id);
    const selected = complaintsArray.find(curr => id === curr.id);
    console.log(selected);
    setCurrentForm({...selected});
    console.log(currentForm);
    setShow(true);
  } 
  return (
    <>
      <Container>
        { show  ? (<div>{<ComplaintModal currentForm={currentForm} />}</div>)
                : <p></p>}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Address</th>
              <th>Category</th>
              <th>Complaint</th>
              <th>Current Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {complaintsArray.map((data)=> {
              return (
                <tr>
                  <td>{data.id}</td>
                  <td>{data.address}</td>
                  <td>{data.category}</td>
                  <td>{data.description}</td>
                  <td>{data.status}</td>
                  <td>
                    <Button onClick={() => {onSelectComplaintHandler(data.id)}}>Update</Button>
                    {/* <ComplaintModal handleClose={handleClose} handleShow={handleShow} show={show} /> */}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>

      <Container>
        <div style={{width: '77vw', height: '75vh'}}>
          <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
            loadingElement={<div style={{ height: "100%"}} />}
            containerElement={<div style={{ height: "100%"}} />}
            mapElement={<div style={{ height: "100%"}} />}
          />
        </div>
      </Container>
    </>
  )
}

export default HomePage;